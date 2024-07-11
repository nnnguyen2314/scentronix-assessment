import findServer from '../../src/services/findServer';
import fetchMock from 'jest-fetch-mock';
import {IWebServer} from "../../src/interfaces/IWebServer";

jest.mock('axios');

beforeEach(() => {
    fetchMock.resetMocks();
});

test.concurrent('findServer returns server with lowest priority', async () => {
    const servers: IWebServer[] = [
        { url: 'https://does-not-work.perfume.new', priority: 1 },
        { url: 'https://gitlab.com', priority: 4 },
        { url: 'http://app.scnt.me', priority: 3 },
        { url: 'https://offline.scentronix.com', priority: 2 },
    ];

    fetchMock.mockResponses(
        ['ok', { status: 200 }],
        ['ok', { status: 200 }],
        ['error', { status: 404 }]
    );

    const result = await findServer(servers);

    expect(result.url);
}, 5000);