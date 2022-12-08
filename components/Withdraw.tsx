import { useContext, useEffect, useState} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

import styles from "../styles/Withdraw.module.css"


import Image from 'next/image'
import Link from 'next/link'


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
               
              <div className="w-full mt-3 text-xl font-semibold ">If you are hiring Solidity developers, you can contact me by Telegram or Email:


              <div className="flex mt-4 pt-3 text-center"> 

             <div className="flex">
                <div>
      <Link href="https://t.me/Slavaa00">
                
          <Image
            src="/telegram-icon.svg"
            alt="Telegram Icon"
            width={35}
            height={35}
            
          />
      
      </Link>
    </div>
             <div className="ml-1 underline hover:text-[#0000EE] active:text-[#FF0000]"><Link href="https://t.me/Slavaa00">
              
             https://t.me/Slavaa00
            </Link>
            </div> 
</div>
<div className="flex ml-10">
<div onClick={() => {navigator.clipboard.writeText(
                                "pyzhovslava@yandex.ru"
                            )}}>
      
                
          <Image
            src="/yandex-mail-icon.svg"
            alt="Yandex Mail Icon"
            width={35}
            height={35}
            
          />
      
   
    </div>
             <div className="ml-1 cursor-pointer" onClick={() => {navigator.clipboard.writeText(
                                "pyzhovslava@yandex.ru"
                            )}}>
              
             pyzhovslava@yandex.ru
            
            </div> 
</div>
                </div>

             <div className="mt-6 ">GitHub repositories with the Code source:
                

             </div>
             <div className="mt-4 flex justify-between"><div>Smart Contract (BackEnd):
             <Link className="ml-3 underline hover:text-[#0000EE] active:text-[#FF0000]" href="https://github.com/Slavaa00/roulette">https://github.com/Slavaa00/roulette</Link></div>
            
            <Link className="" href="https://github.com/Slavaa00"><div className={styles.githubIcon}><div className={styles.githubIconPng}></div></div></Link>
            

             </div>
             <div className="mt-4 mb-2 ">FrontEnd:
                <Link className="ml-3 underline hover:text-[#0000EE] active:text-[#FF0000]" href="https://github.com/Slavaa00/nextjs-roulette">https://github.com/Slavaa00/nextjs-roulette</Link>

             </div>
              </div>


            </div>
        </>
    )
}

export default Withdraw
