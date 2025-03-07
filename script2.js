document.addEventListener('DOMContentLoaded', function() {
    const savedPreferences = JSON.parse(localStorage.getItem('userPreferences'));
    if (savedPreferences) {
        savedPreferences.forEach(pref => {
            document.querySelector('input[value="' + pref + '"]').checked = true;
        });
    }
});

document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const preferences = [];
    document.querySelectorAll('input[name="preferences"]:checked').forEach(checkbox => {
        preferences.push(checkbox.value);
    });
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    alert('Preferences saved successfully!');
});
