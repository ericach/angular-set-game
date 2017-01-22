"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./setgame/index');
var appRoutes = index_1.HomeRoutes.concat(index_2.SetGameRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
