export const noteValidation = (note) => note.trim() !== ""; 

export const getColorCoords = (closetColorBtn) => {
    const $colorToolTip = document.querySelector('.color-tooltip');
    const colorBtnCoords = closetColorBtn.getBoundingClientRect();
    const horizontal = colorBtnCoords.left;
    const vertical = colorBtnCoords.top - 80;

    $colorToolTip.style.left = `${horizontal}px`;
    $colorToolTip.style.top = `${vertical}px`;
}

