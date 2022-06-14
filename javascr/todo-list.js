var openList = document.querySelector('.shop');
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyTask = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var doneTasks = document.querySelector('.done-tasks');
var buttonTask = document.querySelector('.add-form-button');
var formInput = document.querySelector('.add-form-input');


for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
};

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
})
function toggleEmptyListMessage() {
    if (items.length === 0) {
        emptyTask.classList.remove('hidden');
    } else {
        emptyTask.classList.add('hidden');
    }
};
function checkTaskDone() {
    for (var i = 0; i < items.length; i++) {
        if (!items[i].classList.contains('item-done')) {
            doneTasks.classList.add('hidden');
            return;
        }
    }
    doneTasks.classList.remove('hidden');
}

//зачеркивание
function addCheckHandler(item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            item.classList.add('item-done');
        } else {
            item.classList.remove('item-done');
        }
        checkTaskDone();
    });
    var trasher = item.querySelector('.bi-trash-fill');
    trasher.addEventListener('click', function () {
        item.remove();

        toggleEmptyListMessage();
        checkTaskDone();
    })
};

function addNewItem(text) {
    
    var listItem = document.createElement('li');
    listItem.classList.add('todo-list-item');
    list.appendChild(listItem);
    var label = document.createElement('label');
    listItem.appendChild(label);
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('todo-list-input');
    label.appendChild(input);
    var span = document.createElement('span');
    span.innerText = text;
    label.appendChild(span);
    var i = document.createElement('i');
    i.classList.add('bi');
    i.classList.add('bi-trash-fill');
    i.classList.add('float-right');
console.log(i)
    label.appendChild(i);
    toggleEmptyListMessage();
    checkTaskDone();
    addCheckHandler(listItem);
}

buttonTask.addEventListener('click', function() {
    addNewItem(formInput.value);
    formInput.value = '';
})