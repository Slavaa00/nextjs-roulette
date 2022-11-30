import { ReactNode } from "react"

export interface Bet {
    id: number
    _betType: number
    _numbers: number[]
    description?: string,
}

export interface Props {
    children?: ReactNode
    // any props that come into the component
}
