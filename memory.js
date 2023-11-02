document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.moving-image');
    let positions = [-200, -300, -400, -500, -600]; // Gán giá trị ban đầu khác nhau cho từng ảnh

    function moveImages() {
        images.forEach((img, index) => {
            if (positions[index] >= 100) {
                positions[index] = -100 * images.length; // Đặt lại vị trí của tất cả ảnh
            }
            positions[index] += 0.4;
            img.style.right = `${positions[index]}%`;
        });
        requestAnimationFrame(moveImages);
    }

    moveImages();
});
