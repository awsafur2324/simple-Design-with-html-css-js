const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mal = document.getElementById("mal");
const div = document.getElementById("div");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const inpError = document.getElementById("inpError");

let action = null;
let foundError = false;

add.addEventListener("click", (e) => {
  document.getElementById("error").innerText = "";
  action = "add";
  e.preventDefault();
  add.classList.add("active");
  sub.classList.remove("active");
  mal.classList.remove("active");
  div.classList.remove("active");
});
sub.addEventListener("click", (e) => {
  document.getElementById("error").innerText = "";
  action = "sub";
  e.preventDefault();
  add.classList.remove("active");
  sub.classList.add("active");
  mal.classList.remove("active");
  div.classList.remove("active");
});
mal.addEventListener("click", (e) => {
  document.getElementById("error").innerText = "";
  action = "mal";
  e.preventDefault();
  add.classList.remove("active");
  sub.classList.remove("active");
  mal.classList.add("active");
  div.classList.remove("active");
});
div.addEventListener("click", (e) => {
  document.getElementById("error").innerText = "";
  action = "div";
  e.preventDefault();
  add.classList.remove("active");
  sub.classList.remove("active");
  mal.classList.remove("active");
  div.classList.add("active");
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const result = document.getElementById("result");
  if (!foundError) {
    if (action == null) {
      document.getElementById("error").innerText = "*Please select a operation";
    } else {
      if (action == "add") {
        result.value = Number(inp1.value) + Number(inp2.value);
      } else if (action == "sub") {
        result.value = Number(inp1.value) - Number(inp2.value);
      } else if (action == "mal") {
        result.value = Number(inp1.value) * Number(inp2.value);
      } else if (action == "div") {
        result.value = Number(inp1.value) / Number(inp2.value);
      }
    }
  }
});

//inp error handel

pattern = /^\d+$/;

inp1.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  if (!pattern.test(e.target.value)) {
    inpError.innerText = "Please Enter numbers";
    foundError = true;
  } else {
    foundError = false;
    inpError.innerText = "";
  }
});

inp2.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  if (!pattern.test(e.target.value)) {
    inpError.innerText = "Please Enter numbers";
    foundError = true;
  } else {
    foundError = false;
    inpError.innerText = "";
  }
});
