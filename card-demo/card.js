let idx = 0; 
const imgs = ["url(https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", 
"url(https://jll-global-gdim-res.cloudinary.com/image/upload/t_test-au-property-detail-web/v1689819925/AUS_CRM/a86f8e7e-406a-408a-abad-96d9c5fc5b3f_ONEBarangaroo005.jpg)", 
"url(https://images.unsplash.com/photo-1575025699516-4735ac10c265?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
"url(winwin.jpeg)"];


function copyProjectID(){
    var copyID = document.getElementById("projectID").innerHTML;
    console.log(copyID);
    navigator.clipboard.writeText(copyID);
    alert("Project No. is copied to clipboard!")
}

function leftSlide(){
    if(idx > 0){
        idx--;
        document.getElementById("bgContainer").style.backgroundImage = imgs[idx];
        console.log(idx);
        document.getElementById("rightButton").style.visibility = "visible";
        if(idx == 0){
            document.getElementById("leftButton").style.visibility = "hidden";
        }
    }
}

function rightSlide(){
    if(idx < imgs.length - 1){
        idx++;
        document.getElementById("bgContainer").style.backgroundImage = imgs[idx];
        console.log(idx);
        document.getElementById("leftButton").style.visibility = "visible";
        if(idx == imgs.length - 1){
            document.getElementById("rightButton").style.visibility = "hidden";
        }
    }
}
