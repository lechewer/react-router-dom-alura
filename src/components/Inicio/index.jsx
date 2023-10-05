import { Post } from "../../components/Posts"
import Banner from "../../components/Banner"
import posts from '../../json/posts.json'
import styles from './Post.module.css'



export const Inicio = () => {
    return(
        <main>
            <Banner/>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>  
                ))}
            </ul>
            
        </main>
    )
}