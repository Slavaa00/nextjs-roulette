import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import {
    BigNumber,
    ethers,
    ContractTransaction,
} from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { useMetaMask } from "metamask-react"

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
        setConfetti,
    }: any = useContext(AppContext)

    const { switchChain } = useMetaMask()

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

    Moralis.onChainChanged(async (chain: any) => {
        setConfetti(false)
        setTimeout(() => {
            setConfetti(true)
        }, 2000)
        if (Number(chain).toString() == chainId) {
            setGoerliNetwork(true)
            // await updateUI()
        } else {
            setGoerliNetwork(false)
        }
    })

    return (
        <>
            <div className="flex ">
                <div className="flex h-screen w-1/2 flex-col items-center justify-start  ">
                    <p className="mb-2 text-xl font-semibold">
                        Privet^_^)
                    </p>
                    {goerliNetwork ? (
                        <>
                            <DepositButton />
                            <BetAmountInput />
                            <BetType />
                            <Numbers />
                            <CreateBetButtons />
                        </>
                    ) : (
                        <button
                            className="underline rounded-lg bg-[#ff0062] p-3 text-4xl font-bold text-white hover:bg-[#00fffb]"
                            onClick={() =>
                                switchChain("0x5")
                            }
                        >
                            Please switch network to Goerli
                        </button>
                    )}
                </div>
                <div className="flex h-screen w-[515px] flex-col items-center justify-start  ">
                    <Field />
                </div>
                <div className="flex h-screen w-1/2 flex-col items-center justify-start ">
                    <PlayerUI />
                </div>
            </div>
        </>
    )
}
