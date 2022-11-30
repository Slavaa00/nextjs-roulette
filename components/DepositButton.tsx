import {
    useContext,
    useEffect,
    useState,
    useRef,
    ChangeEvent,
} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import {
    BigNumber,
    ethers,
    ContractTransaction,
} from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

function DepositButton() {
    const [depositValue, setDepositValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDepositValue(
                ethers.utils
                    .parseUnits(e.target.value, "ether")
                    .toString()
            )
        } else setDepositValue("")
    }

    const input = useRef()

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

    const {
        runContractFunction: deposit,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: rouletteAddress!,
        functionName: "deposit",
        msgValue: depositValue,
    })
    return (
        <>
            <div className="mt-2 mr-8 flex items-center justify-center">
                <label htmlFor="deposit">
                    <button
                        className="mb-2 mr-3 h-16 w-40 rounded bg-green-500 py-2 px-4 text-xl font-bold text-white hover:bg-green-700"
                        onClick={async function () {
                            await deposit()
                            setDepositValue("")
                            input.current.value = ""
                        }}
                    >
                        Deposit
                    </button>
                </label>
                <input
                    ref={input}
                    className="text-black-900 text-md h-14 w-44 rounded border border-green-500 pl-1 font-medium outline-green-500"
                    id="deposit"
                    type="text"
                    placeholder="Deposit amount (ETH)"
                    // value={depositValue}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default DepositButton
