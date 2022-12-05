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

import styles from "../styles/DepositButton.module.css"




function DepositButton() {
    const [depositValue, setDepositValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDepositValue(
                ethers.utils
                    .parseUnits(e.target.value, "ether")
                    .toString()
            )
        } else {setDepositValue("")}
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
        confetti, 
        setConfetti
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
            <div className={styles.depositButtonDiv}>
                <label htmlFor="deposit">
                    <button
                        className=" mb-2 mr-3 h-16 w-40 rounded bg-green-500 py-1 px-4 text-3xl font-bold text-white hover:bg-green-700"
                        onClick={async function () {
                            setConfetti(false);
                            await deposit({
                                onSuccess: async (tx: any) => {setTimeout(async () => {
                                    await updateUI()
                                }, 20000)},
                            });
                            setDepositValue("");
                            input.current.value = "";
                        }}
                    >
                        Deposit
                    </button>
                </label>
                <input
                    ref={input}
                    className="[appearance:none] text-black text-lg h-14 w-52 border border-green-500 rounded-md pl-2 font-medium outline-green-500"
                    id="deposit"
                    type="number"
                    placeholder="Deposit amount (ETH)"
                    minlength="1"
                    // value={depositValue}
                    onChange={onChange}
                />
            </div>
        </>
    )
}
// .depositInput {
//     color: black;
//     font-size: 1.125rem; 
//     line-height: 1.5rem; 
//     height: 3.5rem;
//     width: 13rem;
//     border: 1px solid #22c55e;
//     border-radius: 0.375rem;
//     padding-left: 0.5rem;
//     font-weight: 500;
//     outline-color: #22c55e;
  
//     /* "[appearance:textfield]     */
// }
export default DepositButton
