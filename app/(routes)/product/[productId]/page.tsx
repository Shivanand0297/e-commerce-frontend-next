import { getProductById } from "@/actions/getProduct";
import { getProducts } from "@/actions/getProducts";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery/Gallery";
import Container from "@/components/ui/Container";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProductById(params.productId);
  const relatedProducts = await getProducts({ categoryId: product.category.id });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="my-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} />
            </div>
          </div>
          <div className="my-10">
            <ProductList title="Related Products" items={relatedProducts}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
