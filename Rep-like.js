// Tool auto like + reply
document.querySelectorAll('[aria-label="Heart"]').forEach(heart=>heart.click()) // Auto Heart All Comments
document.querySelectorAll('[aria-label="Like this comment along with 0 other people"]').forEach(like=>like.click()) // Auto Like All Comments
console.log("Liked")

setTimeout(() => {
    console.log("Choosing reply...")
    let secondSg = document.querySelectorAll("#suggestion-1");
    secondSg.forEach(sgt => {
        sgt.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
        });
    sgt.click(); 
    });

    setTimeout(() => {
        console.log("Reply added...")
        let btnElement = document.querySelectorAll(".style-scope.ytcp-comment-button.style-blue-text.size-default");
        btnElement.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
        });
        btn.click();
        });
    }, 3000); 
}, 1000)

