var int = document.getElementById("int1");
var int2=document.getElementById("int2")
var int3=document.getElementById("int3")
var int5=document.getElementById("int5")
var int6=document.getElementById("int6")
var row=document.getElementById("row")
function create(event) {
        event.preventDefault();

    const listitem = document.createElement("td");
    listitem.textContent = int.value
    row.append(listitem)

    const listitem2 = document.createElement("td");
    listitem2.textContent = int2.value;
    row.append(listitem2);

    const listitem3 = document.createElement("td");
    listitem3.textContent = int3.value;
    row.append(listitem3);

    const listitem4 = document.createElement("td");
    listitem4.textContent = int5.value;
    row.append(listitem4);

    const listitem5 = document.createElement("td");
    listitem5.textContent = int6.value;
    row.append(listitem5);

    const listitem6=document.createElement("td")
    listitem6.innerHTML="<button onclick=del(event)>Delete</button>"
    row.append(listitem6)
}

function del(event){
    row.remove()
}





