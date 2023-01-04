
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let myLeads = []

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
})
function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>"

    }
    ulEl.innerHTML = listItems
}
