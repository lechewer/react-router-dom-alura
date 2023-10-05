import { PostModelo } from "../PostModelo"
import styles from './SobreMim.module.css'





export const SobreMim = () => {
    return(
       
            <PostModelo
                titulo={'Sobre Mim'}
            >
                <h3 className={styles.subtitulo}>
                    Yo soy Peter Parker
                </h3>

                <img 
                    src="https://t.ctcdn.com.br/4Z2eSjVWIL2A3_60sG8dLuTEyiM=/196x16:1914x984/1718x966/smart/i336725.jpeg" 
                    alt="My picture" 
                    className={styles.fotoSobreMim}
                />

                <p className={styles.paragrafo}>
                    O Homem-Aranha (Spider-Man), o alter ego de Peter Parker, 
                    é um super-herói que aparece nas revistas em quadrinhos publicadas 
                    pela Marvel Comics. Criado pelo escritor/editor Stan Lee e pelo escritor/artista 
                    Steve Ditko, o Homem-Aranha apareceu pela primeira vez na Amazing Fantasy #15 
                    (01 de Agosto de 1962), durante a Era de Prata dos Quadrinhos. 
                    Lee e Ditko conceberam o personagem como um órfão que foi educado e criado pela sua tia 
                    (May Parker) e o seu tio (Ben Parker) em Nova Iorque e que, enquanto adolescente, 
                    tem de lidar com as lutas diárias normais da sua idade, em adição às lutas que tem como 
                    combatente do crime. Para combater seus inimigos, os criadores deram-lhe superforça e 
                    superagilidade, a capacidade de aderir na maioria das superfícies, a habilidade de 
                    disparar teias de aranha através de mecanismos montados nos pulsos 
                    (inventados por ele próprio e batizados de "lança-teia" — web-shooters) e a reação 
                    precognitiva ao perigo chamada "sentido-aranha" (spider-sense). 
                    Peter Parker adquiriu seus poderes após ter sido picado por uma aranha radioativa.
                </p>

                <p className={styles.paragrafo}>
                    O Homem-Aranha é um dos super-heróis mais populares e mais bem-sucedidos comercialmente.
                    Como o mascote da Marvel, já apareceu em inúmeras formas de mídia, incluindo em várias séries de 
                    televisão animadas e ao vivo, tiras de jornais sindicados, em jogos eletrônicos e numa série de 
                    filmes em que foi interpretado por Tobey Maguire (2002–2007), Andrew Garfield (2012–2014), e Tom Holland
                    que tem o papel do personagem no Universo Cinematográfico da Marvel, começando em 2016 com 
                    Capitão América: Guerra Civil.
                </p>
            </PostModelo>
        
    )
}