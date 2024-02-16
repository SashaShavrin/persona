import { Feature } from "../Feature/component";
import { Cases } from "../Cases/component";
import { FilterCases } from "../FilterCases/component";
import { SelectedCategories } from "../SelectedCategories/component";
import { Layout } from "../Layout/component";
import { Main } from "../Main/Main";

export const HomePage = () => {
  return (
    <div>
      <Main />
      <Layout>
        <Feature />
        <SelectedCategories />
        <FilterCases />
        <Cases />
      </Layout>
    </div>
  );
};
