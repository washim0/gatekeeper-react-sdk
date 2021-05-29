var WGatekeeperClient = /** @class */ (function () {
    function WGatekeeperClient(client) {
        this.clientDetails = client;
    }
    WGatekeeperClient.prototype.hasFeatureEnabled = function (featureSlug) {
        return true;
    };
    return WGatekeeperClient;
}());
export { WGatekeeperClient };
//# sourceMappingURL=WGatekeeperClient.js.map