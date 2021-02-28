import {createContext,ReactNode, useContext, useEffect, useState} from "react"
import { ChallengeContext } from "./ChallengeContext"


interface CountdownContextData {
    minutes: number,
    seconds:number,
    hasfinished: boolean,
    isActive: boolean,
    startCountdown:() => void,
    resetCountdown:() => void
}

interface CountdownProviderProps { //passando estrutura  e definindo que ele pode aceitar qualquer elemento como children
    children: ReactNode
}



export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider ({children} : CountdownProviderProps) {

    const {startNewChallenge} = useContext(ChallengeContext)

    const [time, setTime] = useState(0.1 * 60) //25 min
    const [isActive, setIsActive] = useState(false)
    const [hasfinished, setHasfinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasfinished(false)
        setTime(0.1 * 60) // 25 min
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1) //25:00 - 00:01
            }, 1000) //1 sec
        } else if (isActive && time === 0) {
            console.log("Finalizou")
            setHasfinished(true)
            setIsActive(false)
            startNewChallenge();
        }
    }, [isActive, time])



    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasfinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}