/// <reference types="node" />
import { BaseMsg, Msg, SignMsg } from "../";
import { AminoPrefix } from "../../tx";
export interface SignedUnFreezeToken extends SignMsg {
    from: string;
    symbol: string;
    amount: number;
}
export interface UnFreezeTokenData extends Msg {
    from: Buffer;
    symbol: string;
    amount: number;
    aminoPrefix: AminoPrefix;
}
export declare class UnFreezeTokenMsg extends BaseMsg {
    private from;
    private symbol;
    private amount;
    constructor({ address, sybmol, amount, }: {
        address: string;
        sybmol: string;
        amount: number;
    });
    getSignMsg(): SignedUnFreezeToken;
    getMsg(): UnFreezeTokenData;
    static defaultMsg(): {
        from: Buffer;
        symbol: string;
        amount: number;
        aminoPrefix: AminoPrefix;
    };
}
