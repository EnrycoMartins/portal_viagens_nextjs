import Grid from "../components/Grid";
import Title from "../components/Title";
import {destino} from "@/lib/destino"

const Destinos = () => {
    return(
        <>
            <Title title="Destinos"/>
            <Grid viagem={destino}/>
        </>
    );
}
export default Destinos