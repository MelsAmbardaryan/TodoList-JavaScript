window.addEventListener("DOMContentLoaded",()=>{
const addBtn = document.querySelector("#add-btn");
const todoText = document.querySelector("#todo-text");
const list = document.querySelector("#list");
const radios = document.querySelectorAll("input[name ='filter']")


const arrTODO= [
  {
    text : "do workout",
    iscomplete:false
  },
  {
    text: "read o bouk",
    iscomplete:false
  },
];

creatTodo(arrTODO)


function creatTodo(todosArr){
  list.innerHTML = "";
  todosArr.forEach(({text})=>{
    list.innerHTML+=`
       <div class="item">
       <p>${text}</p>
       <div class="tools">
       <button class="del-button">X</button>
       <button class="complete-btn">Cancel</button>
       </div>
       </div>
    `
  })
  complete(document.querySelectorAll(".complete-btn"))
  delButton(document.querySelectorAll(".del-button"))
  
}
addBtn.addEventListener("click",(e)=>{
let value = todoText.value.trim()
if(value){
  arrTODO.push({
    text : value,
    iscomplete:false
  })
  creatTodo(arrTODO)
}else{
  alert("Please fill the text")
}
todoText.value =""
})

function delButton(removeBtn){
  removeBtn.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
      arrTODO.splice(index,1)
      creatTodo(arrTODO)
    })
  })
};
function complete(completeBtn){
  completeBtn.forEach((btn,index)=>{
    btn.addEventListener("click",(e)=>{
      if(!e.target.matches(".done")){
         e.target.classList.add("done")
         e.target.innerText = "Complete"
         arrTODO.forEach((arr,arrIndex)=>{
         if(index === arrIndex){
          arr.iscomplete = true
         }
         })
      }else{
        e.target.classList.remove("done")
        e.target.innerText = "Cancel"
      }
    })
  })

}
radios.forEach(radio=>{
  radio.addEventListener("change", (e)=>{
 if(e.target.value ==="active"){
   let activFilterTodo = arrTODO.filter(item => !item.iscomplete )
   creatTodo(activFilterTodo)
}else if(e.target.value ==="completed"){
  let completFilterTodo = arrTODO.filter(item => item.iscomplete )
  creatTodo(completFilterTodo)
}else{
  creatTodo(arrTODO)
}
  })
})


})







