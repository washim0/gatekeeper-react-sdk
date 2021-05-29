import * as React from 'react';
import { IWGatekeeperClientDetails } from "./WGatekeeperClient";
interface ProviderProps {
    client: IWGatekeeperClientDetails;
}
export declare const WGatekeeperProvider: React.MemoExoticComponent<(props: ProviderProps) => JSX.Element>;
export {};
