function show_password() {
    let x = document.getElementById("pass-fodase1");
    let y = document.getElementById("pass-fodase2");
    if(x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    }
    else {
        x.type = "password";
        y.type = "password";
    }
}