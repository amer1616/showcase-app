// @ts-nocheck
// @ts-ignore
export const load = async ({ fetch, params }) => {
  // @ts-ignore
  console.log(params);
  const fetchProduct = async (id) => {
    const productRes = await fetch(`https://dummyjson.com/products/${id}`);
    const productData = await productRes.json();
    return productData;
  };
  return {
    product: fetchProduct(params.productId),
  };
};
