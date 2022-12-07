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

import styles from "../styles/Field.module.css"

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
        set_betType,
        _betTypeForUI,
        set_betTypeForUI,
        _numbers,
        set_numbers,
        onClickBetType,
        onClickNumbers
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
               <div className="cursor-default ">

               <div className={styles.container}>
  <div className={styles.Zero} onClick={() => {set_betType()}}></div>
  <div className={styles.One}></div>
  <div className={styles.Two}></div>
  <div className={styles.Three}></div>
  <div className={styles.Four}></div>
  <div className={styles.Five}></div>
  <div className={styles.Six}></div>
  <div className={styles.Seven}></div>
  <div className={styles.Eight}></div>
  <div className={styles.Nine}></div>
  <div className={styles.Ten}></div>
  <div className={styles.Eleven}></div>
  <div className={styles.Twelve}></div>
  <div className={styles.Thirteen}></div>
  <div className={styles.Fourteen}></div>
  <div className={styles.Fifteen}></div>
  <div className={styles.Sixteen}></div>
  <div className={styles.Seventeen}></div>
  <div className={styles.Eighteen}></div>
  <div className={styles.Nineteen}></div>
  <div className={styles.Twenty}></div>
  <div className={styles.TwentyOne}></div>
  <div className={styles.TwentyTwo}></div>
  <div className={styles.TwentyThree}></div>
  <div className={styles.TwentyFour}></div>
  <div className={styles.TwentyFive}></div>
  <div className={styles.TwentySix}></div>
  <div className={styles.TwentySeven}></div>
  <div className={styles.TwentyEight}></div>
  <div className={styles.TwentyNine}></div>
  <div className={styles.Thirty}></div>
  <div className={styles.ThirtyOne}></div>
  <div className={styles.ThirtyTwo}></div>
  <div className={styles.ThirtyThree}></div>
  <div className={styles.ThirtyFour}></div>
  <div className={styles.ThirtyFive}></div>
  <div className={styles.ThirtySix}></div>
  <div className={styles.LeftColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([0]); onClickNumbers(141, [0])}}></div>
  <div className={styles.MiddleColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([1]); onClickNumbers(142, [1])}}></div>
  <div className={styles.RightColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([2]); onClickNumbers(143, [2])}}></div>
  <div className={styles.FirstDozen}></div>
  <div className={styles.SecondDozen}></div>
  <div className={styles.ThirdDozen}></div>
  <div className={styles.HighEighteen}></div>
  <div className={styles.Odd}></div>
  <div className={styles.Black}></div>
  <div className={styles.Red}></div>
  <div className={styles.Even}></div>
  <div className={styles.LowEighteen}></div>
</div> 

                <Image 
                src="/roulette-field.png"
                alt="Roulette Field"
                width={450}
                height={500}
                priority
                />
               </div>
              
            </div>
        </>
    )
}

export default Field

 
