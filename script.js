function filterItems(category) {
    const items = document.querySelectorAll('.item'); // Select all item elements
    items.forEach(item => {
        // Check if the category is 'all' or if the item belongs to the specified category
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}

// Function to set up button click events
function setupButtonListeners() {
    const buttons = document.querySelectorAll('.filters button'); // Select all filter buttons
    buttons.forEach(button => {
        button.onclick = () => {
            const category = button.textContent.toLowerCase(); // Get the category from button text
            filterItems(category);
        };
    });
}

// Initialize the view and set up event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    filterItems('all'); // Show all items initially
    setupButtonListeners(); // Set up button click events
});
