# Unit-6-Capstone

 <div class="button-wrapper">
            
              <div class="card">
                  

                <form onsubmit="updateStudent(event, '<%= students[i]._id %>')">
                  <label >NAME:</label><br>
                  <input name="name" value="<%= students[i].name %>" />
                  <input name="image"  value="<%= students[i].image %>" />
                  <label >GRADE:</label><br>
                  <input name="Scigrade" type="number" max="125" min="0" value="<%= students[i].grade %>" />
                   <label >GRADE:</label><br>
                  <input name="Histgrade" type="number" max="125" min="0" value="<%= students[i].grade %>" />
                   <label >GRADE:</label><br>
                  <input name="CSgrade" type="number" max="125" min="0" value="<%= students[i].grade %>" />
                    <label >GRADE:</label><br>
                  <input name="Mathgrade" type="number" max="125" min="0" value="<%= students[i].grade %>" />
                    <label >GRADE:</label><br>
                  <input name="ELAgrade" type="number" max="125" min="0" value="<%= students[i].grade %>" />

                  <button type="submit">Update</button>
                </form>
              </div>

              <button onclick="deleteStudent('<%= students[i]._id %>')">Delete</button>
           
        </div>