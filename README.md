# Unit-6-Capstone

 <div class="button-wrapper">
            <!-- Task 5: Add a form to update the student's grade -->
            <!-- Make sure the new grade is a number from 0 to 100 -->
            <!-- Go to script.js to complete Task 6 -->
              <div class="card">
                  <label >NAME:</label><br>

                <form onsubmit="updateStudent(event, '<%= students[i]._id %>')">

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

            <!-- Task 2: Add a button to delete the entire student by ID -->
            <!-- Go to script.js to complete Task 3 -->
              <button onclick="deleteStudent('<%= students[i]._id %>')">Delete</button>
           
        </div>