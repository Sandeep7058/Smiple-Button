var san = document.querySelector("h5")
var AddFriend = document.querySelector("#ram")

var AddRemove = document.querySelector("#san")

AddFriend.addEventListener("click",function(){
    san.innerHTML = "Friends"
    san.style.color = "green"
})

AddRemove.addEventListener("click",function(){
    san.innerHTML = "Stanger"
    san.style.color = "red"
})