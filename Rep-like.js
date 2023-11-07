// Tool auto like + reply
let allHearts = document.querySelectorAll('[aria-label="Heart"]')
allHearts.forEach(heart=>heart.click()) // Auto Heart All Comments
let allLikes = document.querySelectorAll('[aria-label="Like this comment along with 0 other people"]')
allLikes.forEach(like=>like.click()) // Auto Like All Comments
console.clear();
console.log(`${allHearts.length} Hearts - ${allLikes.length} Likes`)

setTimeout(() => {
    console.clear();
    console.log("Choosing reply...")
    let secondSg = document.querySelectorAll("#suggestion-1");
    secondSg.forEach(sgt => {
        sgt.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
        });
    sgt.click(); 
    });

    setTimeout(() => {
        console.clear();
        console.log(`${secondSg.length} Replies added...`)
        let btnElement = document.querySelectorAll(".style-scope.ytcp-comment-button.style-blue-text.size-default");
        btnElement.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
        });
        btn.click();
        });
    }, 3000); 
}, 1000)

