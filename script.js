const navbarLinks = document.querySelectorAll('.navbar-link-text');

const writeAnimated = async (link, navLink) => {
    
    
    for (let i = 0; i < link.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, (9*((Math.random() * 5)+1)))); // 25 --> increase/decrease speed
        navLink.textContent += link.charAt(i);
    }
}

(async () => {
    await writeAnimated('About', navbarLinks[0]);
    await writeAnimated('Projects', navbarLinks[1]);
    await writeAnimated('Resume', navbarLinks[2]);
    await writeAnimated('Contact', navbarLinks[3]);
})();


/* Alerts and
const result = prompt('are you a pussy? y or n');

/*if (result === 'y') {
    alert(' i knew it ');
} else alert('nah ur lying');
*/