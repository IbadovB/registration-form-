const form = document.querySelector('#regisForm')
const successMessage = document.querySelector('#success-message')
form.addEventListener("submit", (e) =>  {
    e.preventDefault()
  
    const fullName = document.querySelector('#fullName').value.trim()
    const userName = document.querySelector('#userName').value.trim()
    const email = document.querySelector('#email').value.trim()
    const phoneNumber =  document.querySelector('#phoneNumber').value.trim()
    const gender = document.querySelector('input[name="gender-type"]:checked')
    const passwordName = document.querySelector('#passwordName').value.trim()
    const confirmPassword = document.querySelector('#confirmPassword').value.trim()
   //const submit = document.querySelector('#submit-btn').checked
    const formAlert = document.querySelectorAll('.form-alert')


    let isValid = true

  // fullName
    if (fullName === '') {
        isValid = false
        document.querySelector('#fullName + .form-alert').style.display = 'block'
        document.querySelector('#fullName').style.border = '1px solid red'
    } else {
        document.querySelector('#fullName + .form-alert').style.display = 'none'
        document.querySelector('#fullName').style.border = '1px solid green'
    }

    // userName
    if (userName === '') {
        isValid = false
        document.querySelector('#userName + .form-alert').style.display = 'block'
        document.querySelector('#userName').style.border = '1px solid red'
    } else {
        document.querySelector('#userName + .form-alert').style.display = 'none'
        document.querySelector('#userName').style.border = '1px solid green'
    }

    // email
    if(!isValidEmail(email)) {
        isValid = false
        document.querySelector('#email + .form-alert').style.display = 'block'
        document.querySelector('#email').style.border = '1px solid red'
    } else{     
        document.querySelector('#email + .form-alert').style.display = 'none'
        document.querySelector('#email').style.border = '1px solid green'
      
    }

    // phoneNumber

    if (phoneNumber === '') {
        isValid = false

        document.querySelector('#phoneNumber + .form-alert').style.display = 'block'
        document.querySelector('#phoneNumber').style.border = '1px solid red'
    } else if(phoneNumber<0) {
        document.querySelector('#phoneNumber + .form-alert').innerHTML = "Number can't be negative";
          document.querySelector('#phoneNumber + .form-alert').style.display = 'block'
        document.querySelector('#phoneNumber').style.border = '1px solid red'
        } else {
        document.querySelector('#phoneNumber + .form-alert').style.display = 'none'
    document.querySelector('#phoneNumber').style.border = '1px solid green'
    }

    // passwordName
    if (passwordName === '') {
        isValid = false

        document.querySelector('#passwordName + .form-alert').style.display = 'block'
        document.querySelector('#passwordName').style.border = '1px solid red'
    } else {
        document.querySelector('#passwordName + .form-alert').style.display = 'none'
     document.querySelector('#passwordName').style.border = '1px solid green'
    }


    // confirmPassword
  if (confirmPassword === '') {
     
        isValid = false
        document.querySelector('#confirmPassword + .form-alert').style.display = 'block'
       document.querySelector('#confirmPassword').style.border = '1px solid red'
     } else if (confirmPassword === passwordName){
        isValid = true
        document.querySelector('#confirmPassword + .form-alert').style.display = 'none'
        document.querySelector('#confirmPassword').style.border = '1px solid green'
    } else{
        document.querySelector('#confirmPassword + .form-alert').innerHTML = 'Enter the same password please'        
        document.querySelector('#confirmPassword + .form-alert').style.display = 'block'
        document.querySelector('#confirmPassword').style.border = '1px solid red'
        
    }



    //  gender
    if (!gender) {
        isValid = false
        document.querySelector('.category + .form-alert').style.display = 'block'        
         } else {
        document.querySelector('.category + .form-alert').style.display = 'none'
         document.querySelector('.category').style.display = '1px solid green'
   }      
   

 /*if (!submit) {
    isValid = false

    formAlert[7].classList.add('form-error')
} else {
    formAlert[7].classList.remove('form-error')
}*/

   if (isValid) {
    successMessage.classList.add('active')
    form.reset()
 }
   
})        
   
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}


















