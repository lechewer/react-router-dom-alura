import styles from './Footer.module.css'
import MarcaRegistrada  from '../../assets/marca_registrada.svg'

export const Footer = () => {
    return(
        <footer className={styles.rodape}>
            <img src={MarcaRegistrada} alt="Marca registrada" />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}