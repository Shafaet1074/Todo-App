let TodoItems=[
    {
        Item:'Go to University',
        dueDate:'2023-8-02'
    },
    {
        Item:'Buy Book', 
        dueDate:'2023-9-03'
    }
];

displayItems();

function addTodo() {

  let inputElement = document.querySelector('#todo-input');
  let todoItem=inputElement.value;

  let dateElement = document.querySelector('#todo-date');
  let todoDate=dateElement.value;

  TodoItems.push({Item:todoItem,dueDate:todoDate});
  inputElement.value=' ';
  dateElement.value=' ';
  
  displayItems();
  
}

function displayItems(){
    let containerElement =document.querySelector('.todo-container');
    let newHtml= '';
    
for(let i=0; i < TodoItems.length; i++){
    let item=TodoItems[i].Item; 
    let dueDate=TodoItems[i].dueDate;
    newHtml += `
    
    <span> ${item}</span>
    <span> ${dueDate}</span>
    <button onclick="TodoItems.splice(${i},1);
    displayItems();" class="btn-delete">Delete</button>
    
    ` ;
}
containerElement.innerHTML=newHtml;

}