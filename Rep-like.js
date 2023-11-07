// Custom function to log messages in "Whale Say" style
function whaleSay(message) {
    const topLine = ' ' + '-'.repeat(message.length + 2); // Calculate the top line
    const bottomLine = ' ' + '-'.repeat(message.length + 2); // Calculate the bottom line

    console.clear(); // Clear the console
    console.log(` ${topLine}
< ${message} >
 ${bottomLine}
     \\
      \\
       \\
                 '-.
       .---._     \\ .--'
     /       '-..__)  ,-'
    |    0           /
     --.__,   .__.,\`
      \`-.___'._\\_.'
`);
}

// Tool auto like + reply
let allHearts = document.querySelectorAll('[aria-label="Heart"]');
allHearts.forEach(heart => heart.click()); // Auto Heart All Comments
let allLikes = document.querySelectorAll('[aria-label="Like this comment along with 0 other people"]');
allLikes.forEach(like => like.click()); // Auto Like All Comments

const message = `${allHearts.length} Hearts - ${allLikes.length} Likes`;
whaleSay(message);

setTimeout(() => {
    whaleSay("Choosing reply...");
    let secondSg = document.querySelectorAll("#suggestion-1");
    secondSg.forEach(sgt => {
        sgt.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop event propagation
        });
        sgt.click();
    });

    setTimeout(() => {
        whaleSay(`${secondSg.length} Replies added...`);
        let btnElement = document.querySelectorAll(".style-scope.ytcp-comment-button.style-blue-text.size-default");
        btnElement.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.stopPropagation(); // Stop event propagation
            });
            btn.click();
        });
    }, 2000);
}, 2000);
