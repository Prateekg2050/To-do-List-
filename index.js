    function getandupdate(){
        console.log("updating list....");
        des = document.getElementById('description').value;
        tit = document.getElementById('title').value;
        if(localStorage.getItem("itemsjson")==null){
            itemsjsonarray = [];
            itemsjsonarray.push([tit, des]);
            localStorage.setItem('itemsjson', JSON.stringify(itemsjsonarray));
        }
        else{
             itemsjsonstr = localStorage.getItem('itemsjson')
             itemsjsonarray = JSON.parse(itemsjsonstr);
             itemsjsonarray.push([tit, des]);
             localStorage.setItem('itemsjson', JSON.stringify(itemsjsonarray));
        }
         update();
    }
   function update(){
        if(localStorage.getItem("itemsjson") == null){
            itemsjsonarray = [];
            localStorage.setItem('itemsjson', JSON.stringify(itemsjsonarray))
        }
         else{
             itemsjsonstr = localStorage.getItem('itemsjson');
             itemsjsonarray = JSON.parse(itemsjsonstr);
         }
         //populate the table with items in itemsjson
         
         let tablebody = document.getElementById("tablebody");
         let str = "";
         itemsjsonarray.forEach((element, index) => {
             str += `
             <tr>
             <th scope="row">${index+1}</th>
             <td>${element[0]}</td>
             <td>${element[1]}</td>
             <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
           </tr>`;
         });
           tablebody.innerHTML = str;           
    }  
    add = document.getElementById("add");
    add.addEventListener("click", getandupdate);
    update();  
function deleted(itemindex){
        console.log("Deleting item",itemindex);
    itemsjsonstr = localStorage.getItem('itemsjson')
    itemsjsonarray = JSON.parse(itemsjsonstr);
    itemsjsonarray.splice(itemindex, 1);
    localStorage.setItem('itemsjson', JSON.stringify(itemsjsonarray));
    update();
   }
function clearstorage(){
        if(confirm("Do you really want to Clear list?")){
        localStorage.clear();
        update()}
    }
    

