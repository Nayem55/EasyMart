import { useEffect, useState } from "react";

const useProduct=()=>{
    const [products, setproducts] = useState([]);
    useEffect(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setproducts(data));
    }, []);
    return [products]
}
export default useProduct;