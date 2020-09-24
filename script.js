let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let inpNewTask=$('#inpNewTask')
let btnCleanup=$('#btnCleanup')
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

function clearDone(){
	$('#ulTasks .done').remove()
}

btnAdd.click(()=>{
	addItem()	
})

//btnAdd.click(addItem)

btnReset.click(()=>inpNewTask.val(''))

btnCleanup.click(clearDone)
