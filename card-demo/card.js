function copyProjectID(){
    var copyID = document.getElementById("projectID").innerHTML;
    console.log(copyID)
    navigator.clipboard.writeText(copyID);
    alert("Project No. is copied to clipboard!")
}