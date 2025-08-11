let myTasksList = [];

let form = document.querySelector('form');

form.onsubmit = function getDate(e) {
    e.preventDefault();

    let text = document.querySelector('#task').value;
    let location = document.querySelector('#location').value;

    let newDate = new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    let myObject = {
        taskText: text,
        taskLocation: location,
        taskTime: newDate
    };

    myTasksList.push(myObject);
    localStorage.setItem("myTasksList", JSON.stringify(myTasksList));
    displayTasks();
    form.reset();
}

function clearTask(index) {
    myTasksList.splice(index, 1);
    localStorage.setItem("myTasksList", JSON.stringify(myTasksList));
    displayTasks();
    location.reload();
}

let myDate = new Date();

let taskContainer = document.querySelector('.task-container');
function displayTasks() {
    taskContainer.innerHTML = ``;
    for (let index = 0; index < myTasksList.length; index++) {
        taskContainer.innerHTML += `
            <div class="card">
                <div class="card-head"><span class="taskNumber">${index + 1}</span> Task</div>
                <div class="card-body">${myTasksList[index].taskText}</div>
                <div class="card-location">- Location: <span style="margin-left:10px; color: yellow">${myTasksList[index].taskLocation}</span></div>
                <div class="card-time">- Time:<span style="margin-left:10px; color: yellow">${myTasksList[index].taskTime}</span></div>
                <div class="card-action">
                    <button onclick="clearTask(${index})">Clear Task</button>
                </div>
            </div>
        `;
    }
}

// display current time

let currentTime = document.querySelector('.current-time');

function currentDate() {
    let current = new Date();
    let formated = current.toLocaleString('en-US', {
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit'
    });
    
    currentTime.innerText = `${formated}`;

}

setInterval(currentDate, 1000);

window.onload = function () {
    myTasksList = JSON.parse(localStorage.getItem("myTasksList")) || [];
    displayTasks();
    if (myTasksList.length == 0) {
        taskContainer.innerHTML = `
            <p class="emptyTasks" style="border-radius: 10px; display: flex; align-items: center; justify-content: center; gap: 10px; width: 95%; min-height: 300px; border: 1px solid #528852; margin: auto; color: #528852; font-size: 20px; margin-bottom: 100px;">
                <span class="material-symbols-outlined" style="font-size: 46px;">
                    chat_error
                </span>
                No Tasks present
            </p>
        `;
    }

}