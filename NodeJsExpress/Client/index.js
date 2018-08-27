let $ = jQuery.noConflict();

let showNewContent = (show) => {    
    if (!show) {
        $('#new').hide();
        $('#view').show();
    }
    else {
        $('#btn_new').attr('disabled', 'disabled');
        $('#new').show();
        $('#view').hide();
        $('#new_name').val('').focus().off('keyup').on('keyup', onNewTextChange);
    }
};

let onNewTextChange = (evt) => {
    let elem = evt.target;
    if (elem.value)
        $('#btn_new').removeAttr('disabled');
    else
        $('#btn_new').attr('disabled', 'disabled');
};

let onResult = (result) => {
    let list = $(result.result).html();
    $('#records').html(list);
    showNewContent(false);
};

let sendAjax = (url, data) => {
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: (result) => { 
            console.log(result);
            onResult(result);
        }
    });
};

let onNewHandler = (evt) => {
    console.log('New');
    let name = $('#new_name').val();
    console.log('name='+name);
    sendAjax("/new", {name:name});
};

let onAddHandler = (evt) => {
    console.log('Add');
    showNewContent(true);
};

let onDeleteHandler = (evt) => {
    console.log('Delete');
    let checkedIds = $('#records').find(':checked').toArray().map((el)=>el.id.split('_')[0]);
    sendAjax("/delete", checkedIds);
};

let init = () => {
    console.log('Ready');
    $('#btn_add').click(onAddHandler);
    $('#btn_delete').click(onDeleteHandler);
    $('#btn_new').click(onNewHandler);
};

$(document).ready(() => init());