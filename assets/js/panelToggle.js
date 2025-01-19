let showPanel = false;

function togglePanel() {
    const panel = document.getElementById('add-links-panel');
    const addButton = document.getElementById('add-button');

    if (showPanel) {
        panel.style.display = 'none';
        addButton.classList.remove('hidden');
    } else {
        panel.style.display = 'flex';
        addButton.classList.add('hidden');
    }

    showPanel = !showPanel;
}

document.getElementById('add-button').addEventListener('click', function(event) {
    event.preventDefault();
    togglePanel();
});

document.getElementById('panel-close--button').addEventListener('click', function() {
    togglePanel();
});

document.getElementById('add-links-panel').style.display = 'none';
