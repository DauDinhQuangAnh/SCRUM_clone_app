// Đặt thời gian kết thúc là 0 giờ ngày 14 tháng 10 năm 2023
let endTime = new Date(2023, 9, 24, 0, 0, 0);

let interval = setInterval(function () {
    let now = new Date();
    let distance = endTime - now;

    let hours = Math.floor(distance / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật thời gian trong phần tử HTML
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").textContent = "Đã đến 0 giờ ngày 14 tháng 10 năm 2023!";
    }
}, 1000);
