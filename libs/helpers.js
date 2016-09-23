const dust = require('dustjs-helpers');

module.exports = () => {
    'use strict';

    /**
     * Formats a number as currency
     * @param value
     * @returns {string}
     */
    dust.filters.currency = function(value) {
        var symbol = 'R';
        var prefix;
        value = 1 * value;

        if (value >= 0) {
            prefix = symbol;
        } else {
            value = value * -1;
            prefix = '-' + symbol;
        }

        if (value % 1 === 0) {
            return prefix + value;
        } else {
            return prefix + value.toFixed(2);
        }
    };
};