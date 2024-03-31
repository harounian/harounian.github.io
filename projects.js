let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) => {
    tile.style.visibility = "hidden"
});

(async () => {
    for (let i = 0; i < tiles.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 70));

        const keyframes = `
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }`;
        
        var style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        tiles[i].style.animation = "fadeIn 1s ease-in-out";

     
        tiles[i].style.visibility = "visible";
    }
})()
