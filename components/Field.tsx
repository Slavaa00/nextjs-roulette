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

    const [currentBetType, setCurrentBetType] = useState()

    useEffect(() => {setCurrentBetType(_betType)}, [_betType])

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

<div className={`${(currentBetType > 4 || currentBetType == 0) ? ("") : ("hidden")}`}>
               <div className={styles.container}>
  <div className={styles.Zero} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([0]); onClickNumbers(1, [0])}}></div>
  <div className={styles.One} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([1]); onClickNumbers(2, [1])}}></div>
  <div className={styles.Two} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([2]); onClickNumbers(3, [2])}}></div>
  <div className={styles.Three} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([3]); onClickNumbers(4, [3])}}></div>
  <div className={styles.Four} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([4]); onClickNumbers(5, [4])}}></div>
  <div className={styles.Five} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([5]); onClickNumbers(6, [5])}}></div>
  <div className={styles.Six} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([6]); onClickNumbers(7, [6])}}></div>
  <div className={styles.Seven} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([7]); onClickNumbers(8, [7])}}></div>
  <div className={styles.Eight} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([8]); onClickNumbers(9, [8])}}></div>
  <div className={styles.Nine} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([9]); onClickNumbers(10, [9])}}></div>
  <div className={styles.Ten} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([10]); onClickNumbers(11, [10])}}></div>
  <div className={styles.Eleven} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([11]); onClickNumbers(12, [11])}}></div>
  <div className={styles.Twelve} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([12]); onClickNumbers(13, [12])}}></div>
  <div className={styles.Thirteen} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([13]); onClickNumbers(14, [13])}}></div>
  <div className={styles.Fourteen} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([14]); onClickNumbers(15, [14])}}></div>
  <div className={styles.Fifteen} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([15]); onClickNumbers(16, [15])}}></div>
  <div className={styles.Sixteen} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([16]); onClickNumbers(17, [16])}}></div>
  <div className={styles.Seventeen} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([17]); onClickNumbers(18, [17])}}></div>
  <div className={styles.Eighteen} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([18]); onClickNumbers(19, [18])}}></div>
  <div className={styles.Nineteen} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([19]); onClickNumbers(20, [19])}}></div>
  <div className={styles.Twenty} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([20]); onClickNumbers(21, [20])}}></div>
  <div className={styles.TwentyOne} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([21]); onClickNumbers(22, [21])}}></div>
  <div className={styles.TwentyTwo} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([22]); onClickNumbers(23, [22])}}></div>
  <div className={styles.TwentyThree} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([23]); onClickNumbers(24, [23])}}></div>
  <div className={styles.TwentyFour}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([24]); onClickNumbers(25, [24])}}></div>
  <div className={styles.TwentyFive}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([25]); onClickNumbers(26, [25])}}></div>
  <div className={styles.TwentySix}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([26]); onClickNumbers(27, [26])}}></div>
  <div className={styles.TwentySeven}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([27]); onClickNumbers(28, [27])}}></div>
  <div className={styles.TwentyEight}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([28]); onClickNumbers(29, [28])}}></div>
  <div className={styles.TwentyNine}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([29]); onClickNumbers(30, [29])}}></div>
  <div className={styles.Thirty}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([30]); onClickNumbers(31, [30])}}></div>
  <div className={styles.ThirtyOne}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([31]); onClickNumbers(32, [31])}}></div>
  <div className={styles.ThirtyTwo}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([32]); onClickNumbers(33, [32])}}></div>
  <div className={styles.ThirtyThree}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([33]); onClickNumbers(34, [33])}}></div>
  <div className={styles.ThirtyFour}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([34]); onClickNumbers(35, [34])}}></div>
  <div className={styles.ThirtyFive}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([35]); onClickNumbers(36, [35])}}></div>
  <div className={styles.ThirtySix}onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([36]); onClickNumbers(37, [36])}}></div>

  <div className={styles.LeftColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([0]); onClickNumbers(141, [0])}}></div>
  <div className={styles.MiddleColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([1]); onClickNumbers(142, [1])}}></div>
  <div className={styles.RightColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([2]); onClickNumbers(143, [2])}}></div>

  <div className={styles.FirstDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([0]); onClickNumbers(144, [0])}}></div>
  <div className={styles.SecondDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([1]); onClickNumbers(145, [1])}}></div>
  <div className={styles.ThirdDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([2]); onClickNumbers(146, [2])}}></div>

  <div className={styles.LowEighteen} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([0]); onClickNumbers(147, [0])}}></div>
  <div className={styles.HighEighteen} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([1]); onClickNumbers(148, [1])}}></div>

  <div className={styles.Even} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([0]); onClickNumbers(149, [0])}}></div>
  <div className={styles.Odd} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([1]); onClickNumbers(150, [1])}}></div>
  
  <div className={styles.Black} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([0]); onClickNumbers(151, [0])}}></div>
  <div className={styles.Red} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([1]); onClickNumbers(152, [1])}}></div>
        </div>
</div> 



<div className={`${(currentBetType == 2) ? ("") : ("hidden")}`}>
               <div className={styles.containerThrees}>
  <div className={styles.Zero} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([0]); onClickNumbers(1, [0])}}></div>
   <div className={styles.LeftZeroThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([0, 1, 2]); onClickNumbers(110, [0, 1, 2])}}></div>
  <div className={styles.RightZeroThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([0, 2, 3]); onClickNumbers(111, [0, 2, 3])}}></div>

  <div className={styles.FirstThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([1, 2, 3]); onClickNumbers(98, [1, 2, 3])}}></div>
  <div className={styles.SecondThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([4, 5, 6]); onClickNumbers(99, [4, 5, 6])}}></div>
  <div className={styles.ThirdThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([7, 8, 9]); onClickNumbers(100, [7, 8, 9])}}></div>
  <div className={styles.FourthThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([10, 11, 12]); onClickNumbers(101, [10, 11, 12])}}></div>
  <div className={styles.FifthThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([13, 14, 15]); onClickNumbers(102, [13, 14, 15])}}></div>
  <div className={styles.SixthThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([16, 17, 18]); onClickNumbers(103, [16, 17, 18])}}></div>
  <div className={styles.SeventhThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([19, 20, 21]); onClickNumbers(104, [19, 20, 21])}}></div>
  <div className={styles.EighthThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([22, 23, 24]); onClickNumbers(105, [22, 23, 24])}}></div>
  <div className={styles.NinthThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([25, 26, 27]); onClickNumbers(106, [25, 26, 27])}}></div>
  <div className={styles.TenthThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([28, 29, 30]); onClickNumbers(107, [28, 29, 30])}}></div>
  <div className={styles.EleventhThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([31, 32, 33]); onClickNumbers(108, [31, 32, 33])}}></div>
  <div className={styles.TwelfthThree} onClick={() => {set_betType(2); 
        onClickBetType("Three Numbers (Street)"); set_numbers([34, 35, 36]); onClickNumbers(109, [34, 35, 36])}}></div>
 

  <div className={styles.LeftColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([0]); onClickNumbers(141, [0])}}></div>
  <div className={styles.MiddleColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([1]); onClickNumbers(142, [1])}}></div>
  <div className={styles.RightColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([2]); onClickNumbers(143, [2])}}></div>

  <div className={styles.FirstDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([0]); onClickNumbers(144, [0])}}></div>
  <div className={styles.SecondDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([1]); onClickNumbers(145, [1])}}></div>
  <div className={styles.ThirdDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([2]); onClickNumbers(146, [2])}}></div>

  <div className={styles.LowEighteen} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([0]); onClickNumbers(147, [0])}}></div>
  <div className={styles.HighEighteen} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([1]); onClickNumbers(148, [1])}}></div>

  <div className={styles.Even} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([0]); onClickNumbers(149, [0])}}></div>
  <div className={styles.Odd} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([1]); onClickNumbers(150, [1])}}></div>
  
  <div className={styles.Black} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([0]); onClickNumbers(151, [0])}}></div>
  <div className={styles.Red} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([1]); onClickNumbers(152, [1])}}></div>
        </div>
</div> 





<div className={`${(currentBetType == 4) ? ("") : ("hidden")}`}>
               <div className={styles.containerSixes}>
  <div className={styles.Zero} onClick={() => {set_betType(0); 
        onClickBetType("Single Number (Straight Up)"); set_numbers([0]); onClickNumbers(1, [0])}}></div>



  <div className={styles.FirstSix} onClick={() => {set_betType(4); 
        onClickBetType("Six Numbers (Line)"); set_numbers([1, 2, 3, 4, 5, 6]); onClickNumbers(135, [1, 2, 3, 4, 5, 6])}}></div>
  <div className={styles.SecondSix} onClick={() => {set_betType(4); 
        onClickBetType("Six Numbers (Line)"); set_numbers([7, 8, 9, 10, 11, 12]); onClickNumbers(136, [7, 8, 9, 10, 11, 12])}}></div>
  <div className={styles.ThirdSix} onClick={() => {set_betType(4); 
        onClickBetType("Six Numbers (Line)"); set_numbers([13, 14, 15, 16, 17, 18]); onClickNumbers(137, [13, 14, 15, 16, 17, 18])}}></div>
  <div className={styles.FourthSix} onClick={() => {set_betType(4); 
        onClickBetType("Six Numbers (Line)"); set_numbers([19, 20, 21, 22, 23, 24]); onClickNumbers(138, [19, 20, 21, 22, 23, 24])}}></div>
  <div className={styles.FifthSix} onClick={() => {set_betType(4); 
        onClickBetType("Six Numbers (Line)"); set_numbers([25, 26, 27, 28, 29, 30]); onClickNumbers(139, [25, 26, 27, 28, 29, 30])}}></div>
  <div className={styles.SixthSix} onClick={() => {set_betType(4); 
        onClickBetType("Six Numbers (Line)"); set_numbers([31, 32, 33, 34, 35, 36]); onClickNumbers(140, [31, 32, 33, 34, 35, 36])}}></div>
  
 

  <div className={styles.LeftColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([0]); onClickNumbers(141, [0])}}></div>
  <div className={styles.MiddleColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([1]); onClickNumbers(142, [1])}}></div>
  <div className={styles.RightColumn} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([2]); onClickNumbers(143, [2])}}></div>

  <div className={styles.FirstDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([0]); onClickNumbers(144, [0])}}></div>
  <div className={styles.SecondDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([1]); onClickNumbers(145, [1])}}></div>
  <div className={styles.ThirdDozen} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([2]); onClickNumbers(146, [2])}}></div>

  <div className={styles.LowEighteen} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([0]); onClickNumbers(147, [0])}}></div>
  <div className={styles.HighEighteen} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([1]); onClickNumbers(148, [1])}}></div>

  <div className={styles.Even} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([0]); onClickNumbers(149, [0])}}></div>
  <div className={styles.Odd} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([1]); onClickNumbers(150, [1])}}></div>
  
  <div className={styles.Black} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([0]); onClickNumbers(151, [0])}}></div>
  <div className={styles.Red} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([1]); onClickNumbers(152, [1])}}></div>
        </div>
</div> 



<div className={`${(currentBetType == 3) ? ("") : ("hidden")}`}>
              <div className={styles.containerFours}>
  <div className={styles.LeftColumnFours} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([0]); onClickNumbers(141, [0])}}></div>
  <div className={styles.MiddleColumnFours} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([1]); onClickNumbers(142, [1])}}></div>
  <div className={styles.RightColumnFours} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([2]); onClickNumbers(143, [2])}}></div>
  <div className={styles.FirstDozenFours} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([0]); onClickNumbers(144, [0])}}></div>
  <div className={styles.SecondDozenFours} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([1]); onClickNumbers(145, [1])}}></div>
  <div className={styles.ThirdDozenFours} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([2]); onClickNumbers(146, [2])}}></div>
  <div className={styles.LowEighteenFours} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([0]); onClickNumbers(147, [0])}}></div>
  <div className={styles.HighEighteenFours} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([1]); onClickNumbers(148, [1])}}></div>
  <div className={styles.EvenFours} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([0]); onClickNumbers(149, [0])}}></div>
  <div className={styles.OddFours} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([1]); onClickNumbers(150, [1])}}></div>
  <div className={styles.BlackFours} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([0]); onClickNumbers(151, [0])}}></div>
  <div className={styles.RedFours} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([1]); onClickNumbers(152, [1])}}></div>

  <div className={styles.OneTwoFourFive} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([1, 2, 4, 5]); onClickNumbers(112, [1, 2, 4, 5])}}></div>
  <div className={styles.TwoThreeFiveSix} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([2, 3, 5, 6]); onClickNumbers(113, [2, 3, 5, 6])}}></div>
  <div className={styles.FourFiveSevenEight} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([4, 5, 7, 8]); onClickNumbers(114, [4, 5, 7, 8])}}></div>
  <div className={styles.FiveSixEightNine} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([5, 6, 8, 9]); onClickNumbers(115, [5, 6, 8, 9])}}></div>
  <div className={styles.SevenEightTenEleven} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([7, 8, 10, 11]); onClickNumbers(116, [7, 8, 10, 11])}}></div>
  <div className={styles.EightNineElevenTwelve} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([8, 9, 11, 12]); onClickNumbers(117, [8, 9, 11, 12])}}></div>
  <div className={styles.TenElevenThirteenFourteen} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([10, 11, 13, 14]); onClickNumbers(118, [10, 11, 13, 14])}}></div>
  <div className={styles.ElevenTwelveFourteenFifteen} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([11, 12, 14, 15]); onClickNumbers(119, [11, 12, 14, 15])}}></div>
  <div className={styles.ThirteenFourteenSixteenSeventeen} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([13, 14, 16, 17]); onClickNumbers(120, [13, 14, 16, 17])}}></div>
  <div className={styles.FourteenFifteenSeventeenEighteen} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([14, 15, 17, 18]); onClickNumbers(121, [14, 15, 17, 18])}}></div>
  <div className={styles.SixteenSeventeenNineteenTwenty} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([16, 17, 19, 20]); onClickNumbers(122, [16, 17, 19, 20])}}></div>
  <div className={styles.SeventeenEighteenTwentyTwentyOne} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([17, 18, 20, 21]); onClickNumbers(123, [17, 18, 20, 21])}}></div>
  <div className={styles.NineteenTwentyTwentyTwoTwentyThree} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([19, 20, 22, 23]); onClickNumbers(124, [19, 20, 22, 23])}}></div>
  <div className={styles.TwentyTwentyOneTwentyThreeTwentyFour} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([20, 21, 23, 24]); onClickNumbers(125, [20, 21, 23, 24])}}></div>
  <div className={styles.TwentyTwoTwentyThreeTwentyFiveTwentySix} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([22, 23, 25, 26]); onClickNumbers(126, [22, 23, 25, 26])}}></div>
  <div className={styles.TwentyThreeTwentyFourTwentySixTwentySeven} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([23, 24, 26, 27]); onClickNumbers(127, [23, 24, 26, 27])}}></div>
  <div className={styles.TwentyFiveTwentySixTwentyEightTwentyNine} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([25, 26, 28, 29]); onClickNumbers(128, [25, 26, 28, 29])}}></div>
  <div className={styles.TwentySixTwentySevenTwentyNineThirty} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([26, 27, 29, 30]); onClickNumbers(129, [26, 27, 29, 30])}}></div>
  <div className={styles.TwentyEightTwentyNineThirtyOneThirtyTwo} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([28, 29, 31, 32]); onClickNumbers(130, [28, 29, 31, 32])}}></div>
  <div className={styles.TwentyNineThirtyThirtyTwoThirtyThree} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([29, 30, 32, 33]); onClickNumbers(131, [29, 30, 32, 33])}}></div>
  <div className={styles.ThirtyOneThirtyTwoThirtyFourThirtyFive} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([31, 32, 34, 35]); onClickNumbers(132, [31, 32, 34, 35])}}></div>
  <div className={styles.ThirtyTwoThirtyThreeThirtyFiveThirtySix} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([32, 33, 35, 36]); onClickNumbers(133, [32, 33, 35, 36])}}></div>
  <div className={styles.ZeroOneTwoThree} onClick={() => {set_betType(3); 
        onClickBetType("Four Numbers (Corner Bet)"); set_numbers([0, 1, 2, 3]); onClickNumbers(134, [0, 1, 2, 3])}}></div>
</div>
</div> 


<div className={`${(currentBetType == 1) ? ("") : ("hidden")}`}>
               <div className={styles.containerTwos}>
  



  <div className={styles.OneTwo} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([1, 2]); onClickNumbers(38, [1, 2])}}></div>
  <div className={styles.TwoThree} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([2, 3]); onClickNumbers(39, [2, 3])}}></div>
  <div className={styles.FourFive} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([4, 5]); onClickNumbers(40, [4, 5])}}></div>
  <div className={styles.FiveSix} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([5, 6]); onClickNumbers(41, [5, 6])}}></div>
  <div className={styles.SevenEight} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([7, 8]); onClickNumbers(42, [7, 8])}}></div>
  <div className={styles.EightNine} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([8, 9]); onClickNumbers(43, [8, 9])}}></div>
  <div className={styles.TenEleven} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([10, 11]); onClickNumbers(44, [10, 11])}}></div>
  <div className={styles.ElevenTwelve} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([11, 12]); onClickNumbers(45, [11, 12])}}></div>
  <div className={styles.ThirteenFourteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([13, 14]); onClickNumbers(46, [13, 14])}}></div>
  <div className={styles.FourteenFifteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([14, 15]); onClickNumbers(47, [14, 15])}}></div>
  <div className={styles.SixteenSeventeen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([16, 17]); onClickNumbers(48, [16, 17])}}></div>
  <div className={styles.SeventeenEighteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([17, 18]); onClickNumbers(49, [17, 18])}}></div>
  <div className={styles.NineteenTwenty} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([19, 20]); onClickNumbers(50, [19, 20])}}></div>
  <div className={styles.TwentyTwentyOne} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([20, 21]); onClickNumbers(51, [20, 21])}}></div>
  <div className={styles.TwentyTwoTwentyThree} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([22, 23]); onClickNumbers(52, [22, 23])}}></div>
  <div className={styles.TwentyThreeTwentyFour} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([23, 24]); onClickNumbers(53, [23, 24])}}></div>
  <div className={styles.TwentyFiveTwentySix} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([25, 26]); onClickNumbers(54, [25, 26])}}></div>
  <div className={styles.TwentySixTwentySeven} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([26, 27]); onClickNumbers(55, [26, 27])}}></div>
  <div className={styles.TwentyEightTwentyNine} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([28, 29]); onClickNumbers(56, [28, 29])}}></div>
  <div className={styles.TwentyNineThirty} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([29, 30]); onClickNumbers(57, [29, 30])}}></div>
  <div className={styles.ThirtyOneThirtyTwo} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([31, 32]); onClickNumbers(58, [31, 32])}}></div>
  <div className={styles.ThirtyTwoThirtyThree} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([32, 33]); onClickNumbers(59, [32, 33])}}></div>
  <div className={styles.ThirtyFourThirtyFive} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([34, 35]); onClickNumbers(60, [34, 35])}}></div>
  <div className={styles.ThirtyFiveThirtySix} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([35, 36]); onClickNumbers(61, [35, 36])}}></div>



  <div className={styles.OneFour} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([1, 4]); onClickNumbers(62, [1, 4])}}></div>
  <div className={styles.TwoFive} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([2, 5]); onClickNumbers(63, [2, 5])}}></div>
  <div className={styles.ThreeSix} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([3, 6]); onClickNumbers(64, [3, 6])}}></div>
  <div className={styles.FourSeven} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([4, 7]); onClickNumbers(65, [4, 7])}}></div>
  <div className={styles.FiveEight} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([5, 8]); onClickNumbers(66, [5, 8])}}></div>
  <div className={styles.SixNine} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([6, 9]); onClickNumbers(67, [6, 9])}}></div>
  <div className={styles.SevenTen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([7, 10]); onClickNumbers(68, [7, 10])}}></div>
  <div className={styles.EightEleven} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([8, 11]); onClickNumbers(69, [8, 11])}}></div>
  <div className={styles.NineTwelve} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([9, 12]); onClickNumbers(70, [9, 12])}}></div>
  <div className={styles.TenThirteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([10, 13]); onClickNumbers(71, [10, 13])}}></div>
  <div className={styles.ElevenFourteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([11, 14]); onClickNumbers(72, [11, 14])}}></div>
  <div className={styles.TwelveFifteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([12, 15]); onClickNumbers(73, [12, 15])}}></div>
  <div className={styles.ThirteenSixteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([13, 16]); onClickNumbers(74, [13, 16])}}></div>
  <div className={styles.FourteenSeventeen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([14, 17]); onClickNumbers(75, [14, 17])}}></div>
  <div className={styles.FifteenEighteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([15, 18]); onClickNumbers(76, [15, 18])}}></div>
  <div className={styles.SixteenNineteen} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([16, 19]); onClickNumbers(77, [16, 19])}}></div>
  <div className={styles.SeventeenTwenty} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([17, 20]); onClickNumbers(78, [17, 20])}}></div>
  <div className={styles.EighteenTwentyOne} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([18, 21]); onClickNumbers(79, [18, 21])}}></div>
  
  <div className={styles.NineteenTwentyTwo} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([19, 22]); onClickNumbers(80, [19, 22])}}></div>
  <div className={styles.TwentyTwentyThree} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([20, 23]); onClickNumbers(81, [20, 23])}}></div>
  <div className={styles.TwentyOneTwentyFour} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([21, 24]); onClickNumbers(82, [21, 24])}}></div>
  <div className={styles.TwentyTwoTwentyFive} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([22, 25]); onClickNumbers(83, [22, 25])}}></div>
  <div className={styles.TwentyThreeTwentySix} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([23, 26]); onClickNumbers(84, [23, 26])}}></div>
  <div className={styles.TwentyFourTwentySeven} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([24, 27]); onClickNumbers(85, [24, 27])}}></div>
  <div className={styles.TwentyFiveTwentyEight} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([25, 28]); onClickNumbers(86, [25, 28])}}></div>
  <div className={styles.TwentySixTwentyNine} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([26, 29]); onClickNumbers(87, [26, 29])}}></div>
  <div className={styles.TwentySevenThirty} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([27, 30]); onClickNumbers(88, [27, 30])}}></div>
  <div className={styles.TwentyEightThirtyOne} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([28, 31]); onClickNumbers(89, [28, 31])}}></div>
  <div className={styles.TwentyNineThirtyTwo} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([29, 32]); onClickNumbers(90, [29, 32])}}></div>
  <div className={styles.ThirtyThirtyThree} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([30, 33]); onClickNumbers(91, [30, 33])}}></div>
  <div className={styles.ThirtyOneThirtyFour} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([31, 34]); onClickNumbers(92, [31, 34])}}></div>
  <div className={styles.ThirtyTwoThirtyFive} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([32, 35]); onClickNumbers(93, [32, 35])}}></div>
  <div className={styles.ThirtyThreeThirtySix} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([33, 36]); onClickNumbers(94, [33, 36])}}></div>
  <div className={styles.ZeroOne} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([0, 1]); onClickNumbers(95, [0, 1])}}></div>
  <div className={styles.ZeroTwo} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([0, 2]); onClickNumbers(96, [0, 2])}}></div>
  <div className={styles.ZeroThree} onClick={() => {set_betType(1); 
        onClickBetType("Double Numbers (Split)"); set_numbers([0, 3]); onClickNumbers(97, [0, 3])}}></div>
 
 

  <div className={styles.LeftColumnFours} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([0]); onClickNumbers(141, [0])}}></div>
  <div className={styles.MiddleColumnFours} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([1]); onClickNumbers(142, [1])}}></div>
  <div className={styles.RightColumnFours} onClick={() => {set_betType(5); 
        onClickBetType("Column (Twelve Numbers)"); set_numbers([2]); onClickNumbers(143, [2])}}></div>
  <div className={styles.FirstDozenFours} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([0]); onClickNumbers(144, [0])}}></div>
  <div className={styles.SecondDozenFours} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([1]); onClickNumbers(145, [1])}}></div>
  <div className={styles.ThirdDozenFours} onClick={() => {set_betType(6); 
        onClickBetType("Twelve Numbers (Dozen)"); set_numbers([2]); onClickNumbers(146, [2])}}></div>
  <div className={styles.LowEighteenFours} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([0]); onClickNumbers(147, [0])}}></div>
  <div className={styles.HighEighteenFours} onClick={() => {set_betType(7); 
        onClickBetType("Eighteen Numbers (Low (1-18) or High (19-36))"); set_numbers([1]); onClickNumbers(148, [1])}}></div>
  <div className={styles.EvenFours} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([0]); onClickNumbers(149, [0])}}></div>
  <div className={styles.OddFours} onClick={() => {set_betType(8); 
        onClickBetType("Even or Odd"); set_numbers([1]); onClickNumbers(150, [1])}}></div>
  <div className={styles.BlackFours} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([0]); onClickNumbers(151, [0])}}></div>
  <div className={styles.RedFours} onClick={() => {set_betType(9); 
        onClickBetType("Color (Black or Red)"); set_numbers([1]); onClickNumbers(152, [1])}}></div>
        </div>
</div> 
                {/* <Image 
                src="/roulette-field.png"
                alt="Roulette Field"
                width={450}
                height={500}
                priority
                /> */}
               </div>
              
            </div>
        </>
    )
}

export default Field

 
