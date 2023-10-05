import styles from './BotaoPincipal.module.css'

export const BotaoPrincipal = ({children, tamanho}) => {
    return(
        <button 
            className={`
                ${styles.botaoPrincipal}
                ${styles[tamanho]}
            `}
        >
            {children}
        </button>
    )
}