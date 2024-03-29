document.getElementById("resumeLink").addEventListener("click", function(event) {
    
    event.preventDefault();
    
  
    var resumeUrl = "assets/final_resume.docx";
    
 
    var link = document.createElement("a");
    

    link.href = resumeUrl;
    

    link.download = "Erik_Hai_resume.docx";
    

    document.body.appendChild(link);
    

    link.click();
  
    document.body.removeChild(link);
  });
  