function Cl() {
    document.getElementById('bttn').style.backgroundColor='rgb(17, 186, 17)';
    setTimeout(() => {
        document.getElementById('bttn').value = 'جاري التحقق من الرقم القومي';
    }, 500);
    setTimeout(() => {
        document.getElementById('Mr').style.display='none';
        document.getElementById('box-body').style.display='none';
        document.getElementById('Mn').style.display='block';
    }, 2000);
}