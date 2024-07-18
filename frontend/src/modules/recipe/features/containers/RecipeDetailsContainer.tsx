import * as React from "react";
import RecipeDetails from "@modules/recipe/features/components/RecipeDetails";

const mockData = {
    name: 'Whole-Grain Banana Bread',
    description: "This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.",
    imageUrl: 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-09/whole-grain-banana-bread-3_0822.jpg',
    prepTime: '10 mins',
    bakeTime: '1 hr to 1 hr 15 mins',
    total: '1 hr 25 mins',
    yield: 'one 9" x 5" loaf'
}

const RecipeDetailsContainer = () => {
    return (
        <RecipeDetails
            name={mockData.name}
            description={mockData.description}
            imageUrl={mockData.imageUrl}
            prepTime={mockData.prepTime}
            bakeTime={mockData.bakeTime}
            totalTime={mockData.total}
            yieldValue={mockData.yield}
        />
    );
};

export default RecipeDetailsContainer;