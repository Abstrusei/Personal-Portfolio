$(document).ready(function(){

    // Initialise AOS Library
    AOS.init({
        offset: 400,
        duration: 1000,  
    });

    AOS.init({
        disable: 'mobile'
    });

    AOS.init({
        disable: 'tablet'
    });

    //"JavaScript is Enabled" Body Class
    $("body").addClass("js");

    let prevScrollpos = window.pageXOffset;
    window.addEventListener('scroll', hideOrDisplayNavbar);
    
    // Hides menu on scroll
    function hideOrDisplayNavbar () {
        let currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos) {
            document.getElementById("main-menu").style.top = "0";
            changeNavbarLogo();
        } else {
            document.getElementById("main-menu").style.top = "-130px";
            changeNavbarLogo();
        }

        prevScrollpos = currentScrollpos;
    }
    
    // Changes the main logo text in the navbar to "Scroll to Top"
    let navbarLogo = document.getElementById("main-logo");
    let defaultNavbarLogo = navbarLogo.innerHTML;
    function changeNavbarLogo() {
        if (window.pageYOffset > 600) {
            // console.log("navbar logo should have changed");
            navbarLogo.innerHTML = "SCROLL TO TOP";
        }  else {
            // console.log("navbar logo should be the same");
            navbarLogo.innerHTML = defaultNavbarLogo;
        }
    }

    // let fLeftElments = document.getElementsByClassName("f-left");
    // let fRightElements = document.getElementsByClassName("f-right");

    // fLeftElments.array.forEach(element => {
    //     element.setA
    // });

});