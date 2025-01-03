const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');

// Add ToDo
toDoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (toDoInput.value.trim() === "") return;

  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo');

  const newToDo = document.createElement('li');
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add('todo-item');
  toDoDiv.appendChild(newToDo);

  const checkBtn = document.createElement('button');
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkBtn.classList.add('check-btn');
  toDoDiv.appendChild(checkBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add('delete-btn');
  toDoDiv.appendChild(deleteBtn);

  toDoList.appendChild(toDoDiv);
  toDoInput.value = '';

  checkBtn.addEventListener('click', () => toDoDiv.classList.toggle('completed'));
  deleteBtn.addEventListener('click', () => toDoDiv.remove());
});

// Theme Handlers
const themeSelectors = document.querySelectorAll('.theme-selector');

themeSelectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    const theme = selector.classList[1].split('-')[0];
    document.body.style.backgroundColor = theme === 'pink' ? '#FFCCE1' : theme === 'yellow' ? '#FFF5D7' : '#F2F9FF';
  });
});

// Time and Date
const dateTime = document.getElementById('datetime');
function updateTime() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  dateTime.innerText = now.toLocaleDateString('en-US', options);
}
setInterval(updateTime, 1000);
updateTime();
