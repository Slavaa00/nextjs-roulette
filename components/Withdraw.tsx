import { useContext, useEffect, useState} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"


function Withdraw() {
    const [isOwner, setIsOwner] = useState(false)

    const {
        updateUI,
        checkNetwork,
        handleSuccess,
        goerliNetwork,
        setGoerliNetwork,
        Moralis,
        account,
        owner,
        overallLiquidity,
        chainId,
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

    const {
        runContractFunction: withdrawPlayer,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: rouletteAddress!, 
        functionName: "withdrawPlayer",
        
    })

    const {
        runContractFunction: withdrawOwner,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: rouletteAddress!, 
        functionName: "withdrawOwner",
        
    })
    useEffect(() => {
        if (account) {
            if (account.toLowerCase() == owner.toLowerCase()) {
                setIsOwner(true)
            } else {    
                setIsOwner(false)
                
            }
        }
       
}, [account])
// <span>{ethers.utils.formatEther(allPlayersWinnings).toString()}</span> ETH</p>
// <span className="font-bold">{ overallLiquidity ? (ethers.utils.formatEther(overallLiquidity).toString()) : (0) }</span> ETH 
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <button className="mt-10 w-52 text-3xl bg-[#22c55e] text-white font-bold py-2 px-4 rounded-md active:opacity-50  disabled:opacity-50 hover:bg-[#15803d]" onClick={async () => {await withdrawPlayer()}} disabled={isLoading || isFetching}>Withdraw</button>
                <div className="mt-3 text-xl font-normal">Overall liquidity of the Casino Smart Contract: <span className="font-bold">{ overallLiquidity ? (ethers.utils.formatEther(overallLiquidity).toString()) : (0) } ETH</span>  </div>
                {isOwner ? ( <button className="mt-6 w-max text-3xl bg-[#ff0062] text-white font-bold py-2 px-4 rounded-md active:opacity-50  hover:bg-[#00fffb] disabled:opacity-50 " onClick={async () => {await withdrawOwner()}} disabled={wheelSpinning}>Withdraw Owner</button>) : (null)}
               
              
            </div>
        </>
    )
}

export default Withdraw
