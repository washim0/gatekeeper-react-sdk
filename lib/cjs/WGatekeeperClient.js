"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WGatekeeperClient = void 0;
var WGatekeeperClient = /** @class */ (function () {
    function WGatekeeperClient(client) {
        this.clientDetails = client;
    }
    WGatekeeperClient.prototype.hasFeatureEnabled = function (featureSlug) {
        return true;
    };
    return WGatekeeperClient;
}());
exports.WGatekeeperClient = WGatekeeperClient;
//# sourceMappingURL=WGatekeeperClient.js.map