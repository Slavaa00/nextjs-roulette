import { useContext, useEffect, useState} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

import { v4 } from 'uuid';

import styles from "../styles/PlayerBets.module.css"


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
        await contract.getArrayOfBets().then((value: any) => {
            
            setRespond(value)

         
         })
    }
    useEffect(() => {
        async function asyncUpdateBetsArr() {
            await updateBetsArr()
        }
        asyncUpdateBetsArr()


    }, [])

     useEffect(() => {
        respond ? console.log((respond.filter(function(bet) {return bet[0].toLowerCase() == account.toLowerCase()})).map(function(item) {return item[0].toString().toLowerCase() == account.toLowerCase()}) ) :  null

// .map(function(ourBet) {return ourBet[0][0].toString()}
    }, [respond]) 
      //  {respond ? respond.filter(function(bet) {return <div key={v4()}>{bet[0]}</div>}) : null }

    function writeBetType(_betType) {
        if (_betType == 0) {
            return 
        }
    }

    return (
        <>
            <div className="flex flex-col justify-start items-center w-[500px] h-[500px] border-2 border-[#000] mt-4">

                <div className="text-2xl font-medium text-[#533adb]">Your Recent Bets:
                </div>

                <div className="flex justify-between w-[500px] mt-2">
                    <div className="font-bold "><span>Amount:</span></div>
                    <div className="font-bold "><span>Bet Type:</span></div>
                    <div className="font-bold " ><span>Number(s):</span></div>
                    
                  
                </div>

                   
                    <div className={styles.playerBet} /*className="flex justify-between w-[620px] h-[450px] mt-2 border-2 "*/>
                  
                    {respond ? ((respond.filter(function(bet) {return bet[0].toLowerCase() == account.toLowerCase()})).map(function(item) {return (
                    <>
                    
                    {/* <div key={v4()} className={styles.playerBet}> */}

                     <div className="font-semibold w-1/3 border-2 text-center"><span>{ethers.utils.formatEther(item[1].toString().toLowerCase())} ETH</span></div>
                     <div className="font-semibold w-1/3 border-2 text-center"><span>{item[2]}</span></div>
                     <div className="font-semibold w-1/3 border-2 text-center"><span> {item[3]}</span></div>

                     {/* </div> */}
                       
                       
                        </>)})) 
                        
                        
                        
                        : (null) }
                    
                    </div>

                   
            </div>
        </>
    )
}

export default PlayerBets
