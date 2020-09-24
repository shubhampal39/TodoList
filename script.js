let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let inpNewTask=$('#inpNewTask')
let btnCleanup=$('#btnCleanup')
let btnSort=$('#btnSort')

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
     toggleInputButtons()
}


inpNewTask.keypress((e)=>{
	if(e.which==13) addItem()
})

function clearDone(){
	$('#ulTasks .done').remove()
	toggleInputButtons()
}

function toggleInputButtons(){

		btnReset.prop('disabled',inpNewTask.val()=='')
		btnAdd.prop('disabled',inpNewTask.val()=='')
		btnSort.prop('disabled',ulTasks.children().length<1)
		btnCleanup.prop('disabled',ulTasks.children().length<1)


	
}


function sortTasks(){
	$('#ulTasks .done').appendTo(ulTasks)
}

// inpNewTask.on('input',()=>{
// 	// console.log(inpNewTask.val())
// 	toggleInputButtons()

// })

//obove functioncall as follws

inpNewTask.on('input',toggleInputButtons)


btnAdd.click(()=>{
	addItem()	
})

//btnAdd.click(addItem)

btnReset.click(()=>{
inpNewTask.val('')
toggleInputButtons()
})

btnCleanup.click(clearDone)
btnSort.click(sortTasks)
