function callcc(f, cc) {
    return f(function(x, ret) {
            cc(x)
        },
        cc);
}

function fact_cps(n, ret) {
    if (n <= 1) {
        return callcc(function(cc, rt) {
            kont = cc;
            return rt(1);
        }, ret);
    } else {
        return fact_cps(n - 1, function(v) {
            return ret(v * n)
        })
    }
}

// Versio normal de cps

// function fact_cps(n, ret) {
//     if (n <= 1) {
//         return ret(1);
//     } else {
//         return fact_cps(n - 1, function(v) {
//             return ret(v * n)
//         })
//     }
// }