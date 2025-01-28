// gaussian elimination variables ----------------------------------------------------------------
let mat_c = [
    [
        7.2038
    ],
    [
        -14.165
    ],
    [
        71.985
    ]
];
let mat_a = [
    [
        96.8874,
        -4.023,
        9.4841
    ],
    [
        -35.4831,
        -92.0509,
        4.4445
    ],
    [
        4.0625,
        55.0972,
        -51.2556
    ]
];
let mat_u = [];
let mat_v = [];
let mat_v_trans = [];
let a_inv_u = [];
let v_a_inv = [];
let a_inv = [
    [
        0.009404715039998342,
        -0.0018921764020100218,
        0.0020726883560498286
    ],
    [
        0.001208595815928197,
        0.0205801673015944,
        0.005355990336952502
    ],
    [
        -0.002424921600453737,
        0.0003268043429803337,
        -0.026213110726696652
    ]
];
let mat_b = [];
let denominator = 0;
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-50, 50]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
//initialize u and v
function initialize_u_v() {
    for (let i = 0; i < 3; i++) {
        let num1 = Math.round(Math.random() * 6 - 3);
        let num2 = Math.round(Math.random() * 6 - 3);
        if (num1 == -0) {
            num1 = 0;
        }
        if (num2 == -0) {
            num2 = 0;
        }
        mat_u.push([num1]);
        mat_v.push([num2]);
    }
    console.log('u matrix =>', mat_u);
    console.log('v matrix =>', mat_v);
}
initialize_mat_c();
initialize_mat_a();
initialize_u_v();
let mat_x = [];
//# sourceMappingURL=data.js.map