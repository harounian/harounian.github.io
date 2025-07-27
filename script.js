const navbarLinks = document.querySelectorAll('.navbar-link-text');

const writeAnimated = async (link, navLink) => {
    for (let i = 0; i < link.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, (5))); //for typing animation: await new Promise((resolve) => setTimeout(resolve, (9*((Math.random() * 5)+1)))); // 25 --> increase/decrease speed
        navLink.textContent += link.charAt(i);
    }
}

(async () => {
    await writeAnimated('Projects', navbarLinks[0]);
    await writeAnimated('Publications', navbarLinks[1]);
})();