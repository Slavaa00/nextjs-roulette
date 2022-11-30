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

function BetType() {
    const [_betTypeForUI, set_betTypeForUI] = useState("")

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

    function onClick(betType_: string): MouseEventHandler<HTMLButtonElement> {
        set_betTypeForUI(betType_)
        if (betType_ == "Single Number (Straight Up)") {
            set_betType(0)
        }
        if (betType_ == "Double Numbers (Split)") {
            set_betType(1)
        }
        if (betType_ == "Three Numbers (Street)") {
            set_betType(2)
        }
        if (betType_ == "Four Numbers (Corner Bet)") {
            set_betType(3)
        }
        if (betType_ == "Six Numbers (Line)") {
            set_betType(4)
        }
        if (betType_ == "Column (Twelve Numbers)") {
            set_betType(5)
        }
        if (betType_ == "Twelve Numbers (Dozen)") {
            set_betType(6)
        }
        if (betType_ == "Eighteen Numbers (Low (1-18) or High (19-36))") {
            set_betType(7)
        }
        if (betType_ == "Even or Odd") {
            set_betType(8)
        }
        if (betType_ == "Color (Black or Red)") {
            set_betType(9)
        }
        // switch(betType_) {
        //     case "Single Number (Straight Up)": set_betType(0)
        //     case "Double Numbers (Split)": set_betType(1)
        //     case "Three Numbers (Street)": set_betType(2)
        //     case "Four Numbers (Corner Bet)": set_betType(3)
        //     case "Six Numbers (Line)": set_betType(4)
        //     case "Column (Twelve Numbers)": set_betType(5)
        //     case "Twelve Numbers (Dozen)": set_betType(6)
        //     case "Eighteen Numbers (Low (1-18) or High (19-36))": set_betType(7)
        //     case "Even or Odd": set_betType(8)
        //     case "Color (Red or Black)": set_betType(9)
           
        // }
        
    }

useEffect(() => {console.log(_betType)}, [_betType])

// className={ `${_betType == betType ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")} ml-2 mt-3 border p-1 rounded-md text-base font-semibold`}  
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-3 pl-2">
                <p className="text-2xl font-semibold text-center">Pick Bet Type 
                <p className="mt-1"> Current: <span className="text-[#ff0062]">{_betTypeForUI}</span></p>
                </p> 
                <div className={styles.div}>
                {betTypesArr.map(function (betType) {
                    return (
                        <button
                            onClick={() => {onClick(betType)}} //ff0062  000dff
                            key={v4()}
                            className={ `${betType == _betTypeForUI ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")} ml-2 mt-3 border p-1 rounded-md text-base font-semibold`} 
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
