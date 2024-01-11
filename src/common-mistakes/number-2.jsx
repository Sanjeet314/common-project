import { useEffect, useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0);
    console.log("Rendering");

    useEffect(() => {
        const i = setInterval(() => {
            console.log('dc of setInterval')
            setCount(prev => prev + 1);
        }, 1000);
        //return () => {clearTimeout(i)}
    },[]);//[count]

    return <p>{count}</p>
}