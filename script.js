function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;
    const paymentDisplay = document.getElementById('payment');

    if (amount && interest && years) {
        const principal = parseFloat(amount);
        const calculatedInterest = parseFloat(interest) / 100 / 12;
        const calculatedPayments = parseFloat(years) * 12;

        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            paymentDisplay.textContent = '$' + monthly.toFixed(2);
        }
    }
}
