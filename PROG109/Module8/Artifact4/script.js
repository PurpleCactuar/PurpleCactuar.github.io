function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid

//2) create variables to read the values from html text inputs

//3) do the validation

//4) send error messages 

//5) return the status of each field

}

var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
		"Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req");
 frmvalidator.addValidation("LastName","maxlen=20");

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");

 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");

 frmvalidator.addValidation("Address","maxlen=50");
 frmvalidator.addValidation("Country","dontselect=000");
        
  function DoCustomValidation()
    {
        var frm = document.forms["myform"];
        if(frm.FirstName.value == 'No')
        {
            sfm_show_error_msg("No! Avada Kedavra!!");
            return false;
        }
        else
        {
            return true;
        }
    }

