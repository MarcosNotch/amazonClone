async function useGetProducts() {
    const url = "https://fakestoreapi.com/products";



    const response = await fetch(url);
    const products = await response.json();

    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }

  return { products };
}

export default useGetProducts;
