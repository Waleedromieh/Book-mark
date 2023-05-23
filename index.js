var siteNameInput = document.getElementById("SiteName");
var siteURLInput = document.getElementById("SiteURL");
var submit = document.getElementById("submit");
var siteList = [];


if (localStorage.getItem("list") == null) {

    var siteList = []

} else {
    siteList = JSON.parse(localStorage.getItem("list"))
    display()
}

submit.addEventListener("click",function(){
    var site = {
        name: siteNameInput.value,
        url: siteURLInput.value,
    }
    siteList.push(site)
    localStorage.setItem("list", JSON.stringify(siteList))
    display()
})

function display(){
    var temp="";
    for( var i =0; i<siteList.length; i++){
        temp+=`<div id="demo" class="col-11 m-auto">
        <div class=" p-5 mt-4 mb-2">
            <h2 class=" w-25 d-inline-block">`+siteList[i].name+`</h2>
            <div class="w-25 d-inline-block">
                <a id="Visit" class="btn btn-primary"  target="_blank"  href="`+siteList[i].url+`">Visit</a>
                <a id="delete" onclick="deleteSite()" class="btn del text-white">Delete</a>
            </div>
        </div>
        </div>`
    }
    document.getElementById("bot").innerHTML=temp
}

function deleteSite(x) {
    siteList.splice(x, 1)
    localStorage.setItem("list", JSON.stringify(siteList))
    display()
 
}


