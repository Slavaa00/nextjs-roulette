import { ConnectButton } from "@web3uikit/web3"
import { ethers } from "ethers"
import { AppContext } from "../contexts/OnchainDataContext"
import { useContext } from "react"
import Link from 'next/link'

export default function Header() {
    const { moneyInTheBank, rouletteAddress }: any = useContext(AppContext)

    return (
        <>
            <div className="flex items-center justify-evenly    p-5">
                <div>
                    <h1 className="ml-24 py-4 px-4 font-sans text-6xl font-black text-[#533adb] ">
                        Roulette
                    </h1>
                    <Link href={`https://goerli.etherscan.io/address/${rouletteAddress}`}><h1 className="ml-24 hover:opacity-50 px-4 font-sans text-lg font-bold text-black ">
                        Link to Contract on Etherscan
                    </h1>
                    </Link>
                </div>

                <div className="ml-6 flex  flex-col justify-center items-start    font-semibold ">
                    <h2
                        className="text-xl cursor-pointer rounded-full border border-[#533adb] py-2 px-8 font-bold text-[#533adb]"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                "0.000000001"
                            )
                        }}
                    >
                        Start Game Value: 0.000000001 ETH
                    </h2>

                    <h2 className="text-xl mt-4 rounded-full border border-black py-2 px-8 font-semibold text-black">
                        Money in the Bank: {ethers.utils
                            .formatEther(moneyInTheBank)
                            .toString()} ETH
                    </h2>
                </div>

                <div className="ml-6">
                    <h2
                        className="  cursor-pointer rounded-full text-xl bg-[#ff0062] py-2 px-6 text-center   font-medium text-white"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                "0.01"
                            )
                        }}
                    >
                        Maximum Bet: 0.01 ETH
                    </h2>

                    <h2
                        className="mt-4 cursor-pointer rounded-full text-xl border border-[#ff0062] py-2 px-6 font-semibold text-[#ff0062]"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                "0.000000000000001"
                            )
                        }}
                    >
                        {" "}
                        Minimal Bet:{" "}
                        {ethers.utils.formatEther(1000)} ETH
                    </h2>
                </div>

                <div className="py-2 px-4 ">
                    <ConnectButton moralisAuth={false} />
                </div>
            </div>
        </>
    )
}
