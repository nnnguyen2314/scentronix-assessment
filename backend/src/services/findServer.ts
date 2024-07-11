import axios from 'axios';
import {IWebServer} from "../interfaces/IWebServer";

const findServer1 = async (servers: IWebServer[]): Promise<IWebServer> => {
    const promises = servers.map(async (server) =>  {
        const { data } = await axios.get(server.url, { timeout: 5000, responseType: 'json' });
        console.log(data);

        return data.then(() => {
            return {...server, ...{ online: true }};
        })
            .catch(() => {
                return {...server, ...{ online: false }};
            });
    });

    const results = await Promise.all(promises);

    const onlineServers = results.filter(server => server.online) as IWebServer[];

    if (onlineServers.length === 0) {
        throw new Error('No servers are online.');
    }

    return onlineServers.reduce((prev, current) => (prev.priority < current.priority ? prev : current));
};

const findServer = async (servers: IWebServer[]): Promise<IWebServer> => {
    let timeoutId: null | ReturnType<typeof setTimeout> = null;

    const requests = servers.map(async (server) => {
        const response = await fetch(server.url, { signal: AbortSignal.timeout(5000) }).catch(() => null);

        if (response && response.ok) {
            return { server, online: true };
        } else {
            return { server, online: false };
        }
    });

    const results = await Promise.all(requests);

    const onlineServers = results.filter((result) => result.online);

    if (onlineServers.length === 0) {
        throw new Error('No servers are online.');
    }

    onlineServers.sort((a, b) => a.server.priority - b.server.priority);

    return onlineServers[0].server;
};

export default findServer;