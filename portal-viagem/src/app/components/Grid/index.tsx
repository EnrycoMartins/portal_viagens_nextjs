import { Viagem } from "@/types/types";
import Card from "../Card";
import styles from './Grid.module.css'

type Props = {
    viagem : Viagem[]
}

const Grid = ({viagem} : Props) => {

    return(
        <section className={styles.grid}>
            {viagem.map(viagem => <Card key={viagem.id} viagem={viagem}/>)}
        </section>
    );
}
export default Grid;