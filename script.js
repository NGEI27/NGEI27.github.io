ზუსტად ასეა, ნინო. იმისთვის, რომ კოდი არ აირიოს და ერთიანად იმუშაოს, მოდი სრულად ჩავანაცვლოთ შენი script.js-ის შიგთავსი ამ ახალი ვერსიით.

აქ გაერთიანებულია შენი "მისალმების" ფუნქცია და ახალი "სესხის კალკულატორი".

1. სრული კოდი script.js ფაილისთვის:
JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // 1. მისალმების ფუნქცია (დროის მიხედვით)
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

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
    console.log("Portfolio loaded successfully!");
});

// 2. სესხის კალკულატორის ფუნქცია
function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;
    const paymentDisplay = document.getElementById('payment');

    if (amount && interest && years) {
        const principal = parseFloat(amount);
        const calculatedInterest = parseFloat(interest) / 100 / 12;
        const calculatedPayments = parseFloat(years) * 12;

        // ანუიტეტური გადახდის ფორმულა
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            paymentDisplay.textContent = '$' + monthly.toFixed(2);
        } else {
            alert("Please check the numbers you entered.");
        }
    } else {
        alert("Please fill in all fields (Amount, Interest, Years).");
    }
}
