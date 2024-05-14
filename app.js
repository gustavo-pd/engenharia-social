const buttonJPG = document.getElementById('button_jpg');
const buttonPDF = document.getElementById('button_pdf');

buttonJPG.addEventListener('click', function() {
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    const link3 = document.createElement('a');
    const link4 = document.createElement('a');
    const link5 = document.createElement('a');
    const link6 = document.createElement('a');

    link1.setAttribute('href', './assets/images/1.png');
    link2.setAttribute('href', './assets/images/2.png');
    link3.setAttribute('href', './assets/images/3.png');
    link4.setAttribute('href', './assets/images/4.png');
    link5.setAttribute('href', './assets/images/5.png');
    link6.setAttribute('href', './assets/images/6.png');
    link1.setAttribute('download', 'data-protection-1.jpg');
    link2.setAttribute('download', 'data-protection-2.jpg');
    link3.setAttribute('download', 'data-protection-3.jpg');
    link4.setAttribute('download', 'data-protection-4.jpg');
    link5.setAttribute('download', 'data-protection-5.jpg');
    link6.setAttribute('download', 'data-protection-6.jpg');
    
    document.body.appendChild(link1);
    document.body.appendChild(link2);
    document.body.appendChild(link3);
    document.body.appendChild(link4);
    document.body.appendChild(link5);
    document.body.appendChild(link6);
    
    link1.click();
    link2.click();
    link3.click();
    link4.click();
    link5.click();
    link6.click();
    
    document.body.removeChild(link1);
    document.body.removeChild(link2);
    document.body.removeChild(link3);
    document.body.removeChild(link4);
    document.body.removeChild(link5);
    document.body.removeChild(link6);
});

buttonPDF.addEventListener('click', function() {
    const link = document.createElement('a');

    link.setAttribute('href', './assets/images/Engenharia_Social.pdf');
    link.setAttribute('download', 'data-protection.pdf');

    document.body.appendChild(link);
    
    link.click();

    document.body.removeChild(link);
});