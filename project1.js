/**
 * @author Kyle R
 */

function collapseContent(switchHiddenDivs, showHideFields) 
{
	var swicthHide = document.getElementById(switchHiddenDivs);
	var fields = document.getElementById(showHideFields);
	if(swicthHide.style.display == "block") 
	{
    	swicthHide.style.display = "none";
		fields.innerHTML = "Show";
  	}
	else 
	{
		swicthHide.style.display = "block";
		fields.innerHTML = "Hide";
	}
} 
function curtian()
{
	$("#nameContent").slideUp();
}
function validateForm()
{
	var firstNameValue = document.forms['nameForm']['firstname'].value;
	var lastNameValue = document.forms['nameForm']['lastname'].value;
	var companyNameValue = document.forms['companyForm']['company'].value;
	var jobNameValue = document.forms['jobNameForm']['jobName'].value;
	var emailValue = document.forms['emailForm']['email'].value;
	var atPos = emailValue.indexOf("@");
	var dotPos = emailValue.lastIndexOf(".");
	
	
	if ((firstNameValue != null || firstNameValue !="") && 
			(lastNameValue != null || lastNameValue != ""))
	{
		$("#nameContent").slideUp();
		return true;
	}
	else if ((firstNameValue == null || firstNameValue =="") ||
			(lastNameValue == null || lastNameValue == ""))
	{
		alert("Please fill out your First and Last name");
		return false;
	}
	/*if (lastNameValue == null || lastNameValue == "")
	{
		alert("Please fill out your Last name");
		return false;
	}*/
	if (companyNameValue != null || companyNameValue != "")
	{
		$("#companyContent").slideUp();
	}
	if (jobNameValue != null || jobNameValue !="")
	{
		$("#jobContent").slideUp()
	}
	if (atPos<1 || dotPos<atPos+2 || dotPos+2>=emailValue.length)
  	{
  		alert("Not a valid e-mail address");
 		 return false;
  	}	
  	
}


