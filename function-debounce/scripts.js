const dataList = document.querySelector(".user-list");

const filtersUsers = async (name) =>
  fetch(
    `http://jsonplaceholder.typicode.com/users?name_like=${name}`
  ).then((res) => res.json());

function debounceEvent(fn, wait = 500, time) {
  // pode ser refatorado para arrow functions, alterando this e ..spread
  return function () {
    clearTimeout(time);

    time = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

const setUsers = (users) => {
  let options = "";

  users.forEach((user) => {
    options += `<option onclick="handleOption(event)"> ${user.name} </option>`;
  });
  dataList.innerHTML = options;
  dataList.style.display = "block";
};

function handleKeyUp({ target }) {
  if (target.value == "") {
    dataList.style.display = "none";
    return;
  }
  filtersUsers(target.value).then((users) => {
    setUsers(users);
  });
}

function handleOption({ target }) {
  search.value = target.textContent;
}
const search = document.querySelector("input");
addEventListener("keyup", debounceEvent(handleKeyUp));
