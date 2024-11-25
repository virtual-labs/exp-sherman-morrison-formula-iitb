function inverse(a) {
    let n = a.length;
    let b = new Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        b[i][i] = 1;
    }
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            if (i != k) {
                let temp = a[k][i] / a[i][i];
                for (let j = 0; j < n; j++) {
                    a[k][j] = a[k][j] - temp * a[i][j];
                    b[k][j] = b[k][j] - temp * b[i][j];
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            b[i][j] = b[i][j] / a[i][i];
        }
    }
    return (b);
}
function multiply(a, c) {
    let n = c.length;
    let x = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += a[i][j] * c[j];
        }
        x[i] = sum;
    }
    return (x);
}
//# sourceMappingURL=inverse.js.map