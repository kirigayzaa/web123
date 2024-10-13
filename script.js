document.addEventListener('DOMContentLoaded', () => {
    const text = "Thiết kế game, một thế giới nơi tôi có thể sáng tạo và kết nối.";
    const textAnimation = document.querySelector('.text-animation');

    function typeText() {
        let index = 0;
        textAnimation.textContent = ''; // Đặt lại văn bản
       

        function type() {
            if (index < text.length) {
                textAnimation.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50); // Thay đổi thời gian này để điều chỉnh tốc độ
            } else {
                textAnimation.style.borderRight = 'none'; // Ẩn con trỏ sau khi hoàn thành
            }
              
        }

        type();

        // Sau 5 giây, bắt đầu lại hiệu ứng
        setTimeout(() => {
            textAnimation.style.borderRight = '3px solid black'; // Hiện lại con trỏ
            setTimeout(typeText, 2000); // Thời gian nghỉ giữa các lần lặp
        }, text.length * 50 + 500); // Tổng thời gian cho một lần gõ + 500ms
       
        setInterval(function() {  
            rain();  
        }, 20);
    }

    typeText();
   
   
});


function rain() {  
    let cloud = document.querySelector(".cloud");  
    let e = document.createElement("div");  
    let left = Math.floor(Math.random() * 310);  
    let width = Math.random() * 1;  
    let height = Math.random() * 19;  
    let duration = Math.random() * 0.5;  
    e.classList.add("drop");  
    cloud.appendChild(e);  
    e.style.left = left + "px";  
    e.style.width = 0.5 * width + "px";  
    e.style.height = 0.5 * height + "px";  
    e.style.animationDuration = 1 + duration + "s";  
    setTimeout(function() {  
        cloud.removeChild(e);  
    }, 2000);
}
