function fib_cps(n, ret) {
    if (n < 2) {
        return ret(1);
    }
    else {
        return fib_cps(n - 1, function (fib1){
            return fib_cps(n - 2, function (fib2){
                return ret (fib1 + fib2);
            });
        });
    }
}

