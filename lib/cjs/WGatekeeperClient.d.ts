export interface IWGatekeeperClientDetails {
    environment: string;
}
export declare class WGatekeeperClient {
    clientDetails: IWGatekeeperClientDetails;
    constructor(client: IWGatekeeperClientDetails);
    hasFeatureEnabled(featureSlug: string): boolean;
}
