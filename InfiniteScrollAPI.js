// Script criado por: Trevias Xk
// https://github.com/treviasxk

var jsonUrl = "/API.php?index=", jsonIndex = 0; jsonRunning = true, jsonBuffering = 100;

showContentJson();
window.addEventListener("scroll", () => {
    showContentJson();
});

async function showContentJson(){
    if(jsonRunning){
        var scrollValue = this.scrollY + document.documentElement.clientHeight;
        var scrolMaximum = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        if(scrolMaximum <= scrollValue + jsonBuffering){
            await fetch(jsonUrl + jsonIndex)
            .then(T => T.json())
            .then(A => {
                if(A.users.length){
                    for(i = 0; i < A.users.length; ++i){
                        document.querySelector("blockquote").innerHTML += A.users[i].name + ", " + A.users[i].age + " - " + A.users[i].nationality  + "<hr/><br/>";
                    }
                }else{
                    loading.style.display = "none";
                    jsonRunning = false;
                }
                ++jsonIndex;
            });
            showContentJson();
        }
    }
}