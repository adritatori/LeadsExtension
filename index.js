let myLeads = []

let inputEl = document.getElementById("input-el")
let inputbtn = document.getElementById("input-btn")

const ulel = document.getElementById("ul-el")

// localStorage.setItem("leads","value")
// console.log(localStorage.getItem("leads"))
//localStorage.clear()

  let leadsFromLocalStorage = []

  leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))

  for(let i = 0; i<leadsFromLocalStorage.length; i++){
    listItems +=`
    <li><a href='#' target='_blank'>${myLeads[i]}</a></li>`
  
  }

inputbtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    console.log(myLeads)
    console.log("Button clicked from addEvenListener")
  
    renderLeads()
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))

    

})

function renderLeads()
{

  let listItems = ""
  for(let i = 0; i<myLeads.length; i++){
    listItems +=`
    <li><a href='#' target='_blank'>${myLeads[i]}</a></li>`
    console.log(listItems)
  
      //Another mathod!
  
      //Create element
      //set text content
      // append to ul
      // const li = document.createElement("li")
  
      // li.textContent = myLeads[i]
      // ulel.append(li)
  
  }
  
  ulel.innerHTML = listItems



}


