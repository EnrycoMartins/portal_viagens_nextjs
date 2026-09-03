import { Viagem } from "@/types/types";
import styles from './Card.module.css'

type Props = {
    viagem : Viagem
}

const Card = ({viagem} : Props) => {
    const {id, local_viagem, imagem, description, preco} = viagem;

    return(
        <div className={styles.card} key={id}>
            <img className={styles.card__imagemlocal} src={imagem} alt={`Imagem do Destino ${local_viagem}`} width={350} height={450} />
            <div className={styles.card__info}>
                <h3 className={styles.card__destino}>{local_viagem}</h3>
                <p className={styles.card__description}>{description}</p>
                <p> R$: {preco}</p>
            </div>
        </div>
    );
}
export default Card;