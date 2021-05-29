export interface IWGatekeeperClientDetails {
    environment: string
}

export class WGatekeeperClient {
    public clientDetails: IWGatekeeperClientDetails

    constructor(client: IWGatekeeperClientDetails) {
        this.clientDetails = client
    }

    hasFeatureEnabled(featureSlug: string): boolean {

        return true
    }
}