import Head from "next/head"
import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import RouletteEntrance from "../components/RouletteEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title >Roulette</title>
                <meta name="description" content="Roulette" />
                <link rel="icon" href="/roulette-wheel.ico" sizes="32x32"/>
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <RouletteEntrance />
        </div>
    )
}