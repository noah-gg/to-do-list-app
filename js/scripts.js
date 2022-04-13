function newItem() {

    //  user add new item to list of item
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    //  user cross out an item from list of item when item clicked
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //  user delete an item from list of item when x button clicked
    let crossOutButton = $('<deleteButton></deleteButton>');
    crossOutButton.append(document.createTextNode(' X '));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass('delete');
    }
    
    //  user change the order of items from list of item
    $('#list').sortable();
}

