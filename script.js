  var selectedrow = null
  function onformsubmit(e){
    event.preventDefault();
    var formdata = readFormdata();
    if(selectedrow === null){
      insertNewrecord(formdata);
    }
      else {
        updaterecord(formdata);        
      }
        resetform();
      
  }

  function readFormdata(){
      var formData = {};
      formData["productcode"] = document.getElementById("productcode").value;
      formData["product"] = document.getElementById("product").value;
      formData["qty"] = document.getElementById("qty").value;
      formData["perPrice"] = document.getElementById("perPrice").value;
      return formdata;
}

function insertNewrecord(data){
      var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
      var newrow = table.insertRow(table.length);
      var cell1 = newrow.insertCell(0);
          cell1.innerHTML = data.productcode;
       var cell2 = newrow.insertCell(1);
           cell2.innerHTML = data.product;
       var cell3 = newrow.insertCell(2);
           cell3.innerHTML = data.qty;
       var cell4 = newrow.insertCell(3);
            cell4.innerHTML = data.perPrice;
       var cell5 = newrow.insertCell(4);
            cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`  
}
  
function onEdit(td){
  selectedrow = td.parentElement.parentElement;
document.getElementById("productcode").value = selectedrow.cells[0].innerHTML;
document.getElementById("product").value = selectedrow.cells[1].innerHTML;
document.getElementById("qty").value = selectedrow.cells[2].innerHTML;
document.getElementById("perPrice").value = selectedrow.cells[3].innerHTML;

}

function updaterecord(formData){
  selectedrow.cells[0].innerHTML = formData.productcode;
  selectedrow.cells[1].innerHTML = formData.product;
  selectedrow.cells[2].innerHTML = formData.qty;
  selectedrow.cells[3].innerHTML = formData.perPrice;

}

function onDelete(td){
if(confirm("Are you sure you want to delete this record?")){
  row = td.parentElement.parentElement;
  document.getElementById("storelist").deleteRow(row.rowIndex);
}
resetform();

}

function resetform(){
  document.getElementById("productcode").value = " ";
  document.getElementById("product").value = " ";
  document.getElementById("qty").value = " ";
  document.getElementById("perPrice").value = " ";
  
}
