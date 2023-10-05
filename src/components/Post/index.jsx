import { useParams } from "react-router-dom"
import posts from '../../json/posts.json'
import { PostModelo } from "../../components/PostModelo"
import ReactMarkdown from 'react-markdown'
import './Post.css'

export const Post = () => {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if(!post){
        return
    }  
    return(
        <PostModelo
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
       
        </PostModelo>
    )
}