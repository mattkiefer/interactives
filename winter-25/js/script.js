document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Set initial mode
document.body.classList.add('light-mode');