const formModal = document.querySelector(".form-modal");
const formElements = document.querySelectorAll(".form-modal p");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const company = document.querySelector("#company").value;
  const nameValue = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const training = document.querySelector("#training").value;
  const phone = document.querySelector("#tel").value;
  const title = document.querySelector("#title").value;
  const expectations = document.querySelector("#expectations").value;
  const partner = document.querySelector("#partner");
  const employee = document.querySelector("#employee");
  const cancel = document.querySelector("#cancel");
  // first item is title, this is why I started from index 1
  formElements[1].innerText = `Company: ${company}`;
  formElements[2].innerText = `Full Name: ${nameValue}`;
  formElements[3].innerText = `Email: ${email}`;
  formElements[4].innerText = `Training Session: ${training}`;
  formElements[5].innerText = `Phone: ${phone}`;
  formElements[6].innerText = `Title: ${title}`;
  formElements[7].innerText = `Expectations: ${expectations}`;
  if (partner.checked === true)
    formElements[8].innerText = `Job Description: Partner`;
  else if (employee.checked === true)
    formElements[8].innerText = `Job Description: Employee`;
  else formElements[8].innerText = `Job Description: Empty`;
  formElements[9].innerText = `Cancel Registration: ${cancel.checked}`;
  formModal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  formModal.style.display = "none";
});
