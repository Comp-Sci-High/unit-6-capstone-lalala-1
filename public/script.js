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
   


