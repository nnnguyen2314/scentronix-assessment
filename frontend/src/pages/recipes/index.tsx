import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import RecipeDetailsContainer from "@modules/recipe/features/containers/RecipeDetailsContainer";

const RecipesPage: NextPage = () => {
    return (
      <RootLayout>
          <div>
              <RecipeDetailsContainer />
          </div>
      </RootLayout>
    );
};

export default RecipesPage;