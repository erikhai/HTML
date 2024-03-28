document.getElementById("resumeLink").addEventListener("click", function(event) {
    // Prevent the default action (opening the link)
    event.preventDefault();
    
    // Replace '#' with the actual URL of your resume file
    var resumeUrl = "assets/final_resume.docx";
    
    // Create a temporary link element
    var link = document.createElement("a");
    
    // Set the href attribute to the URL of your resume file
    link.href = resumeUrl;
    
    // Set the download attribute to force download the file
    link.download = "Erik_Hai_resume.docx";
    
    // Append the link to the document body
    document.body.appendChild(link);
    
    // Trigger the click event on the link
    link.click();
    
    // Remove the temporary link from the document body
    document.body.removeChild(link);
  });
  