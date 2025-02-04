function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Computing the solution vector using the factor</h5>
        <p>Learning Objective: To learn to compute the Sherman-Morrison update factor using update vectors and the inverse of the given matrix.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    act2_internal_calculations();
}
function start_act2() {
    let temp_btn = (document.getElementById('temp-btn-2'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_a_inputs = get_matrix_html(3, 3, [
        [
            `<input id='a1-utb-11' class='form-control' />`,
            `<input id='a1-utb-12' class='form-control' />`,
            `<input id='a1-utb-13' class='form-control' />`,
        ],
        [
            `<input id='a1-utb-21' class='form-control' />`,
            `<input id='a1-utb-22' class='form-control' />`,
            `<input id='a1-utb-23' class='form-control' />`,
        ],
        [
            `<input id='a1-utb-31' class='form-control' />`,
            `<input id='a1-utb-32' class='form-control' />`,
            `<input id='a1-utb-33' class='form-control' />`,
        ],
    ], 'inline-block', '60%');
    let m = [];
    for (let i = 0; i < a_inv.length; i++) {
        m.push([
            parseFloat(a_inv[i][0].toFixed(7)),
            parseFloat(a_inv[i][0].toFixed(7)),
            parseFloat(a_inv[i][0].toFixed(7)),
        ]);
    }
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb2-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>A<sup>-1</sup> = ${get_matrix_html(3, 3, m, 'inline-block', '40%')} &nbsp; u = ${get_matrix_html(3, 1, mat_u, 'inline-block', '15%')} &nbsp; v = ${get_matrix_html(3, 1, mat_v, 'inline-block', '15%')}</div>
        <br>

        <h5>Given update vectors u and v, compute the factor as follows: </h5>

        <div style='text-align: center;'>
            <p><span style='font-size: 25px;'>$$ P = \\ A^{-1} \\ * \\ u $$</span><p>
            <p><span style='font-size: 25px;'>$$ Q \\ = \\ v^T \\ * \\ A^{-1} $$</span><p>
            <p><span style='font-size: 25px;'>$$ denominator \\ = [1] \\ + \\ Q \\ * \\ u $$</span><p>
            <p><span style='font-size: 25px;'>$$ B \\ = \\ P \\ * \\ v^t \\ * A^{-1} $$</span><p>
        </div>
        <br>

        <div id='ut-inp-div' style='text-align: center;'>B &nbsp; = &nbsp; ${matrix_a_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_ut();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb2-box'), 150);
}
function verify_matrix_ut() {
    let btn = (document.getElementById('temp-btn-123'));
    let inp_a;
    let inp_c;
    console.log(`matrix b =>`, mat_b);
    //for a
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = (document.getElementById(`a1-utb-${i + 1}${j + 1}`));
            if (!verify_values(parseFloat(inp_a.value), mat_b[i][j])) {
                alert(`incorrect value in B matrix at row ${i + 1} column ${j + 1}`);
                return;
            }
        }
    }
    btn.remove();
    render_ut_a_c();
    activity3();
}
function render_ut_a_c() {
    let div = (document.getElementById('ut-inp-div'));
    let m = [];
    for (let i = 0; i < mat_b.length; i++) {
        m.push([
            parseFloat(mat_b[i][0].toFixed(6)),
            parseFloat(mat_b[i][0].toFixed(6)),
            parseFloat(mat_b[i][0].toFixed(6)),
        ]);
    }
    div.innerHTML = `B &nbsp; = &nbsp; ${get_matrix_html(3, 3, mat_b, 'inline-block', '60%')}`;
}
// all internal calculation for act 2
function act2_internal_calculations() {
    //calculate a_inv_u
    mat_u = convert_2d_to_1d_vector(mat_u);
    a_inv_u = multiply(a_inv, mat_u);
    mat_u = convert_1d_to_2d_matrix(mat_u);
    a_inv_u = convert_1d_to_2d_matrix(a_inv_u);
    //calculate v_a_inv
    mat_v = convert_2d_to_1d_vector(mat_v);
    //find tranpose of v
    mat_v_trans = [mat_v[0], mat_v[1], mat_v[2]];
    console.log(mat_v_trans);
    v_a_inv = matrix_multiplication([mat_v_trans], a_inv);
    mat_v = convert_1d_to_2d_matrix(mat_v);
    //calculate denominator
    let ans = matrix_multiplication(v_a_inv, mat_u);
    denominator = ans[0][0] + 1;
    //calculate B
    let res = matrix_multiplication_8decimal(a_inv_u, [mat_v_trans]);
    mat_b = matrix_multiplication_8decimal(res, a_inv);
}
//activity2();
//# sourceMappingURL=activity2.js.map