const requiredFields=['firstName','lastName','userEmail','phone','datePic'];
const requiredFieldsText=['İsim','Soyisim','E-Mail','Telefon Numarası','Tarih'];
const alertColors={
    error:['#f5d2d2','Form gönderilirken problem oluştu.'],
    success:['#dff1cc','Form başarılı bir şekilde gönderildi.'],
    warning:['#daeefc','Lütfen gerekli alanları doldurunuz.']
};
//controls if form is valid
const isFormValid=()=>{
    for(let field in requiredFields) {
        let fieldText = requiredFields[field];
        let val = $(`#${fieldText}`).val();
        if (fieldText === 'phone') {
            val = val.split('-')[1].replace(' ', '');
        }
        if (!val) {
            return false;
        }
    }
    return true;
};
//arranges alert div for specific event
const arrangeAlert=(type)=>{
    const alertDiv=$('.alert');
    let alertElement=alertColors[type];
    let alertText=alertElement[1];
    if(type==='warning'){
        alertText=alertText+'\n('+requiredFieldsText.join(', ')+')';
    }

    let alertColor=alertElement[0];
    alertDiv.css('background-color',alertColor);
    alertDiv.text(alertText);
    alertDiv.css('display','block');
};
