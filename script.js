const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');
const signatureOutput = document.getElementById('signature-output');
const signatureImage = document.getElementById('signature-image');

let drawing = false;

// Set canvas dimensions
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Draw on canvas
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

// Clear the canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    signatureOutput.classList.add('hidden');
});

// Save the signature
saveButton.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    signatureImage.src = dataURL;
    signatureOutput.classList.remove('hidden');
});