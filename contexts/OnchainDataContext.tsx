// import { AbiItem } from 'web3-utils'
// import abi from "../constants/abi.json"
// new web3.eth.Contract(Abi as AbiItem[], contractAddress)

import { useWeb3Contract, useMoralis } from "react-moralis"

// import * as abi from '../constants/abi.json' -- FAILED (abi.map is not a function)
// const abi = require("../constants/abi.json");

// import abi from "../constants/abi.json"
import { abi } from "../constants"

import { contractAddresses } from "../constants"
// import contractAddresses from "../constants/contractAddresses.json"
import { useEffect, useState, createContext, FC } from "react"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useNotification } from "@web3uikit/core"
// import Moralis from 'moralis'

import { Props } from "../interfaces"

export const AppContext = createContext<any>(null)

export interface contractAddressesInterface {
    [key: string]: string[]
}

const ALCHEMY_API: string = process.env.NEXT_PUBLIC_GOERLI_RPC_URL!

const addresses: contractAddressesInterface = contractAddresses

const chainId = "5"
const rouletteAddress = addresses[chainId][0]

const provider = new ethers.providers.WebSocketProvider(ALCHEMY_API)

const contract = new ethers.Contract(rouletteAddress!, abi, provider)

const betTypesArr = [
    "Single Number (Straight Up)",
    "Double Numbers (Split)",
    "Three Numbers (Street)",
    "Four Numbers (Corner Bet)",
    "Six Numbers (Line)",
    "Column (Twelve Numbers)",
    "Twelve Numbers (Dozen)",
    "Eighteen Numbers (Low (1-18) or High (19-36))",
    "Even or Odd",
    "Color (Black or Red)",
]

function OnchainDataContext({ children }: Props) {
    const owner = "0x941B1003Ecfa954F2ED01B94cF5197fa0748F6f9";

    const { chainId: chainIdHex, isWeb3Enabled, Moralis, account } = useMoralis()

    const dispatch = useNotification()

    const [goerliNetwork, setGoerliNetwork] = useState(false)

    const [_betType, set_betType] = useState(0)
    const [_numbers, set_numbers] = useState([])
    const [msgValue, set_msgValue] = useState()

    const [allPlayersWinnings, setAllPlayersWinnings] = useState("0")
    const [currentCasinoBalance, setCurrentCasinoBalance] = useState("0")
    const [lastWinningNumber, setLastWinningNumber] = useState("0")

    const [moneyInTheBank, setMoneyInTheBank] = useState("0")

    const [wheelSpinning, setWheelSpinnning] = useState(false)

    const [overallLiquidity, setOverallLiquidity] = useState()

    async function checkResult(_newAllPlayersWinnings: string, _newCurrentCasinoBalance: string) {
        if (
            _newAllPlayersWinnings == allPlayersWinnings &&
            _newCurrentCasinoBalance == currentCasinoBalance
        ) {
            setWheelSpinnning(true)
            setTimeout(() => {
                setWheelSpinnning(false)
            }, 10000)
        } else {
            setWheelSpinnning(false)
        }
    }
    async function updateUI() {
        let newAllPlayersWinnings: string = "0"
        let newCurrentCasinoBalance: string = "0"
        if (allPlayersWinnings != "0" && currentCasinoBalance != "0") {
            await contract.allPlayersWinnings().then((value: any) => {
                console.log(value.toString())

                newAllPlayersWinnings = value.toString()
                setAllPlayersWinnings(value.toString())
            })
            await contract.currentCasinoBalance().then((value: any) => {
                console.log(value.toString())

                newCurrentCasinoBalance = value.toString()
                setCurrentCasinoBalance(value.toString())
            })
            await contract
                .getLastWinningNumber()
                .then((value: any) => setLastWinningNumber(value.toString()))

            await contract.getCurrentContractBalance().then((value: any) => {
                    if (value.toString() != overallLiquidity) {
                        setOverallLiquidity(value.toString())
                    }
            })

            await contract.getMoneyInTheBank().then((value: any) => {
                if (value.toString() != moneyInTheBank) {
                    setMoneyInTheBank(value.toString())
                }
            })

            await checkResult(newAllPlayersWinnings, newCurrentCasinoBalance)
        } else {
            await contract.allPlayersWinnings().then((value: any) => {
                newAllPlayersWinnings = value.toString()
                setAllPlayersWinnings(value.toString())
            })
            await contract.currentCasinoBalance().then((value: any) => {
                newCurrentCasinoBalance = value.toString()
                setCurrentCasinoBalance(value.toString())
            })
            await contract
                .getLastWinningNumber()
                .then((value: any) => setLastWinningNumber(value.toString()))

            await contract.getMoneyInTheBank().then((value: any) => {
                setMoneyInTheBank(value.toString())
            })

            await contract.getCurrentContractBalance().then((value: any) => {
                setOverallLiquidity(value.toString())
            })

            await checkResult(newAllPlayersWinnings, newCurrentCasinoBalance)
        }
    }

    function checkNetwork() {
        return window.ethereum.networkVersion
    }

    // provider.on("GameFinished", async () => {
    //     await updateUI()
    // })

    // contract.on("GameFinished", async (winningNumber, time) => {
    //     await updateUI()
    // })

    const handleSuccess = async function (tx: ContractTransaction) {
        await tx.wait(1)
        handleNewNotification()
    }

    const handleNewNotification = function () {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification",

            position: "topR",
        })
    }

    return (
        <AppContext.Provider
            value={{
                abi,
                rouletteAddress,
                chainId,
                contract,
                isWeb3Enabled,
                Moralis,
                account,
                owner,
                dispatch,
                goerliNetwork,
                setGoerliNetwork,
                _betType,
                set_betType,
                _numbers,
                set_numbers,
                msgValue,
                set_msgValue,
                allPlayersWinnings,
                setAllPlayersWinnings,
                currentCasinoBalance,
                setCurrentCasinoBalance,
                lastWinningNumber,
                setLastWinningNumber,
                moneyInTheBank, 
                setMoneyInTheBank,
                wheelSpinning,
                setWheelSpinnning,
                checkResult,
                updateUI,
                checkNetwork,
                handleSuccess,
                handleNewNotification,
                overallLiquidity, 
                setOverallLiquidity,
                betTypesArr
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default OnchainDataContext
