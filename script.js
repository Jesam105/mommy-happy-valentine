function readLetter() {
    // alert('Opening your heartfelt letter...');
    window.location.href = 'letter.html'; // Update this to your actual letter page
}

// Clone first few elements to create an infinite loop effect
document.addEventListener("DOMContentLoaded", function () {
    let gallery = document.querySelector(".gallery");
    let boxes = document.querySelectorAll(".box");
    
    boxes.forEach(box => {
        let clone = box.cloneNode(true);
        gallery.appendChild(clone);
    });
});

