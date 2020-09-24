let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inpNewTask=$('#inpNewTask')

function addItem()
{
	 let listItem=$('<li>',{
     	'class':'list-group-item',
     	 text:inpNewTask.val()
     })
     
     // listItem.click((event)=>{
     // 	// console.log(listItem)
     // 	$(event.target).toggleClass('disabled')
     // })

      listItem.click(()=>{
          	listItem.toggleClass('done')
     })

     ulTasks.append(listItem)
     inpNewTask.val('')  //it will clear textbox
}


inpNewTask.keypress((e)=>{
	if(e.which==13) addItem()
})

btnAdd.click(()=>{
	addItem()	
})

//btnAdd.click(addItem)

btnClear.click(()=>inpNewTask.val(''))