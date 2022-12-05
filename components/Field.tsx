import {
    useContext,
    useEffect,
    useState,
    useRef,
    MouseEventHandler
} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import {
    BigNumber,
    ethers,
    ContractTransaction,
} from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { v4 } from 'uuid';
import Image from 'next/image'

function Field() {

    const {
        updateUI,
        checkNetwork,
        handleSuccess,
        goerliNetwork,
        setGoerliNetwork,
        Moralis,
        chainId,
        wheelSpinning,
        abi,
        rouletteAddress,
        allPlayersWinnings,
        currentCasinoBalance,
        lastWinningNumber,
        _betType,
        set_betType
    }: any = useContext(AppContext)

    
    function colorizeLastWinningNumber(_lastWinningNumber) {
        if (_lastWinningNumber == 0 ) {
             return "text-[#22c55e]"
        } else {
         if ((_lastWinningNumber < 11 || (_lastWinningNumber > 18 && _lastWinningNumber < 29)) && (_lastWinningNumber % 2 == 0)) {
             return "text-black"
         } else if ((_lastWinningNumber > 28 || (_lastWinningNumber > 10 && _lastWinningNumber < 19)) && (_lastWinningNumber % 2 == 1)) {
             return "text-black"
         } 
         
         else if ((_lastWinningNumber < 11 || (_lastWinningNumber > 18 && _lastWinningNumber < 30)) && (_lastWinningNumber % 2 == 1)) {
             return "text-[#dc2626]"
         } else if ((_lastWinningNumber > 29 || (_lastWinningNumber > 10 && _lastWinningNumber < 19)) && (_lastWinningNumber % 2 == 0)) {
             return "text-[#dc2626]"
         } 
        }
 }
 // 
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-max h-[8rem] pl-2 ">
                    <p className="text-xl font-bold mt-2 text-[#533adb]">Last Winning Number: <span className={`${colorizeLastWinningNumber(lastWinningNumber)} text-xl font-bold mt-2 `}>{lastWinningNumber}</span></p>
                    <p className="text-xl font-semibold mt-3 ">All Players Winnings: <span>{ethers.utils.formatEther(allPlayersWinnings).toString()}</span> ETH</p>
                    <p className="text-xl font-bold mt-3 text-[#dc2626]">Current Casino Balance: <span>{ethers.utils.formatEther(currentCasinoBalance).toString()} ETH</span></p>

                </div>
               <div className="cursor-default">
                <Image 
                src="/roulette-field.png"
                alt="Roulette Field"
                width={450}
                height={500}
                />
               </div>
            </div>
        </>
    )
}

export default Field
