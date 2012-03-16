/**
 * @author Kyle R
 */
var firstNameBool = false;
	var lastNameBool = false;
	var companyBool = false;
	var emailBool = false;
	var jobNameBool = false;
function collapseContent() 
{
	var firstLastNameHeader = document.getElementById('firstLastNameHeader');
	var companyHeader = document.getElementById('companyHeader');
	var emailHeader = document.getElementById('emailHeader');
	var jobNameHeader = document.getElementById('jobHeader');
	if(firstNameBool == true) 
	{
		firstLastNameHeader.innerHTML = "Done!";
  	}
	if (companyBool == true) 
	{
		companyHeader.innerHTML = "Done!";
	}
	if(emailBool == true) 
	{
		emailHeader.innerHTML = "Done!";
  	}
	if (jobNameBool == true) 
	{
		jobNameHeader.innerHTML = "Done!";
	}
} 
function curtian()
{
	if(firstNameBool == true)
	{
		$("#nameContent").slideUp();
		collapseContent();
	}
	if(companyBool == true)
	{
		$("#companyContent").slideUp();
		collapseContent();
	}
	if(jobNameBool == true)
	{
		$("#jobContent").slideUp();
		collapseContent();
	}
	if (emailBool == true)
	{
		$("#emailContent").slideUp();
		collapseContent();
	}
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
	
	
	
	if ((firstNameValue == null || firstNameValue =="") ||
			(lastNameValue == null || lastNameValue == ""))
	{
		alert("Please fill out your First and Last name");
		return false;
	}
	if ((firstNameValue !== null || firstNameValue !=="") && 
			(lastNameValue !== null || lastNameValue !== ""))
	{
		firstNameBool = true;
		curtian();
	}
	if(companyNameValue == null || companyNameValue == "")
	{
		alert("Please enter a Company Name");
		return false;
	}
	if (companyNameValue != null || companyNameValue != "")
	{
		companyBool = true;
		curtian();
	}
	if(jobNameValue == null || jobNameValue == "")
	{
		alert("Please enter a Job Name");
		return false;
	}
	if (jobNameValue != null || jobNameValue !="")
	{
		jobNameBool = true;
		curtian();
	}
	
	if (atPos<1 || dotPos<atPos+2 || dotPos+2>=emailValue.length)
  	{
  		alert("Not a valid e-mail address");
 		 return false;
  	}
  	else
  	{
  		emailBool = true;
  		curtian();
  	}
  	
}


