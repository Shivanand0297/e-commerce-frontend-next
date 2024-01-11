import { getBillboardById } from "@/actions/getBillboard";
import { getProductList } from "@/actions/getProductList";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

const HomePage = async () => {
  const billboard = await getBillboardById("193296fb-64ef-47a2-9306-99f810c50de6");
  const products = await getProductList({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
