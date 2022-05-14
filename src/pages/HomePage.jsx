import './styles/HomePage.scss'

const HomePage = () => {

    const posts = [
        {
            id: 1,
            title: "This is my first post",
            content: "This is the content of my first post",
            created_at: "2022-05-03 10:26:53",
            created_by: "Luis Angel Avila",
            updated_at: "2022-05-03 10:26:53",
            updated_by: "Luis Angel Avila"
        },
        {
            id: 2,
            title: "This is my second post",
            content: "This is the content of the second post",
            created_at: "2022-05-10 09:56:14",
            created_by: "Carlos Augusto Almanza Perez",
            updated_at: "2022-05-10 09:56:14",
            updated_by: "Carlos Augusto Almanza Perez"
        },
        {
            id: 3,
            title: "This is other post",
            content: "This is the content of the other post",
            created_at: "2022-05-12 08:59:32",
            created_by: "Carlos Augusto Almanza Perez",
            updated_at: "2022-05-12 09:56:32",
            updated_by: "Carlos Augusto Almanza Perez"
        }
    ]

    return (
        <div className="home-page">
            {posts.map(post => (
                <article key={post.id} className="post-item">
                    <h4 className='title'>{post.title}</h4>
                    <p className='content'>{post.content}</p>
                    <div className="info">
                        <span>{`${new Date(post.created_at).toLocaleDateString('es-CO')} ${new Date(post.created_at).toLocaleTimeString('es-CO')}`}</span>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default HomePage