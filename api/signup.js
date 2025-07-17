document.getElementById('signupForm').onsubmit = async function(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    if (password !== confirm) {
        document.getElementById('signupError').textContent = 'Passwords do not match.';
        return;
    }
    const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.success) {
        window.location.href = '/login.html';
    } else {
        document.getElementById('signupError').textContent = data.message;
    }
};
