import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Peter Park, Mais conhecido como Homem-Aranha. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src='https://blog.br.playstation.com/tachyon/sites/4/2022/06/c50ed40ccbee94460e55dee40a077efc09474a20.jpg'
                    alt=""
                />
            </div>
        </div>
    )
}