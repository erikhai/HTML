document.getElementById("resumeLink").addEventListener("click", function(event) {
  event.preventDefault();

  var resumeUrl = "assets/Erik_Hai_resume.pdf"; 


  var link = document.createElement("a");

 
  link.href = resumeUrl;

  link.target = "_blank";


  link.click();
});
