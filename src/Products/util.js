const baseUrl = process.env.REACT_APP_BASE_URL

export const getProducts = async () => {
    try {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
    } 
    catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }