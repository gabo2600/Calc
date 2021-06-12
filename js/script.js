
//*****Calc

//Global vars
var buf = 0;
var dot = false;
var override = false;
var op = '';

//Functions
{

    const input = document.getElementById("input");

    const numberCl = (num) => {
        //alert(num);
        if (override) {
            input.value = num;
            override = false;
            dot = false;
        }
        else
            input.value += num;
    }

    const Del = () => {
        input.value = "";
    }

    const Reset = () => {
        Del();
        buf = 0;
        dot = false;
        override = false;
        op = '';
    }

    const addDot = () => {
        if (dot == false) {
            input.value += '.';
            dot = true;
        }
    }

    const makeOp = () => {
        switch (op) {
            case '+':
                input.value = buf + parseFloat(input.value);
                buf = 0;
                override = true;
                break;
            case '-':
                input.value = buf - parseFloat(input.value);
                buf = 0;
                override = true;

                break;
            case 'x':
                input.value = buf * parseFloat(input.value);
                buf = 0;
                override = true;
                break;
            case '/':
                input.value = buf / parseFloat(input.value);
                buf = 0;
                override = true;
                break;
        }
        if (input.value == 'Infinity'|| input.value == 'NaN')
            input.value = '0';
        op = '';
    }

    const opClick = (simbol) => {
        if (op != '')
            makeOp();
        override = true;
        buf = parseFloat(input.value);
        op = simbol;
    }


    const eq = () => {
        makeOp();
        buf = 0;
        dot = false;
        override = true;
        op = '';
    }


//Elements

    var btn = [];
    btn.push(document.getElementById("bt0"));
    btn.push(document.getElementById("bt1"));
    btn.push(document.getElementById("bt2"));
    btn.push(document.getElementById("bt3"));
    btn.push(document.getElementById("bt4"));
    btn.push(document.getElementById("bt5"));
    btn.push(document.getElementById("bt6"));
    btn.push(document.getElementById("bt7"));
    btn.push(document.getElementById("bt8"));
    btn.push(document.getElementById("bt9"));

    document.getElementById("btDel").addEventListener("click", Del);
    document.getElementById("btPlus").addEventListener("click", () => opClick('+'));
    document.getElementById("btLess").addEventListener("click", () => opClick('-'));
    document.getElementById("btDiv").addEventListener("click", () => opClick('/'));
    document.getElementById("btTimes").addEventListener("click", () => opClick('x'));
    document.getElementById("btDot").addEventListener("click", addDot);

    const btEq = document.getElementById("btEq");
    btEq.addEventListener("click", eq);

    document.getElementById("btRes").addEventListener("click", Reset);

    for (let i = 0; i < 10; i++) {
        btn[i].addEventListener("click", () => numberCl(i))
    }
}

//********+Style

    var theme = 0;
    const cssVars =
        [
            "--c_bg",
            "--c_bg_input",
            "--c_bg_pad",
            "--c_bg_btn",
            "--c_bg_btn_spc1",
            "--c_bg_btn_spc2",
            "--c_sh_btn",
            "--c_sh_btnS1",
            "--c_sh_btnS2",
            "--c_font",
            "--c_font_btn"
        ];

    const colors = [
        [
            "#3b4664",
            "#181f32",
            "#252d44",
            "#eae3db",
            "#647299",
            "#d13f30",
            "#b2a295",
            "#414e6e",
            "#992315",
            "#feffff",
            "#4b4e5d",
        ],
        [
            "#e6e6e6",
            "#eeeeee",
            "#d3cdcd",
            "#e5e4e0",
            "#388187",
            "#c85401",
            "#a69c92",
            "#1a6165",

            "#893a02",
            "#383830",
            "#333",
        ],
        [
            "#17062a",
            "#1e0836",
            "#1e0836",
            "#331b4d",
            "#59057f",
            "#00decf",

            "#852299",
            "#852299",
            "#6ef7ef",
            "#ffee41",
            "#ffee41",
        ]
    ];


    const root = document.documentElement;
    const stage = document.getElementById("stage");

    const changeTheme = () => {
        switch (theme) {
            case 0:
                stage.style.setProperty("justify-content","center");
                theme = 1;
                break;
            case 1:
                stage.style.setProperty("justify-content","end");
                btEq.style.setProperty("color","#222");
                theme = 2;
                break;
            case 2:
                stage.style.setProperty("justify-content","start");
                btEq.style.setProperty("color","var(--c_font_btnS)");
                theme = 0;
                break;
        }
        for (let i = 0; i < 11; i++) {
            root.style.setProperty(cssVars[i], colors[theme][i]);
        }
    }
