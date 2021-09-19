const formModal = document.querySelector(".form-modal");
const formElements = document.querySelectorAll(".form-modal p");
const sumbitBtn = document.querySelector(".push");
const closeBtn = document.querySelector(".close-btn");

sumbitBtn.addEventListener("click", (e) => {
  const company = document.querySelector("#company").value || "Empty";
  const nameValue = document.querySelector("#name").value || "Empty";
  const email = document.querySelector("#email").value || "Empty";
  const training = document.querySelector("#training").value || "Empty";
  const phone = document.querySelector("#tel").value || "Empty";
  const title = document.querySelector("#title").value || "Empty";
  const expectations = document.querySelector("#expectations").value || "Empty";
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
  e.preventDefault();
});
closeBtn.addEventListener("click", () => {
  formModal.style.display = "none";
});
