/*
CORREIA, GLEN PAUL - 1001980331
GADE, SAI RISHITH REDDY - 1001949866
*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function login(event) {
    console.log(event.target.form[0].value)
    const emailIds = {
        "student@mavs.uta.edu": "/Users/glencorreia/Desktop/WDM SCRATCH/dashboarduser.html",
        "business@mavs.uta.edu": "/Users/glencorreia/Desktop/WDM SCRATCH/dashboardbusiness.html",
        "schooladmin@mavs.uta.edu": "/Users/glencorreia/Desktop/WDM SCRATCH/dashboardschooladmin.html",
        "superadmin@mavs.uta.edu": "/Users/glencorreia/Desktop/WDM SCRATCH/dashboardadmin.html"
    }

    if(emailIds[event.target.form[0].value]){
        window.location = emailIds[event.target.form[0].value];
    } else {
        alert("No such account exists")
    }




}