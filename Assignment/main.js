function registration() {

	var first_name = document.forms["regForm"]["first_name"];               
	var last_name = document.forms["regForm"]["last_name"];               
    var email = document.forms["regForm"]["email"];    
    var phone = document.forms["regForm"]["phone_no"];  
    var password = document.forms["regForm"]["password"];  
    var rePassword = document.forms["regForm"]["re-password"];  
    var dob = document.forms["regForm"]["dob"];  

	if (first_name.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        first_name.focus(); 
        return false; 
    } 
	
	if (last_name.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        last_name.focus(); 
        return false; 
    } 
    
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
	} 
	
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
	
	if (rePassword.value == "")                        
    { 
        window.alert("Re-enter password can't be left empty"); 
        rePassword.focus(); 
        return false; 
    } 
	
	if (dob.value == "")                        
    { 
        window.alert("Kindly tell us your age. Don't be shy man"); 
        rePassword.focus(); 
        return false; 
    } 
    

}

var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('re-password').value) {
    document.getElementById('pass_warning').style.color = 'green';
    document.getElementById('pass_warning').innerHTML = 'Woohoo!!!  Matched';
  } else {
    document.getElementById('pass_warning').style.color = 'red';
    document.getElementById('pass_warning').innerHTML = 'OOhhh noo!! seems to be out of track';
  }
}

var user_id = function () {
    if(document.regForm.username.value=='' && document.regForm.first_name.value!='' && document.regForm.last_name.value!='') {
        var username = document.regForm.first_name.value.substr(0,1) +document.regForm.last_name.value.substr(0,49);
        username = username.replace(/\s+/g, '');
        username = username.replace(/\'+/g, '');
        username = username.replace(/-+/g, '');
        username = username.toLowerCase();
        document.regForm.username.value = username;
    }
}