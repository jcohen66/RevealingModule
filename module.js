/*
 * @Author: jcohen66
 * @Date:   2015-08-22 23:12:02
 * @Last Modified by:   jcohen66
 * @Last Modified time: 2015-08-22 23:16:23
 */

'use strict';

var module = (function() {
    var hiddenMethod = function() {
        alert('I am hidden' + config['colors']);
    };

    var init = function(options) {
        // copy properties of `options` to `config`. Will overwrite existing ones.
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                config[prop] = options[prop];
            }
        }

    };


    return {
        ask: hiddenMethod,
        init: init
    };

})();
