for (let i = 0; i < 7; i++) {
  const barEl = document.querySelector(`#d${i}`);
  const pEl = document.querySelector(`.h${i}`);
  barEl.addEventListener("mouseover", () => {
    pEl.style.display = `block`;
  });
  barEl.addEventListener("mouseout", () => {
    pEl.style.display = `none`;
  });
}
