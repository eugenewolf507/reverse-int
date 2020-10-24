module.exports = function reverse(n) {
    let abs = Math.abs(n);
    let str = String(abs);
    let revStr = str.split("").reverse().join("");
    return Number.parseInt(revStr);
};
