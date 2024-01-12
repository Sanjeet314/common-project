import { useEffect, useState } from "react";

export default function Post () {
    const [id, setId] = useState(1);

    return (
        <div>
            <button onClick={() => setId(Math.floor(Math.random() * 100))}>
                Show me a Post
            </button>
            <PostBody id={id}/>
        </div>
    )
}

export function PostBody({ id }) {
    const [text, setText] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`https://dummyjson.com/posts/${id}`, { signal })
            .then(res => res.json())
            .then((data) => setText(data.body))
            .catch((error) => {
                if (error.name === 'AbortError') {
                    console.log('AbortError: Fetch request aborted');
                    // Display a message to the user indicating that the request was aborted
                } else {
                    console.log(error);
                    // Display a general error message to the user
                }
            });

        return () => {return controller.abort();};
    }, [id]);

    return (
        <div>
            {text}
        </div>
    )
}
