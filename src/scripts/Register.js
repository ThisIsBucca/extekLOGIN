
let eye =  document.querySelectorAll('.ico-pass');
let passContainer1 = document.querySelector('#password');
let passContainer2 = document.querySelector('#retypePass');

//eyeClosed and eyeOpen ;declared
const eyeClosed = "url('/src/icons/hidden.png')"
const eyeOpened = "url('/src/icons/view.png')";

// ....anonymous function hide.....
   function hideOne(){
          if (passContainer1.type === 'password'){
               passContainer1.type = 'text';  
               eye[0].style.backgroundImage = eyeClosed; 
          } else{
            passContainer1.type = 'password'; 
               eye[0].style.backgroundImage = eyeOpened; 
          }
   }

   function hideTwo(){
    if (passContainer2.type === 'password'){
         passContainer2.type = 'text';  
         eye[1].style.backgroundImage =eyeClosed; 
    } else{
      passContainer2.type = 'password'; 
         eye[1].style.backgroundImage =eyeOpened; 
    }
}