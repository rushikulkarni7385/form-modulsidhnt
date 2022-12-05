// alert(new Date);
let cl = console.log;

let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email")
let tbody = document.getElementById("tbody");
let radioMale = document.getElementById("male");
let radioFemail = document.getElementById("femal");
const termsAndconditions = document.getElementById("termsAndconditions"); 
cl(termsAndconditions);


form.addEventListener("submit", onformSubmit);
  let stdArry = [];
  result = "";
function onformSubmit(e){
     cl(e.target)
     e.preventDefault();
    cl(name.value, email.value)
       let object = {
           keyname : name.value,
           email : email.value,
           gender :  getgender(),
           GettermAndcon : termsandcondition()
       }
       if(object.gender === undefined){
             alert("plase selct your gender")
       }else{
       stdArry.push(object);
       
     cl(stdArry);
     templating();
    
     this.reset();
       }
};
// 
function templating(){
      result = "";
         stdArry.forEach((itms,i)=>{
        result += `
          <tr>
          <td>${i + 1}</td>
          <td>${itms.keyname}</td>
          <td>${itms.email}</td>
          <td>${itms.gender}</td>
          <td>${creatIcon(itms)}</td>
    
      </tr>
          `;
         })
         tbody.innerHTML = result;
}; 

function getgender(){
     if(radioMale.checked){
           return radioMale.value
     }
     if(radioFemail.checked){
           return radioFemail.value
     }
  
}
function termsandcondition(){
       let value = false;
       if(termsAndconditions.checked){
           value =  true;
       }
         return value;
};
// function creatIcon(){
//        let icon = "not accepted";
//        if(termsAndconditions.checked){
//              icon = "Accepted";
//        }
//        return icon;
// }


function creatIcon(ele){
      let icon = `<i class="fa fa-xmark"></i>`;
      if(ele.GettermAndcon === true){
            icon = `<i class="fa fa-check"></i>`;
      }
      return icon;
}















