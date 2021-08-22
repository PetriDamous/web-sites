export const noteValidation = (note) => note.trim() !== "";

export const getColorCoords = (closetColorBtn) => {
  const $colorToolTip = document.querySelector(".color-tooltip");
  const colorBtnCoords = closetColorBtn.getBoundingClientRect();
  const horizontal = colorBtnCoords.left;
  const vertical = colorBtnCoords.top;
  const width = colorBtnCoords.width;
  console.log(colorBtnCoords);

  $colorToolTip.style.left = `${horizontal + 50}px`;
  $colorToolTip.style.top = `${vertical + 50}px`;
  $colorToolTip.style.width = `${width - 100}px`;
};
