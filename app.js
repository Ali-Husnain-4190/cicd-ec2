document.addEventListener("DOMContentLoaded", function() {
    // Get the element where we'll display the public IP
    const publicIpElement = document.getElementById('publicIp');

    // Fetch the public IP address using an API
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with the public IP address
            publicIpElement.textContent = data.ip;
        })
        .catch(error => {
            console.error('Error fetching public IP:', error);
            publicIpElement.textContent = 'Error fetching IP';
        });
});
