function calculateBedTimes() {
  const wakeTime = document.getElementById("wakeTime").value;
  if (!wakeTime) return;

  const [hour, minute] = wakeTime.split(":").map(Number);
  const wakeDate = new Date();
  wakeDate.setHours(hour, minute, 0);

  const cycleMinutes = 90;
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";

  for (let i = 6; i >= 1; i--) {
    const bedTime = new Date(wakeDate.getTime() - i * cycleMinutes * 60000);
    const timeStr = bedTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const li = document.createElement("li");
    li.textContent = `${timeStr}`;
    resultList.appendChild(li);
  }
}
