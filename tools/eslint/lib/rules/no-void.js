/**
 * @fileoverview Rule to disallow use of void operator.
 * @author Mike Sidorov
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `void` operators",
            category: "Best Practices",
            recommended: false
        },

        schema: []
    },

    create: function(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            UnaryExpression: function(node) {
                if (node.operator === "void") {
                    context.report(node, "Expected 'undefined' and instead saw 'void'.");
                }
            }
        };

    }
};
