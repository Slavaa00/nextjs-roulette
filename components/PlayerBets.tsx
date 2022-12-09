import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import {
    BigNumber,
    ethers,
    ContractTransaction,
} from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

import { v4 } from "uuid"
import _ from "lodash"
import Confetti from "react-confetti"

import styles from "../styles/PlayerBets.module.css"

import { bets } from "../pages/api/data/bets"

function PlayerBets() {
    const [respond, setRespond] = useState([])
    const [fireConfetti, setFireConfetti] = useState(false)

    const [fireGratzDiv, setFireGratzDiv] = useState(false)
    const [fireSadDiv, setFireSadDiv] = useState(false)
    // const [fireNeutralDiv, setFireNeutralDiv] = useState(false)

    const [playerUIBalance, setPlayerUIBalance] =
        useState("0")
    const [
        currentCasinoUIBalance,
        setCurrentCasinoUIBalance,
    ] = useState("0")
    const [allPlayersWinningsUI, setAllPlayersWinningsUI] =
        useState("0")

    const [winAmount, setWinAmount] = useState("0")

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
        overallLiquidity,
        betTypesArr,
        playerBalance,
        confetti,
        setConfetti,
        betsSum,
        setBetsSum,
        startGameValue
        
    }: any = useContext(AppContext)

    async function updateBetsArr() {
        await contract
            .getArrayOfBets()
            .then((value: any) => {
                setRespond(value)
            })


    }

    // value.filter(function(bet) {return bet[0].toLowerCase() == account.toLowerCase()})

    useEffect(() => {
        async function asyncUpdateBetsArr() {
            await updateBetsArr()
        }
        asyncUpdateBetsArr()
    }, [
        overallLiquidity,
        playerBalance,
        allPlayersWinnings,
        currentCasinoBalance,
    ])
    useEffect(() => {
        console.log((Number(playerUIBalance) + Number(ethers.utils.parseUnits(betsSum, "ether"))))

    }, [
        
        playerBalance
        
    ])
    useEffect(() => {
        console.log((Number(playerUIBalance) ))

    }, [
        
        betsSum
        
    ])
    // useEffect(() => {
       
    //     if (
    //         Number(playerBalance) > Number(playerUIBalance)
    //     ) {
           
    //         console.log(playerBalance, playerUIBalance)
           
    //         if (
    //             allPlayersWinnings > allPlayersWinningsUI ||
    //             currentCasinoBalance >
    //                 currentCasinoUIBalance
    //         ) {
    //             if (
    //                 confetti &&
    //                 playerBalance > playerUIBalance
    //             ) {
    //                 setWinAmount(
    //                     (
    //                         Number(playerBalance) -
    //                         Number(playerUIBalance)
    //                     ).toString()
    //                 )
                    
    //                 setFireConfetti(true)
    //                 setTimeout(() => {
    //                     setFireConfetti(false)
    //                 }, 3800)

    //                 setFireGratzDiv(true)
    //                 setTimeout(() => {
    //                     setFireGratzDiv(false)
    //                 }, 10000)

    //                 setPlayerUIBalance(playerBalance)
    //                 setCurrentCasinoUIBalance(
    //                     currentCasinoBalance
    //                 )
    //                 setAllPlayersWinningsUI(
    //                     allPlayersWinnings
    //                 )
    //             } 
    //             else if (
    //                 confetti &&
    //                 playerUIBalance >= playerBalance
    //             ) {
                  
    //                 setFireSadDiv(true)

    //                 setTimeout(() => {
    //                     setFireSadDiv(false)
    //                 }, 10000)

    //                 setPlayerUIBalance(playerBalance)
    //                 setCurrentCasinoUIBalance(
    //                     currentCasinoBalance
    //                 )
    //                 setAllPlayersWinningsUI(
    //                     allPlayersWinnings
    //                 )
    //             }
    //         }
    //     }
    //     // if (
    //     //     Number(playerBalance) < Number(playerUIBalance)
    //     // ) {
    //     //     setPlayerUIBalance(playerBalance)
    //     //     setCurrentCasinoUIBalance(currentCasinoBalance)
    //     //     setAllPlayersWinningsUI(allPlayersWinnings)
    //     //     if (
    //     //         allPlayersWinnings > allPlayersWinningsUI ||
    //     //         currentCasinoBalance >
    //     //             currentCasinoUIBalance
    //     //     ) {
    //     //         if (
    //     //             confetti &&
    //     //             playerBalance <= playerUIBalance
    //     //         ) {
                  
    //     //              setFireSadDiv(true)

    //     //             setTimeout(() => {
    //     //                 setFireSadDiv(false)
    //     //             }, 10000)
    //     //         } 
    //     //     }
    //     //  }
    // }, [
    //     playerBalance,
    //     allPlayersWinnings,
    //     currentCasinoBalance,
    // ])
    // ОТОБРАЗИТЬ ТУ ФИКСД
    useEffect(() => {
        // console.log(allPlayersWinnings > allPlayersWinningsUI)
        setPlayerUIBalance(playerBalance)
        setAllPlayersWinningsUI(allPlayersWinnings)
        setCurrentCasinoUIBalance(currentCasinoBalance)
        // console.log(playerBalance, playerUIBalance)
        if (allPlayersWinnings > allPlayersWinningsUI || currentCasinoBalance > currentCasinoUIBalance) 
            {
        //  console.log((Number(playerBalance) , (Number(playerUIBalance) + Number(ethers.utils.parseUnits(betsSum, "ether")))))
        // console.log( ((Number(playerBalance) -  ( Number(playerUIBalance) + Number(ethers.utils.parseUnits(betsSum, "ether")))).toString()) )
// + (ethers.utils.parseUnits(betsSum, "ether").toString())
                if (confetti  &&  (Number(playerBalance) > (Number(playerUIBalance) + Number(ethers.utils.parseUnits(betsSum, "ether"))))) {
                                         setWinAmount((Number(playerBalance) -  ( Number(playerUIBalance) + Number(ethers.utils.parseUnits(betsSum, "ether")))).toString())
                                        setFireConfetti(true)
                                        setTimeout(() => {
                                            setFireConfetti(false)
                                        }, 3800)
                    
                                        setFireGratzDiv(true)
                                        setTimeout(() => {
                                            setFireGratzDiv(false)
                                        }, 10000)
                                        // setBetsSum("0")
                                         localStorage.setItem("betsSum", "0");


                }
                if (confetti  &&  (Number(playerBalance) <= (Number(playerUIBalance) + Number(ethers.utils.parseUnits(betsSum, "ether"))))) {
                        setFireSadDiv(true)
        
                            setTimeout(() => {
                                setFireSadDiv(false)
                            }, 10000)
                            // setBetsSum("0")
                        localStorage.setItem("betsSum", "0");

                }
                // if (confetti  &&  (Number(playerBalance) == (Number(playerUIBalance) + Number(betsSum)))) {
                //         setFireNeutralDiv(true)
        
                //             setTimeout(() => {
                //                 setFireNeutralDiv(false)
                //             }, 10000)
                //             // setBetsSum("0")
                //         localStorage.setItem("betsSum", "0");

                // }
         }
        
         
    }, [
        playerBalance, allPlayersWinnings, currentCasinoBalance
      
    ])
    useEffect(() => {
    }, [
        playerUIBalance
      
    ])
    useEffect(() => {
        async function asyncUpdateBetsArr() {
            await updateBetsArr()
        }
        asyncUpdateBetsArr()
    }, [
        overallLiquidity,
        playerBalance,
        allPlayersWinnings,
        currentCasinoBalance,
    ])

    // useEffect(() => {
    //     console.log(playerUIBalance, playerBalance)
    // }, [playerUIBalance])

    function writeBetType(_betType) {
        if (_betType == 0) {
            return betTypesArr[0].toString()
        }
        if (_betType == 1) {
            return betTypesArr[1].toString()
        }
        if (_betType == 2) {
            return betTypesArr[2].toString()
        }
        if (_betType == 3) {
            return betTypesArr[3].toString()
        }
        if (_betType == 4) {
            return betTypesArr[4].toString()
        }
        if (_betType == 5) {
            return betTypesArr[5].toString()
        }
        if (_betType == 6) {
            return betTypesArr[6].toString()
        }
        if (_betType == 7) {
            return betTypesArr[7].toString()
        }
        if (_betType == 8) {
            return betTypesArr[8].toString()
        }
        if (_betType == 9) {
            return betTypesArr[9].toString()
        }
    }
    function writeNumbers(betType_, numbers_) {
        if (betType_ < 5) {
            return numbers_.join("-").toString()
        } else {
            return bets.filter(function ({
                _numbers,
                _betType,
            }) {
                return (
                    _betType == betType_ &&
                    _numbers[0] == numbers_
                )
            })[0]?.description
        }
    }

    // console.log(
    //     bets.filter(function ({ _numbers, _betType }) {
    //         return _betType == 5 && _numbers[0] == 0
    //     })[0]?.description
    // )
    // .map((item) => {
    //     return item?.description
    // })
    return (
        <>
            <div className="mt-2 flex h-max w-max flex-col items-center  justify-start">
                <div className="text-2xl font-medium text-[#533adb]">
                    Your Pending Bets:
                </div>

                <div className="mt-3 flex w-max justify-evenly ">
                    <div className="mr-40 font-bold">
                        <span>Amount:</span>
                    </div>
                    <div className="font-bold ">
                        <span>Bet Type:</span>
                    </div>
                    <div className="ml-40 font-bold">
                        <span>Number(s):</span>
                    </div>
                </div>
                <div className={styles.playerBet}>
                    {respond
                        ? respond
                              .filter(function (bet) {
                                  return (
                                    bet[0].toLowerCase() ==
                                        account?.toLowerCase()
                                      
                                  )
                              })
                              .map(function (item) {
                                  return (
                                     
                                          <div className="mt-[0.75rem] flex w-[700px] items-start justify-between" key={v4()}>
                                              <div className="w-1/3 text-center  font-normal" >
                                                  <span >
                                                      {ethers.utils.formatEther(
                                                          item[1]
                                                              .toString()
                                                              .toLowerCase()
                                                      )}{" "}
                                                      ETH
                                                  </span>
                                              </div>
                                              <div className="w-1/3 text-center   font-normal" >
                                                  <span >
                                                      {writeBetType(
                                                          item[2]
                                                      )}
                                                  </span>
                                              </div>
                                              <div className="w-1/3 text-center  font-normal" >
                                                  <span >
                                                      {writeNumbers(
                                                          item[2],
                                                          item[3]
                                                      )}{" "}
                                                  </span>
                                              </div>
                                          </div>
                                      
                                  )
                              })
                        : null}
                    <div className="flex min-h-full items-center">
                        {fireGratzDiv ? (
                            <div className="text-center text-4xl font-bold text-[#22c55e]">
                                <p>
                                    Congratulations, you've
                                    won!
                                </p>
                                <p className="mt-6">
                                    Your total winnings
                                    after the last spin is:
                                </p>{" "}
                                <p className="mt-4 text-[#ff0062]">
                                    +
                                    {ethers.utils.formatEther(
                                        winAmount
                                    )}{" "}
                                    ETH
                                </p>
                            </div>
                        ) : null}

                        {fireSadDiv ? (
                            <div className="text-center text-4xl ">
                                <p>
                                    Unfortunately, you
                                    haven't won anything
                                    after last Roulette spin :(
                                </p>{" "}
                                <p className="mt-6">
                                    But you will definitely
                                    get lucky next time.
                                </p>{" "}
                                <p className="mt-4 font-bold">
                                    Just make another bet!
                                </p>
                            </div>
                        ) : null}

                        {/* {fireNeutralDiv ? (
                            <div className="text-center text-4xl ">
                                <p>
                                    Your Current Balance didn't change after last Roulette spin.
                                </p>{" "}
                                
                            </div>
                        ) : null} */}
                    </div>
                </div> 
                 <div className="w-full pl-8 font-bold ">Total Bet Amount: <span className={`${Number(localStorage.getItem("betsSum")).toFixed(20) >= Number(startGameValue) ? ("text-[#22c55e]") : ("text-[#dc2626]") } `}>{Number(localStorage.getItem("betsSum")).toFixed(17).replace(/0*$/, "")}</span></div>                       
                {fireConfetti ? <Confetti /> : null}
            </div>
        </>
    )
}
 // Number(localStorage.getItem("betsSum")).toFixed(100).replace(/0*$/)
 // BigInt(localStorage.getItem("betsSum")).toString()
export default PlayerBets
