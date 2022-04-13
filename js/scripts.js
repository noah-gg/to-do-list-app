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

}

