// @ts-ignore
export const load = async ({ fetch, params }) => {
  const fetchProducts = async () => {
    const productRes = await fetch("https://dummyjson.com/products?limit=10");
    const productData = await productRes.json();
    return productData.products;
  };

  const fetchUsers = async () => {
    const usersRes = await fetch("https://dummyjson.com/users?limit=10");
    const usersData = await usersRes.json();
    return usersData.users;
  };

  // fetching multiple req promises, products & users - u should user
  return {
    products: fetchProducts(),
    users: fetchUsers(),
  };
};
