

function three() {
    return function() {
        return `three`;
    }
}

console.log(three()())