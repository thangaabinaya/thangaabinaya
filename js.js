//form 1

function vfun(){
    var cname=document.forms["myform"]["cname"].value;
    var email1=document.forms["myform"]["email1"].value;
    var dob=document.forms["myform"]["dob"].value;
    
if(cname==null || cname=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the candidate name";
         return false;
}
if(email1==null || email1==""){
  document.getElementById("errorBox").innerHTML =
   "enter the email";
 return false;
}

if(dob==null || dob==""){
  
  document.getElementById("errorBox").innerHTML =
   "enter the dob";
 return false;
}


if (cname!= '' && email1 != '' && dob != ''){
 alert("Login successfully");
                 }

}



//form 2

function vfun1(){
    var fname=document.forms["myform2"]["fname"].value;
    var quali=document.forms["myform2"]["quali"].value;
    var uname1=document.forms["myform2"]["uname1"].value;
    var contact=document.forms["myform2"]["contact"].value;
    var age=document.forms["myform2"]["age"].value;
    if(fname==null || fname=="" ){
      document.getElementById("errorBox").innerHTML =
       "enter the full name";
     return false;
  }
  if(quali==null || quali==""){

    document.getElementById("errorBox").innerHTML =
     "enter the qualification";
   return false;
}

if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}


         
        if(contact==null || contact=="" ){
            document.getElementById("errorBox").innerHTML =
             "enter the contact number";
           return false;
        }
        
        if(age==null || age=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the age";
         return false;
      }

if (fname != '' && uname1 != '' && quali != ''  &&  contact != '' && age!='')

  alert("Register successfull");
          

}
//declearing html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a foto to upload

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

        
    }
});

