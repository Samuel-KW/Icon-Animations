// Accessibility feature:
// When the user presses the enter or space key on an a label,
// the checkbox should be toggled
document.addEventListener('keypress', function(e) {
    if ((e.key === ' ' || e.key === 'Enter') &&
        e.target.classList.contains('icon') &&
        e.target.tagName === 'LABEL') {

        const id = e.target.getAttribute('for');
        const input = document.getElementById(id);
        
        // Toggle the value of the associated input field
        if (input) input.checked = !input.checked;

        e.preventDefault();
    }
});