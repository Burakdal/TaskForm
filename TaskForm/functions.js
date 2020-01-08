const requiredFields=['firstName','lastName','userEmail','phone','datePic'];
const alertColors={
    error:['#f5d2d2','Form gönderilirken problem oluştu.'],
    success:['#dff1cc','Form başarılı bir şekilde gönderildi.'],
    warning:['#daeefc','Lütfen gerekli alanları doldurunuz.']
};
const isFormValid=()=>{
    for(let field in requiredFields){
        let fieldText=requiredFields[field];
        if (!$(`#${fieldText}`).val()){
            console.log(fieldText);
            return false;
        }
    }
    return true;
};
const arrangeAlert=(type)=>{
    const alertDiv=$('.alert');
    let alertElement=alertColors[type];
    let alertText=alertElement[1];
    let alertColor=alertElement[0];
    alertDiv.css('background-color',alertColor);
    alertDiv.text(alertText);
    alertDiv.css('display','block');
};
