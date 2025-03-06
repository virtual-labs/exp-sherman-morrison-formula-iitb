function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Computing the final solution X</h5>
        <p>Learning Objective: To learnhow to find the final solution x using the Sherman-Morrison update vector</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    calculate_x();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act3() {
    let temp_btn = (document.getElementById('temp-btn-3'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_x_inputs = get_matrix_html(3, 1, [
        [`<input id='a1-x-11' class='form-control' />`],
        [`<input id='a1-x-21' class='form-control' />`],
        [`<input id='a1-x-31' class='form-control' />`],
    ], 'inline-block', '25%');
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb3-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 3, a_inv, 'A<sup>-1</sup>', 'inline-block', '35%')} ${get_matrix_html_with_title(3, 1, mat_u, 'u', 'inline-block', '15%')} ${get_matrix_html_with_title(3, 1, mat_v, 'v', 'inline-block', '15%')} ${get_matrix_html_with_title(3, 1, mat_c, 'c', 'inline-block', '15%')} </div>
        <br><br>

        <h5>Given update vectors u and v RHS vectors c, and using the denominator calculate earlier, compute the final solution x as follows (Consider the first column of matrix as the solution): </h5> <br>

        <p style='text-align: center;'><span style='font-size: 25px;'>$$ x \\ = \\ (A^{-1} \\ * \\ c) \\ - \\ \\frac{B}{denominator} \\ * \\ (v^T \\ * \\ A^{-1} \\ * \\ c)  $$</span></p> <br>

        <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>X</span> = ${matrix_x_inputs}</div>
        <br>



        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_bs();'  id='temp-btn-1234' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb3-box'), 150);
}
function verify_matrix_bs() {
    let btn = (document.getElementById('temp-btn-1234'));
    let inp_c;
    console.log(`matrix x =>`, mat_x);
    //for x
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-x-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_x[i])) {
            alert(`incorrect value in 3 x 1 matrix for X[${i + 1}]`);
            return;
        }
    }
    btn.remove();
    render_bs_a_c();
    alert('You have successfully completed this experiment.');
    maindiv.innerHTML = ``;
}
function calculate_x() {
    mat_x = matrix_multiplication_8decimal(a_inv, mat_c);
    let res = [];
    //calculate b/denominator
    for (let i = 0; i < 3; i++) {
        res.push([
            mat_b[i][0] / denominator,
            mat_b[i][1] / denominator,
            mat_b[i][2] / denominator,
        ]);
    }
    console.log(res);
    //calculate (v' * A_inv * c)
    let res1 = matrix_multiplication([mat_v_trans], a_inv);
    let res2 = matrix_multiplication_8decimal(res1, mat_c);
    let res3 = res2[0][0];
    console.log(res2);
    //calculate (b/denominator) * (v' * A_inv * c)
    let res4 = [];
    for (let i = 0; i < 3; i++) {
        res4.push([
            res[i][0] / denominator,
            res[i][1] / denominator,
            res[i][2] / denominator,
        ]);
    }
    console.log(res4);
    //substract b/denominator * (v' * A_inv * c)
}
function render_bs_a_c() {
    let div = (document.getElementById('ut-inp-div'));
    div.innerHTML = `${get_matrix_html(3, 3, mat_a, 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>. X</span>  &nbsp; =  &nbsp; ${get_matrix_html(3, 1, mat_c, 'inline-block', '15%')}`;
}
//# sourceMappingURL=activity3.js.map