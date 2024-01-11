//Conditinal rendering
import { useEffect, useState } from "react"


const ProductDetails = ({id}) => {
    if(!id) return "No ID Provided";

    const [data, setData] = useState('bla');
    useEffect(() => {}, [data])

    return <section></section>
}

export default ProductDetails;