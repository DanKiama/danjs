function validateForm(){
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
   // console.log(username, "username");
   if( username =='' || password =='' ){
        alert("fill in all the fields ");
        return false;
   }
   else{
       return true;  
   }
   
}

function submitForm(){

    if (validateForm()){
        document.getElementById("logInForm").submit();
        window.location.replace('home.html')
    }
    
   
}

  


