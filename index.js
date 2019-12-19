const data = [1, 2, 3, 4, 5];
let counter = 0;
const getData = () => {
  return { name: "test", email: "test@test.com" };
};
const getUserTemplate = () => {
  const user = getData();
  const template = `<div class="card">
        <div class="username">${user.name}</div>
        <div class="email">${user.email}</div>
      </div>`;

  return template;
};
const prepareDom = () => {
  document.body.innerHTML = `<div id="head">APP</div>
<div id="action"></div>
<hr>
<div id="container">
</div>`;
};
const setButtonText = () => {
  document.getElementById("action").innerHTML = `
  <button id="actionButton">ADD ITEM</button>`;
};
const onAddButtonClick = () => {
  document.getElementById("container").innerHTML =
    document.getElementById("container").innerHTML + getUserTemplate();
};

prepareDom();
setButtonText();
document.getElementById("actionButton").onclick = onAddButtonClick;
