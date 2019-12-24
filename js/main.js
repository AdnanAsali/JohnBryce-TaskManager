var submitButton = document.querySelector('.submit');
var resetButton = document.querySelector('.reset');
var taskContent = document.querySelector('.task-content');
var taskDate = document.querySelector('.task-date');
var taskTime = document.querySelector('.task-time');
var result = document.querySelector('.result');
var array_tasks = [];
var parsed_tasks;
var taskID = 0;

submitButton.addEventListener('click', () => {
    var task_data = {};
    if (taskContent.value !== '' && taskTime.value !== '' && taskDate.value !== '') {

        task_data.taskID = taskID++;
        task_data.taskContent = taskContent.value;
        task_data.taskTime = taskTime.value;
        task_data.taskDate = taskDate.value;

        array_tasks.push(task_data);
        localStorage.setItem("taskData", JSON.stringify(array_tasks));

        parsed_tasks = JSON.parse(localStorage.getItem("taskData"));

        var taskDiv = document.createElement('div');
        taskDiv.classList.add("task-wrapper");

        for (let i = 0; i < parsed_tasks.length; i++) {
            taskDiv.innerHTML =
                `<span class="close glyphicon glyphicon-remove"></span>
            <div class="text-area">${parsed_tasks[i].taskContent}</div>
            <div class="date-time-container">
                <div class="date-area">${parsed_tasks[i].taskDate}</div>
                <div class="time-area">${parsed_tasks[i].taskTime}</div>
            </div>`;
        }

        result.appendChild(taskDiv);
        setTimeout(function() { taskDiv.classList.add('fade'); }, 50);

        var wrappers = document.querySelectorAll('.task-wrapper');
        var wrappers_closers = document.querySelectorAll('.task-wrapper .close');

        for (let i = 0; i < wrappers.length; i++) {
            wrappers[i].addEventListener('mouseover', () => {
                wrappers_closers[i].style.display = "inline-block";
            });

            wrappers[i].addEventListener('mouseout', () => {
                wrappers_closers[i].style.display = "none";
            });

            wrappers_closers[i].addEventListener('click', () => {
                wrappers_closers[i].parentNode.style.display = 'none';
            });
        }
        console.log(array_tasks)
    } else {
        alert('Please Enter Correct Data');
    }
});


resetButton.addEventListener('click', () => {
    taskTime.value = '';
    taskDate.value = '';
    taskContent.value = '';
});

var stored_tasks = JSON.parse(localStorage.getItem("taskData"));
console.log(stored_tasks)
window.onload = () => {
    for (let i = 0; i < stored_tasks.length; i++) {
        var taskDiv = document.createElement('div');
        taskDiv.classList.add("task-wrapper");

        taskDiv.innerHTML =
            `<span class="close glyphicon glyphicon-remove"></span>
    <div class="text-area">${stored_tasks[i].taskContent}</div>
    <div class="date-time-container">
        <div class="date-area">${stored_tasks[i].taskDate}</div>
        <div class="time-area">${stored_tasks[i].taskTime}</div>
    </div>`;

        taskDiv.classList.add("fade");

        console.log(taskDiv)
        result.appendChild(taskDiv)
        setTimeout(function() { taskDiv.classList.add('fade'); }, 50);
    }



    var wrappers = document.querySelectorAll('.task-wrapper');
    var wrappers_closers = document.querySelectorAll('.task-wrapper .close');

    for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].addEventListener('mouseover', () => {
            wrappers_closers[i].style.display = "inline-block";
        });

        wrappers[i].addEventListener('mouseout', () => {
            wrappers_closers[i].style.display = "none";
        });

        wrappers_closers[i].addEventListener('click', () => {
            wrappers_closers[i].parentNode.style.display = 'none';
        });
    }
}