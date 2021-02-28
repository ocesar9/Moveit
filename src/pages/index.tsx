import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";


import Head from "next/head"
import { GetServerSideProps } from "next"

import styles from "../styles/pages/Home.module.css"
import { CountdownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengeContext";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Home(props:HomeProps) {



  return (
    <ChallengesProvider //passando dados para um elemento.
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}

    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />

            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => { //Manipular os dados do Next para o cliente. //e associando a função do next



  const { level, currentExperience, challengesCompleted } = ctx.req.cookies //recuperando dados

  return { //antes de construir a tela vai repassar os dados para serem mostrados em tela.

    props: {
      level:Number(level), //convertendo em número.
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}

// back-end (ruby)
// netx.js (node.js)
// front-end (React)


