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


var htmlNum = [85, 85, 50, 90, 60];
var cssNum = [80, 70, 35, 80, 50];
var jsNum = [75, 65,15 , 50, 40];
var memeberName = ["Najem Eddin Hamdi","Yassin Daira","Bilel Laadhar","Iheb Mechi","Omar Zalila"] ;

function showSkills(i){
    
    document.getElementById('skillsBox').style.display="-webkit-box"
    
    const najemText ="Currently undergoing the Coding Dojo Bootcamp for Web Development, I am thrilled to apply my strong interest and passion for IT and work on exciting projects.\n Coming from a background in industrial maintenance, I possess a strong understanding of concepts and mechanisms and I am certain this will assist me in creating innovative projects.\n I am excited about a prosperous career in web development and working with motivated individuals.";
    const yassinText ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi qui assumenda sequi unde debitis in, nulla sunt excepturi explicabo voluptatum magnam repellat tempora reprehenderit? Cupiditate recusandae facere accusantium optio?";
    const bilelText ="After undergoing my medicine studies, I embark on a career in the shoe industry where I fostered my communication and entrepreneurial skills.\n This has motivated me to found my proper project, which was my first step toward a great interest in the field of IT, all these factors pushed towards building a strong set of knowledge in IT and develop my technical skills.\n I am confident that my previous experiences can present an added value and a unique combination when present in a dynamic setting and I am excited to work in an environment alike. ";
    const ihebText ="My strong passion for Web Development motivated me to embark on an intensive Bootcamp to build and foster my technical and soft skills. \n With a small background in design and an eye for details, I aim to combine my competences and achieve great projects related to web development and gaming.";
    const OmarText ="I am Omar Zalila I am 24 years old, I obtained my diploma in physics and energy in 2022,However, a continuous interest in Web Development led me to the decision of reconverting to IT. \n Therefore, I embarked on intense and comprehensive training at Coding Dojo Bootcamp where I put my creative thinking and motivation into practice and gained strong technical competences. \n I am open to all arising opportunities to work on innovative projects wether locally or abroad and bring a unique perspective to the team";


    switch (i) {
        case 0:
            document.getElementById('narrative').innerText=najemText;
            document.getElementById('htmlValue').innerText = htmlNum[i] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[i] + "%";
            document.getElementById('cssValue').innerText = cssNum[i] + "%";
            document.getElementById('cssbg').style.width = cssNum[i] + "%";
            document.getElementById('jsValue').innerText = jsNum[i] + "%";
            document.getElementById('jsbg').style.width = jsNum[i] + "%";
            document.getElementById('memberName').innerText = memeberName[i];
            break;
        case 1:
            document.getElementById('narrative').innerText=yassinText;
            document.getElementById('htmlValue').innerText = htmlNum[i] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[i] + "%";
            document.getElementById('cssValue').innerText = cssNum[i] + "%";
            document.getElementById('cssbg').style.width = cssNum[i] + "%";
            document.getElementById('jsValue').innerText = jsNum[i] + "%";
            document.getElementById('jsbg').style.width = jsNum[i] + "%";
            document.getElementById('memberName').innerText = memeberName[i];
            break;
        case 2:
            document.getElementById('narrative').innerText=bilelText;
            document.getElementById('htmlValue').innerText = htmlNum[i] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[i] + "%";
            document.getElementById('cssValue').innerText = cssNum[i] + "%";
            document.getElementById('cssbg').style.width = cssNum[i] + "%";
            document.getElementById('jsValue').innerText = jsNum[i] + "%";
            document.getElementById('jsbg').style.width = jsNum[i] + "%";
            document.getElementById('memberName').innerText = memeberName[i];
            break;
        case 3:
            document.getElementById('narrative').innerText=ihebText;
            document.getElementById('htmlValue').innerText = htmlNum[i] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[i] + "%";
            document.getElementById('cssValue').innerText = cssNum[i] + "%";
            document.getElementById('cssbg').style.width = cssNum[i] + "%";
            document.getElementById('jsValue').innerText = jsNum[i] + "%";
            document.getElementById('jsbg').style.width = jsNum[i] + "%";
            document.getElementById('memberName').innerText = memeberName[i];
            break;
        case 4:
            document.getElementById('narrative').innerText=OmarText;
            document.getElementById('htmlValue').innerText = htmlNum[i] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[i] + "%";
            document.getElementById('cssValue').innerText = cssNum[i] + "%";
            document.getElementById('cssbg').style.width = cssNum[i] + "%";
            document.getElementById('jsValue').innerText = jsNum[i] + "%";
            document.getElementById('jsbg').style.width = jsNum[i] + "%";
            document.getElementById('memberName').innerText = memeberName[i];
            break;
            
        default:
        statements
    }
}



// contact section script 
function increase(index){
    var y=document.querySelector(".label" + index);
    y.style.top='-10px'
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
function colorText(element){
    console.log("color : " , element.style.color);
    if(element.style.color=="rgb(110, 199, 224)"){
    element.style.color="rgb(255, 255, 255)";
    }else element.style.color="rgb(110, 199, 224)";
}
// end contact section script 
