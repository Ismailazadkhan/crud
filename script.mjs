function onformsubmit(event) {
    event.preventDefault();

    const productCode = document.getElementById('productcode').value;
    const productName = document.getElementById('product').value;
    const productQuantity = document.getElementById('qty').value;
    const productPrice = document.getElementById('perPrice').value;

   
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.textContent = productCode;
    cell2.textContent = productName;
    cell3.textContent = productQuantity;
    cell4.textContent = productPrice;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';

    cell5.appendChild(editButton);
    cell5.appendChild(deleteButton);
    cell5.appendChild(cancelButton);

    document.getElementById('productcode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}
