let eye =  document.querySelector('.ico-pass');
let passContainer = document.querySelector('#password');

// ....anonymous function hide.....
   function hide(){
          if (passContainer.type === 'password'){
               passContainer.type = 'text';  
               eye.style.backgroundImage = "url('/src/icons/hidden.png')"; 
          } else{
            passContainer.type = 'password'; 
               eye.style.backgroundImage = "url('/src/icons/view.png')"; 
          }
   }

    
    