import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
  getTasks,
} from "./firebase_setup.js";

const jobsForm = document.getElementById("jobs-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";
// window.addEventListener("DOMContentLoaded", async (e) => {
const querySnapshot = await getTasks();

querySnapshot.forEach((doc) => {
  const task = doc.data();
  console.log(doc.data());

  tasksContainer.innerHTML += `
    <div class="card card-body mt-2 m-3 border-muted">
      <h3 class="h4 jb-title">${task.jobName}</h3>
      <p>${task.description}</p>

      <p style="color: black;">Availability: ${task.availability}</p>

      <p>Location: ${task.location}</p>
      <p>Experience: ${task.experience}</p>

      <p>Skills: ${task.skills}</p>
      <div class="d-flex  justify-content-between text-secondary" >
        <p style="color: black;"> Min Pay: ${task.min_sal}</p>
        <p style="color: black;">Max Pay: ${task.max_sal}</p>
      </div>

      <div class="d-flex mt-2 justify-content-between text-secondary" >
        <p style="color: black;"> Apply Through: </p>
        <p >${task.applyEmail}</p>
      </div>
    </div>`;

  const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
  btnsDelete.forEach((btn) =>
    btn.addEventListener("click", async ({ target: { dataset } }) => {
      try {
        await deleteTask(dataset.id);
      } catch (error) {
        console.log(error);
      }
    })
  );

  const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
  btnsEdit.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      try {
        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();
        taskForm["task-title"].value = task.title;
        taskForm["task-description"].value = task.description;

        editStatus = true;
        id = doc.id;
        taskForm["btn-task-form"].innerText = "Update";
      } catch (error) {
        console.log(error);
      }
    });
  });
});
// });

jobsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const jobName = jobsForm["job-name"];
  const description = jobsForm["job-description"];
  const availability = jobsForm["availability"];
  const experience = jobsForm["experience"];
  const min_sal = jobsForm["min-sal"];
  const max_sal = jobsForm["max-sal"];
  const location = jobsForm["location"];
  const skills = jobsForm["skills"];
  const applyEmail = jobsForm["applyEmail"];

  try {
    if (!editStatus) {
      await saveTask(
        jobName.value,
        description.value,
        availability.value,
        experience.value,
        min_sal.value,
        max_sal.value,
        location.value,
        skills.value,
        applyEmail.value
      );
    } else {
      await updateTask(id, {
        jobName: jobName.value,
        description: description.value,
        availability: availability.value,
        experience: experience.value,
        min_sal: min_sal.value,
        max_sal: max_sal.value,
        location: location.value,
        skills: skills.value,
        applyEmail: skills.applyEmail,
      });

      editStatus = false;
      id = "";
      jobsForm["btn-job-form"].innerText = "Save";
    }

    jobName.focus();
    jobsForm.reset();
  } catch (error) {
    console.log(error);
  }
});
