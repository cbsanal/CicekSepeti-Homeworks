export const bodyFixed = (status) => {
  const body = document.querySelector("body");
  if (status === "fixed") {
    body.style.position = "fixed";
    body.style.width = "100%";
  } else {
    body.style.position = "relative";
  }
};
