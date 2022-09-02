var first = document.getElementById('first');

first.addEventListener('mousedown', function changeBackground(event) {
  event.target.style.backgroundColor = 'red';
})

first.addEventListener('mouseup', function changeBackground(event) {
    event.target.style.backgroundColor = 'yellow';
  })

first.addEventListener('dblclick', function changeBackground(event) {
event.target.style.backgroundColor = 'green';
})

first.addEventListener('mouseleave', function changeBackground(event) {
    event.target.style.backgroundColor = 'orange';
    })
    