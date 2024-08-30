function Cl() {
    document.getElementById('bttn').style.backgroundColor='rgb(17, 186, 17)';
    let Code = document.getElementById('ctl00_cntphmaster_txt_StudCode')
    setTimeout(() => {
        document.getElementById('bttn').value = 'جاري التحقق من الرقم القومي';
    }, 500);
    setTimeout(() => {
        if(Code.value == 30205080200655 || '30205080200655'){
        document.getElementById('Mr').style.display='none';
        document.getElementById('box-body').style.display='none';
        document.getElementById('Mn').style.display='block';
        } else{
            document.getElementById('bttn').value = 'خطأ في البيانات';
            document.getElementById('bttn').style.backgroundColor='red';
        }
    }, 2000);
}
