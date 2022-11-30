import { useContext, useEffect, useState} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

import PlayerBets from "./PlayerBets"
import CheckResult from "./CheckResult"
import Withdraw from "./Withdraw"

function PlayerUI() {

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

    const [playerBalance, setPlayerBalance] = useState("0")

    useEffect(() => {
        if (account) {
            async function asyncUpdatePlayerBalance() {
                        await updatePlayerBalance()
                    }
                    asyncUpdatePlayerBalance()
        }
        

    }, [overallLiquidity, account])


    async function updatePlayerBalance() {
        await contract.checkBalance(account).then((value: any) => {
            if (value.toString() != playerBalance) {
                setPlayerBalance(value.toString())

            }
         })
    }
   
// [#ff0062]
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <p className="py-4 px-7 text-3xl font-semibold rounded-[15px] w-max  text-white bg-[#533adb]">Your Current Balance: <span className="text-white ">{ethers.utils.formatEther(playerBalance)} ETH</span> </p>
                <PlayerBets playerBalance={playerBalance}/>
                <CheckResult />
                <Withdraw />

              
            </div>
        </>
    )
}


export default PlayerUI
