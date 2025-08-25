// Change background color on button click
document.getElementById('colorButton').addEventListener('click', function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lavender' ? '#e9f4fb' : 'lavender';
});

// Show greeting
function greetUser() {
  const name = document.getElementById('nameInput').value;
  document.getElementById('greeting').textContent =
    name ? 'Hello, ' + name + '!' : 'Hello!';
}
