const formModal = document.querySelector(".form-modal");
const formElements = document.querySelectorAll(".form-modal p");
const sumbitBtn = document.querySelector(".push");
const closeBtn = document.querySelector(".close-btn");

sumbitBtn.addEventListener("click", (e) => {
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
  formElements[0].innerText = `Company: ${company}`;
  formElements[1].innerText = `Full Name: ${nameValue}`;
  formElements[2].innerText = `Email: ${email}`;
  formElements[3].innerText = `Training Session: ${training}`;
  formElements[4].innerText = `Phone: ${phone}`;
  formElements[5].innerText = `Title: ${title}`;
  formElements[6].innerText = `Expectations: ${expectations}`;
  if (partner.checked === true)
    formElements[7].innerText = `Job Description: Partner`;
  else if (employee.checked === true)
    formElements[7].innerText = `Job Description: Employee`;
  else formElements[7].innerText = `Job Description: Empty`;
  formElements[8].innerText = `Cancel Registration: ${cancel.checked}`;
  formModal.style.display = "block";
  e.preventDefault();
});
closeBtn.addEventListener("click", () => {
  formModal.style.display = "none";
});
