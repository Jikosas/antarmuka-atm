document.addEventListener('DOMContentLoaded', () => {
    const atmForm = document.getElementById('atmForm');
    atmForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardNumber = document.getElementById('cardNumber').value;
        const pin = document.getElementById('pin').value;
        const amount = document.getElementById('amount').value;

        if (cardNumber && pin && amount) {
            alert(`Withdrawal of ${amount} successful!`);
        } else {
            alert('Please fill in all the fields.');
        }
    });
});
