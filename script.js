document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.querySelector('h1');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning! I'm Nino";
    } else if (hour < 18) {
        greeting = "Good Afternoon! I'm Nino";
    } else {
        greeting = "Good Evening! I'm Nino";
    }

    greetingElement.textContent = greeting;
    console.log("Portfolio loaded successfully!");
});
