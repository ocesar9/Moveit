import {createContext, useState, ReactNode, useEffect} from "react"
import challenges from "../../challenges.json"
import Cookies from "js-cookie"
import { LevelUpModal } from "../components/LevelUpModal"


interface ChallengesProviderProps { //passando estrutura  e definindo que ele pode aceitar qualquer elemento como children
    children: ReactNode
}

interface Challenge { //definindo a interface de um elemento de outra interface
    type: "body" | "eye";
    description: string;
    amount: number;
}

interface ChallengesContextData { //passando estruturas e definindo tipo de várivavel
    level: number;
    currentExperience: number,
    challengesCompleted: number,
    experienceToNextLevel: number,
    activeChallenge: Challenge,
    levelUp: () => void, //passando um função sem retorno
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
    closeLevelUpModal: () => void
    
}

interface ChallengesProviderProps {
    children: ReactNode
    level: number,
    currentExperience: number,
    challengesCompleted: number,
  }
  

export const ChallengeContext = createContext({} as ChallengesContextData) //uma forma de ter acesso a uma informação de vários lugares. //ele segue o formato de challengesContextData


export function ChallengesProvider({
        children,
        ...rest //,level,currentExperience,challengesCompleted
    } : ChallengesProviderProps) {
    const [level,setLevel] = useState(rest.level ?? 1) //se não tiver valor põe 1
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0) 
    const [challengesCompleted,setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)

    const [activeChallenge,setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen,setIsLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level +1) *4,2) //calculando level

    useEffect(() => {
        Notification.requestPermission(); //Notificações do navegador
    }, []) //é disparado a partir de algo que já aconteceu

    useEffect(()=>{
        Cookies.set("level", String(level)) //convertendo em string
        Cookies.set("currentExperience", String(currentExperience))
        Cookies.set("challengesCompleted", String(challengesCompleted))

    },[level,currentExperience,challengesCompleted])


    function levelUp(){
      setLevel(level + 1)
      setIsLevelUpModalOpen(true)
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false)
    }
    
    function startNewChallenge () {
        // console.log("New Challenge")
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length) //retorna um valor aleatório inteiro da array
        const challenge = challenges[randomChallengeIndex] //definindo a geração de desafios numa unica variável.

        setActiveChallenge(challenge)

        if (Notification.permission === "granted") { //se foi permitido o envio de notificações
            new Notification("Novo desafio",{
                body: `Valendo ${challenge.amount} xp!`
            })
        }

        new Audio("/notification.mp3").play() //Tocando audio a partir da notificação


    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return( //passando estruturas para o componente que podem ser acessados por outra pagina (componente challenge possui um outro componente dentro dele)
        <ChallengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            experienceToNextLevel,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            completeChallenge,
            closeLevelUpModal
            }}>
            {children} 

             {isLevelUpModalOpen && <LevelUpModal/>} {/*Verificar se ele esta aberto */}
        </ChallengeContext.Provider>
    )
}