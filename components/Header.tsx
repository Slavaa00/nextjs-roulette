import { ConnectButton } from "@web3uikit/web3"
import { ethers } from "ethers"
import { AppContext } from "../contexts/OnchainDataContext"
import { useContext } from "react"
import Link from 'next/link'

export default function Header() {
    const { moneyInTheBank, rouletteAddress, msgValue, set_msgValue, startGameValue,  minimalBet, maximumBet }: any = useContext(AppContext)

    return (
        <>
            <div className="flex items-center justify-evenly p-5">
                <div>
                    <Link href="/">
                    <h1 className=" ml-24  font-sans text-6xl font-black text-[#533adb] hover:opacity-75">
                        Roulette
                    </h1>
                    </Link>
                    <Link href={`https://goerli.etherscan.io/address/${rouletteAddress}`}><h1 className="mt-3 ml-24 hover:opacity-50  font-sans text-lg font-bold text-black ">
                        Link to the Contract on Etherscan
                    </h1>
                    </Link>
                </div>

                <div className="ml-6 flex  flex-col justify-center items-start font-semibold ">
                    <h2
                        className="text-xl cursor-pointer rounded-full border border-[#533adb] py-2 px-8 font-bold text-[#533adb] hover:text-[#ffffff] hover:bg-[#533adb]"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                startGameValue
                            );
                            set_msgValue(startGameValue)
                        }}
                    >
                        Start Game Value: 0.000000001 ETH
                    </h2>

                    <h2 className="text-xl mt-4 rounded-full border border-black py-2 px-8 font-semibold text-black hover:bg-[#000000] hover:text-[#ffffff]">
                        Money in the Bank: {ethers.utils
                            .formatEther(moneyInTheBank)
                            .toString()} ETH
                    </h2>
                </div>
                {/* [#ff0062] */}
                <div className="ml-6">
                    <h2
                        className="border cursor-pointer rounded-full text-xl bg-[#ff0062] py-2 px-6 text-center   font-medium text-white hover:text-[#ff0062] hover:bg-[#ffffff]  hover:border-[#ff0062]"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                maximumBet
                            );
                            set_msgValue(maximumBet)
                             
                        }}
                    >
                        Maximum Bet: {maximumBet} ETH
                    </h2>

                    <h2
                        className="mt-4 cursor-pointer rounded-full text-xl border bg-[#00fffb] border-[#00fffb] py-2 px-6 font-bold text-[#ffffff] hover:text-[#00fffb] hover:bg-[#ffffff]"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                minimalBet
                            );
                            set_msgValue(minimalBet)

                        }}
                    >
                        {" "}
                        Minimal Bet:{" "}
                        {minimalBet} ETH
                    </h2>
                </div>

                <div className="py-2 px-4 ">
                    <ConnectButton moralisAuth={false} />
                </div>
            </div>
        </>
    )
}
