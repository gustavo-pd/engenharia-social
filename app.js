const buttonJPG = document.getElementById('button_jpg');
const buttonPDF = document.getElementById('button_pdf');

buttonJPG.addEventListener('click', function() {
    const link = document.createElement('a');

    link.setAttribute('href', './assets/images/CopyAndPaste.png');
    link.setAttribute('download', 'data-protection.jpg');
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
});

buttonPDF.addEventListener('click', function() {
    const link = document.createElement('a');

    link.setAttribute('href', './assets/images/Results.png');
    link.setAttribute('download', 'data-protection.pdf');

    document.body.appendChild(link);
    
    link.click();

    document.body.removeChild(link);
});