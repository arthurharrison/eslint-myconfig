module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: "eslint:recommended",
    rules: {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "warn",
            "single",
            {"avoidEscape": true}
        ],
        "semi": [
            "error",
            "always"
        ],

        "strict": [
            "error"
        ],
        "max-len": [
            "error", {
            "code": 80,
            "tabWidth": 2
        }],

        "eqeqeq": [
            "error",
            "smart"
        ],
        "no-useless-return": [
            "error"
        ],
        "no-var": [
            "warn"
        ],
        "vars-on-top": [
            "warn"
        ],
        "no-useless-escape": [
            "warn"
        ],
        "no-mixed-requires": [ 
            "error"
        ],
        "no-unreachable": [
            "error"
        ],
        "no-self-compare":[
            "error"
        ],
        "no-ternary": [
            "error"
        ],
        "camelcase": [
            "warn"
        ],

        "comma-dangle": [
            "error",
            "never"
        ],
        "no-restricted-properties": "off",
        "prefer-numeric-literals": "off",

        "no-redeclare": "error",
        "no-console": "off",
        "no-restricted-modules": "off",
        "no-undef": "error",
        "no-undef-init": "error",

        "no-unused-vars": [
            "warn",
            {"vars":"all","varsIgnorePattern":"[iI]gnored"}
        ],
        "no-use-before-define": "error"

        }
    };
