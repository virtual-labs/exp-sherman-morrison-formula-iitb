let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">System of Linear Equations: Sherman Morrison Method</h4>
        <br>

        <div class="fs-16px">
        <h5>Computing Inverse of a Matrix</h5>
        <p>Learning Objective: To learn how to compute inverse of a matrix manually</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
// let mat1 = get_matrix_html(3, 1, [[1], [2], [3]], 'inline-block');
// console.log(mat1);
//html for matrix inputs
let matrix_a_inputs = get_matrix_html(3, 3, [
    [
        `<input id='a1-mata-11' class='form-control' />`,
        `<input id='a1-mata-12' class='form-control' />`,
        `<input id='a1-mata-13' class='form-control' />`,
    ],
    [
        `<input id='a1-mata-21' class='form-control' />`,
        `<input id='a1-mata-22' class='form-control' />`,
        `<input id='a1-mata-23' class='form-control' />`,
    ],
    [
        `<input id='a1-mata-31' class='form-control' />`,
        `<input id='a1-mata-32' class='form-control' />`,
        `<input id='a1-mata-33' class='form-control' />`,
    ],
], 'inline-block', '60%');
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>A = ${get_matrix_html(3, 3, mat_a, 'inline-block', '40%')}</div>
        <br>

        <h5>Compute the inverse of matrix A and fill in its elements below.</h5>

        <div id='piv-inp-div' style='text-align: center;'>A<sup>-1</sup> &nbsp; = &nbsp; ${matrix_a_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_a_c();'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    a_inv = [];
    a_inv = inverse(mat_a);
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
function verify_matrix_a_c() {
    let btn = (document.getElementById('temp-btn-12'));
    let inp_a;
    let inp_c;
    console.log(`matrix a inverse =>`, a_inv);
    //for a
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = (document.getElementById(`a1-mata-${i + 1}${j + 1}`));
            if (!verify_values(parseFloat(inp_a.value), a_inv[i][j])) {
                alert(`incorrect value A inverse at row ${i + 1} and column ${j + 1}`);
                return;
            }
        }
    }
    btn.remove();
    render_inverse_a();
    activity2();
}
function render_inverse_a() {
    let div = (document.getElementById('piv-inp-div'));
    let m = [];
    for (let i = 0; i < a_inv.length; i++) {
        m.push([
            parseFloat(a_inv[i][0].toFixed(4)),
            parseFloat(a_inv[i][0].toFixed(4)),
            parseFloat(a_inv[i][0].toFixed(4)),
        ]);
    }
    div.innerHTML = `A<sup>-1</sup> &nbsp; = &nbsp; ${get_matrix_html(3, 3, m, 'inline-block', '40%')}`;
}
activity1();
//# sourceMappingURL=activity1.js.map