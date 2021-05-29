import * as React from 'react'
import {IWGatekeeperClientDetails} from "./WGatekeeperClient";

interface ProviderProps {
    client: IWGatekeeperClientDetails
}

const GatekeeperProvider = (props: ProviderProps): JSX.Element => {
    return <div>WGatekeeperProvider</div>
}

export const WGatekeeperProvider = React.memo(GatekeeperProvider)
