document.getElementById("routineForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = {
    skinType: form.get("skinType"),
    concerns: form.get("concerns"),
    preference: form.get("preference"),
    allergies: form.get("allergies")
  };
  const response = await fetch("https://your-backend-url.onrender.com/generate-routine", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  document.getElementById("routineOutput").textContent = result.routine;
  document.getElementById("resultSection").style.display = "block";
});
