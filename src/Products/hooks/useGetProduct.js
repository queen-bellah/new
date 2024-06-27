
import { getProducts } from "../util";
import { useEffect, useState } from "react"

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const result = await getProducts();
                setProducts(result);
                setLoading(false);
            } catch (error) {
                setError(`Error: ${error.message}`);
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return { products, error, loading };
}