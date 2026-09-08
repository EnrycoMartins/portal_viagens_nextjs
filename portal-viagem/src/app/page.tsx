import Link from "next/link";
import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <Title title="Descubra a Coreia do Sul" />
          <p className={styles.descricao}>
            O Portal de Viagens KR reúne os destinos mais incríveis da Coreia
            do Sul em um só lugar — da energia de Seul às paisagens
            vulcânicas de Jeju, passando por templos milenares e cidades
            litorâneas. Explore nossos destinos e comece a planejar sua
            próxima viagem.
          </p>
          <Link href="/destinos" className={styles.botao}>
            Ver destinos
          </Link>
        </div>

        <div className={styles.bandeiraWrapper}>
          <img
            src="https://flagcdn.com/w320/kr.png"
            alt="Bandeira da Coreia do Sul"
            className={styles.bandeira}
          />
        </div>
      </div>
    </main>
  );
}