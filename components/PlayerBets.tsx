import { useContext, useEffect, useState} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

import { v4 } from 'uuid';

function PlayerBets({playerBalance}) {
    const [playerBetsArray, setPlayerBetsArray] = useState([])
    const [respond, setRespond] = useState()

    const {
        updateUI,
        checkNetwork,
        handleSuccess,
        goerliNetwork,
        setGoerliNetwork,
        Moralis,
        account,
        contract,
        chainId,
        wheelSpinning,
        abi,
        rouletteAddress,
        allPlayersWinnings,
        currentCasinoBalance,
        lastWinningNumber,
        msgValue,
        _betType,
        _numbers,
        overallLiquidity
    }: any = useContext(AppContext)

    async function updateBetsArr() {
        await contract.betsArr(0).then((value: any) => {
            
            setRespond(value)

         
         })
    }
    useEffect(() => {
        async function asyncUpdateBetsArr() {
            await updateBetsArr()
        }
        asyncUpdateBetsArr()


    }, [])

    //  useEffect(() => {
    //     respond ? console.log(parseInt(respond[1]?._hex).toString()) :  null


    // }, [respond]) 
    
    return (
        <>
            <div className="flex flex-col justify-center items-center w-max h-[500px] border-2 border-[#000] mt-4">
               {/* {respond ? respond.map(function(bet) {return <div key={v4()}>{bet.toString()}</div>}) : null } */}
              {respond ? parseInt(respond[1]?._hex).toString() : null}
            </div>
        </>
    )
}

export default PlayerBets
