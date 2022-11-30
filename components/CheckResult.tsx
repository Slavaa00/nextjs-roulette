import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"


function CheckResult() {

    const {
        updateUI,
        checkNetwork,
        handleSuccess,
        goerliNetwork,
        setGoerliNetwork,
        Moralis,
        chainId,
        account,
        owner,
        wheelSpinning,
        abi,
        rouletteAddress,
        allPlayersWinnings,
        currentCasinoBalance,
        lastWinningNumber,
        msgValue,
        _betType,
        _numbers
    }: any = useContext(AppContext)

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <button className="text-3xl bg-[#533adb] text-white font-bold py-2 px-4 rounded-md active:opacity-50  disabled:opacity-50 hover:bg-blue-500" onClick={async () => {await updateUI()}} disabled={wheelSpinning}>Check Result</button>
                <div><p className={`${wheelSpinning ? ("text-red-600 text-xl text-center -mb-7") : ("hidden") } " font-bold block p-2`}>Please make a Bet(s) MORE than Start Game Value (0.000000001 ETH) OR wait a few seconds if you have already done so. Roulette is spinning!{" "}
                </p></div>
              
            </div>
        </>
    )
}

export default CheckResult
