/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    constructor: {
        value: function Main() {
            this.super();
            this._a = 1;
            this._b = 42;
        }
    },
    
    a: {
        set: function (a) {
            console.log("setA(" + a + ")");
            this._a = a
        },
        get: function () {
            console.log("getA() = " + this._a);
            return this._a;
        }
    },
    
    b: {
        set: function (b) {
            console.log("setB(" + b + ")");
            this._b = b
        },
        get: function () {
            console.log("getB() = " + this._b);
            return this._b;
        }
    },

    handleButtonAction: {
        value: function (event) {
            this.a = this.a + 5;
        }
    }

});
