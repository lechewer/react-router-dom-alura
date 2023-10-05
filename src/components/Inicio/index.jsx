import { PostCard } from "../PostsCard"
import posts from '../../json/posts.json'
import styles from './Post.module.css'



export const Inicio = () => {
    return(
     
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>  
                ))}
            </ul>
            
        
    )
}