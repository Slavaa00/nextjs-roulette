import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { useMetaMask } from "metamask-react";

import CreateBetButtons from "./CreateBetButtons"
import DepositButton from "./DepositButton"
import BetAmountInput from "./BetAmountInput"
import BetType from "./BetType"
import Numbers from "./Numbers"
import Field from "./Field"
import PlayerUI from "./PlayerUI"

export default function RouletteEntrance() {
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
        
    }: any = useContext(AppContext)

    const { switchChain } = useMetaMask();

    useEffect(() => {
        async function asyncUpdateUI() {
            await updateUI()
        }
        asyncUpdateUI()
    }, [])

    useEffect(() => {
        if (checkNetwork() == "5") {
            setGoerliNetwork(true)
        } else {
            setGoerliNetwork(false)
        }
    }, [])

    Moralis.onChainChanged((chain: any) => {
        if (Number(chain).toString() == chainId) {
            setGoerliNetwork(true)
        } else {
            setGoerliNetwork(false)
        }
    })

    return (
        <> 
        <div className="flex ">
            <div className="w-1/2 h-screen border-green-400 border-2 flex flex-col justify-start items-center">
                <p className="text-xl mb-2 font-semibold">Privet^_^)</p>
                {goerliNetwork ? ( 
                    <> 
                <DepositButton />
                <CreateBetButtons />
                <BetAmountInput />
                <BetType />
                <Numbers /> </>) : (<button className="text-4xl bg-[#ff0062] text-white font-bold p-2 rounded-lg" onClick={() => switchChain("0x5")}>Please switch network to Goerli</button>)
               } 
            </div>
            <div className="w-[515px] h-screen border-red-400 border-2 flex flex-col justify-start items-center">
                <Field />

                
            </div>
            <div className="w-1/2 h-screen border-blue-400 border-2 flex flex-col justify-start items-center">
                <PlayerUI />

                
            </div>
            </div>
        </>
    )
}
