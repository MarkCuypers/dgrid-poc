var dojoConfig = (function() {
  return {
    basePath: "../../lib/dojo/dojo",
    async: true,
    parseOnLoad: false,
    cacheBust: "0.1",
    extraLocale: "nl",
    isDebug: true,
    has: {
      "dojo-firebug": false,
      "dojo-debug-messages": true
    },

    packages: [
      // dojo, dgrid, dojox are siblings
      {name: "dijit", location: "../../dojo/dijit"},
      {name: "dojox", location: "../../dojo/dojox"},
      {name: "put-selector", location: "../../put-selector"},
      {name: "dgrid", location: "../../dgrid"},
      {name: "xstyle", location: "../../xstyle"},
      {name: "app-config", location: "../../../app/config"},
      {name: "app-widget", location: "../../../app/widget"},
      {name: "app-viewmodel", location: "../../../app/viewmodel"}
    ]

  };

})();
