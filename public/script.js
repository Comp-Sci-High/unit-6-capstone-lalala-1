async function deleteStudent(id) {
    await fetch('/delete/' + id, {method: 'DELETE'});
    window.location.href = "/"
   }
   

async function updateStudent(e, id) {
    e.preventDefault();
   
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
   
    await fetch('/student/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObject)
    });
   
    window.location.href = '/'
   }
   
   async function newStudent(e, id) {
    e.preventDefault();
   
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
   
    await fetch('/new/student/' + id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObject)
    });
   

    document.getElementById('add-student-btn').addEventListener('click', () => {
  const container = document.getElementById('new-students-container');

  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h2>New Student</h2>
    <form action="/students" method="POST">
      <label>Name:</label>
      <input name="name" required>

      <label>Image URL (optional):</label>
      <input name="image">

      <label>Science Grade:</label>
      <input name="Scigrade" type="number" min="0" max="125">

      <label>History Grade:</label>
      <input name="Histgrade" type="number" min="0" max="125">

      <label>CS Grade:</label>
      <input name="CSgrade" type="number" min="0" max="125">

      <label>Math Grade:</label>
      <input name="Mathgrade" type="number" min="0" max="125">

      <label>ELA Grade:</label>
      <input name="ELAgrade" type="number" min="0" max="125">

      <label>Week:</label>
      <input name="week" type="number" min="0" max="125">

      <button type="submit">Add Student</button>
    </form>
  `;

  container.appendChild(card);
});

    
    window.location.href = '/'
   }
   



