const buttonPDF = document.getElementById('button_pdf');

buttonPDF.addEventListener('click', function() {
    const link = document.createElement('a');

    link.setAttribute('href', './assets/images/Engenharia_Social.pdf');
    link.setAttribute('download', 'data-protection.pdf');

    document.body.appendChild(link);
    
    link.click();

    document.body.removeChild(link);
});