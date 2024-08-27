(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // Node.js/CommonJS
        module.exports = factory();
    } else {
        // Browser global
        global.Excavator = factory();
    }
}(typeof window !== "undefined" ? window : this, function () {

    function extractJsonString(str) {
        const jsonRegex = /{[^]*}/;
        const match = jsonRegex.exec(str);
        
        if (match) {
            return match[0];
        }
        else {
            throw new Error('Uncaught Error: No JSON object found in the string');
        }
    }

    function parseJsonString(jsonStr) {
        try {
            return JSON.parse(jsonStr);
        } catch (e) {
            throw new Error("Invalid JSON string");
        }
    }

    function extractAndParseJson(str) {
        const jsonString = extractJsonString(str);
        return parseJsonString(jsonString);
    }

    return {
        extractJsonString,
        parseJsonString,
        extractAndParseJson
    };
}));