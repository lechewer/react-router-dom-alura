
import styles from './PostModelo.module.css'

export const PostModelo = ({titulo, children}) => {
    return(
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{backgroundImage: `linear-gradient(180deg, rgba(130,4,3,1) 30%, rgba(82,0,0,1) 93%, rgba(255,255,255,1) 96%)`}}
            ></div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div
                className={styles.postConteudoContainer}
            >
                {children}
            </div>
        </article>
    )
}