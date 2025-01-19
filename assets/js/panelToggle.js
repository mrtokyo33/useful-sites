let showPanel = false;

function togglePanel() {
    const panel = document.getElementById('add-links-panel');
    const addButton = document.getElementById('add-button');

    if (showPanel) {
        panel.style.display = 'none';
        panel.classList.remove('show');
        addButton.style.display = 'block';
    } else {
        panel.style.display = 'block';
        panel.classList.add('show');
        addButton.style.display = 'none';
    }

    showPanel = !showPanel;
}

document.getElementById('add-button').addEventListener('click', function(event) {
    event.preventDefault();
    togglePanel();
});

document.getElementById('panel-close-button').addEventListener('click', function() {
    togglePanel();
});
