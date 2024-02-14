var selectedrow = null
function onFormSubmit(){
  event.preventDefault();
  var formData = readFormData();
  if(selectedrow === null){
    insertNewRecord(formData);
  }

  else{
    
  }
  
}

function readformdata(){
  var formdata = {};
  formdata["productcode"] = document.getElementById("productcode").value;
  formdata["product"] = document.getElementById("product").value;
  formdata["qty"] = document.getElementById("qty").value;
  formdata["perPrice"] = document.getElementById("perPrice").value;
  return formdata;
}

function insertNewrecord(data){
var table = document.getElementById("productlist").getElementsByTagName('tbody')[0]
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
      cell5.innerHTML = "<button>Edit</button><button>Delete</button>";


  
}
