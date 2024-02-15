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


var htmlNum = [30, 20, 90, 60, 60];
var cssNum = [43, 66, 63, 23, 50];
var jsNum = [40, 60, 56, 40, 80];

function showSkills(i){
    

    document.getElementById('skillsBox').style.display="-webkit-box"
    
    const najemText ="najemText";
    const yassinText ="yassinText";
    const bilelText ="bilelText";
    const ihebText ="ihebText";
    const OmarText ="OmarText";


    switch (i) {
        case 0:
            document.getElementById('narrative').innerText=najemText;
            document.getElementById('htmlValue').innerText = htmlNum[0] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[0] + "%";
            document.getElementById('cssValue').innerText = cssNum[0] + "%";
            document.getElementById('cssbg').style.width = cssNum[0] + "%";
            document.getElementById('jsValue').innerText = jsNum[0] + "%";
            document.getElementById('jsbg').style.width = jsNum[0] + "%";
            break;
        case 1:
            document.getElementById('narrative').innerText=yassinText;
            document.getElementById('htmlValue').innerText = htmlNum[1] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[1] + "%";
            document.getElementById('cssValue').innerText = cssNum[1] + "%";
            document.getElementById('cssbg').style.width = cssNum[1] + "%";
            document.getElementById('jsValue').innerText = jsNum[1] + "%";
            document.getElementById('jsbg').style.width = jsNum[1] + "%";
            break;
        case 2:
            document.getElementById('narrative').innerText=bilelText;
            document.getElementById('htmlValue').innerText = htmlNum[2] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[2] + "%";
            document.getElementById('cssValue').innerText = cssNum[2] + "%";
            document.getElementById('cssbg').style.width = cssNum[2] + "%";
            document.getElementById('jsValue').innerText = jsNum[2] + "%";
            document.getElementById('jsbg').style.width = jsNum[2] + "%";
            break;
        case 3:
            document.getElementById('narrative').innerText=ihebText;
            document.getElementById('htmlValue').innerText = htmlNum[3] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[3] + "%";
            document.getElementById('cssValue').innerText = cssNum[3] + "%";
            document.getElementById('cssbg').style.width = cssNum[3] + "%";
            document.getElementById('jsValue').innerText = jsNum[3] + "%";
            document.getElementById('jsbg').style.width = jsNum[3] + "%";
            break;
        case 4:
            document.getElementById('narrative').innerText=OmarText;
            document.getElementById('htmlValue').innerText = htmlNum[4] + "%";
            document.getElementById('htmlbg').style.width = htmlNum[4] + "%";
            document.getElementById('cssValue').innerText = cssNum[4] + "%";
            document.getElementById('cssbg').style.width = cssNum[4] + "%";
            document.getElementById('jsValue').innerText = jsNum[4] + "%";
            document.getElementById('jsbg').style.width = jsNum[4] + "%";
            break;
                  
        default:
          statements
      }
}