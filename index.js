// All the JS Code for the Add Students Page Goes Here

let form=document.querySelector("form");
form.addEventListener("submit",getData);

let admissionArr=JSON.parse(localStorage.getItem("admission")) || [];

function getData(event){
    event.preventDefault();
    let flag=0;

    let admissionObj={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        gender:form.gender.value,
        course:form.course.value
    }
    
    for(let key in admissionObj){
        if(admissionObj[key]==""){
            flag=1;
            alert("⛔ Please fill all Data !");
            break;
        }
    }

    console.log(admissionArr);

    if(flag==0){
        admissionArr.push(admissionObj);
        localStorage.setItem("admission",JSON.stringify(admissionArr));
    }
    
}
