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