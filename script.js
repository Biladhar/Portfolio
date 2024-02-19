document.addEventListener('DOMContentLoaded', function() {
    // Initialize Darkmode
    const options = {
        time: '0.5s',
        mixColor: '#fff',
        backgroundColor: '#fff',
        buttonColorDark: '#100f2c',
        buttonColorLight: '#fff',
        saveInCookies: false,
        label: '🌓',
        autoMatchOsTheme: true
    };
    new Darkmode(options).showWidget();

    // Toggle dark mode
    const darkModeToggle = document.querySelector('.darkmode-toggle');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Change image source based on dark mode
        const mainImage = document.getElementById('mainImage');
        if (document.body.classList.contains('dark-mode')) {
            mainImage.src = './asset/a_cute_chinese_dragon_by_asifiqbal09_dgcab62-fullview.jpg'; // Dark mode image
        } else {
            mainImage.src = './asset/Cute-Baby-Black-Dragon-PNG-File-Wall-Art-Graphics-63950521-1-1-580x386.png'; // Light mode image
        }
    });
});
// <<<<<<< HEAD






// contact section script 
function increase(index){
    var y=document.querySelector(".label" + index);
    y.style.top='-14px'
}
function changeImg(element){
    if(element.src.includes("linkedin")){
        if(element.src.includes("linkedin.png")){
        element.style.backgroundColor ="#38626F";
        element.src="./asset/images/linkedin-black.png";
        }
        else{
        element.src="./asset/images/linkedin.png"
        element.style.backgroundColor="#1E353C"
        }
    }else {
        if(element.src.includes("Github.png")){
            element.style.backgroundColor ="#38626F";
            element.src="./asset/images/Github-black.png";
            }
            else{
            element.src="./asset/images/Github.png"
            element.style.backgroundColor="#1E353C"
            }
    }
}
// function colorText(element){
//     console.log("color : " , element.style.color);
//     if(element.style.color=="rgb(110, 199, 224)"){
//     element.style.color="rgb(255, 255, 255)";
//     }else element.style.color="rgb(110, 199, 224)";
// }
// end contact section script 



var imageSource = ["./asset/najem.jpg", "", "./asset/Bilel.jpg", "./asset/iheb.jpg", "./asset/omar.jpg"];
function switchImg(index){
    var K=document.querySelector("#player" + index);
    if(K.src.includes("p3.jpg")){
        K.src=imageSource[index];
    }else{
        K.src="./asset/Dragons/p3.jpg";
    }
}
