document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no');
    let scale = 1;
    noButton.addEventListener('click', () => {
        const rect = noButton.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        if (width > 30 && height > 20) {
            scale -= 0.2    ;
            noButton.style.transform = `scale(${scale})`;
        } else {
            noButton.style.display = 'none';
        }
    });
});
