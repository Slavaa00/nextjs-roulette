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


import styles from "../styles/BetType.module.css"

// const betTypesArr = [
//     "Single Number (Straight Up)",
//     "Double Numbers (Split)",
//     "Three Numbers (Street)",
//     "Four Numbers (Corner Bet)",
//     "Six Numbers (Line)",
//     "Column (Twelve Numbers)",
//     "Twelve Numbers (Dozen)",
//     "Eighteen Numbers (Low (1-18) or High (19-36))",
//     "Even or Odd",
//     "Color (Black or Red)",
// ]

function BetType() {

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
        betTypesArr,
        _betTypeForUI,
        set_betTypeForUI,
        onClickBetType
    }: any = useContext(AppContext)

    
// useEffect(() => {console.log(_betType)}, [_betType])

// className={ `${_betType == betType ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")} ml-2 mt-3 border p-1 rounded-md text-base font-semibold`}  
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-3 pl-2">
                <p className="text-2xl font-semibold text-center">Pick Bet Type</p> 
                <p className="mt-1 text-2xl font-semibold text-center"> Current: <span className="text-[#ff0062] font-bold">{_betTypeForUI}</span></p>
                 
                <div className={styles.div}>
                {betTypesArr.map(function (betType) {
                    return (
                        <button
                            onClick={() => {onClickBetType(betType)}} //ff0062  000dff
                            key={v4()}
                            className={ `${betType == _betTypeForUI ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")} ml-2 mt-3 border border-[#c2c2c2] p-1 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`} 
                        >
                            {betType}
                        </button>
                    )
                })}
                </div> 
            </div>
        </>
    )
}

export default BetType
