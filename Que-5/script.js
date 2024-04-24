$(document).ready(function () {

    const endDate = new Date(2024, 4, 30, 23, 59, 59);

    function updateCountdown() {
        const now = new Date();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {

            $('#countdown').html("Sale has ended!");
        } else {

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


            $('#countdown').html(`
                <p>Sale ends in:</p>
                <p>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</p>
            `);
        }
    }


    setInterval(updateCountdown, 1000);


    updateCountdown();
});
