// props: { author: "", content: "" }

export function Post(props) {
    return (
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    )
}

// export default Post

// Default Exports vs Named Exports