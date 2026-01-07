document.getElementById("load").onclick = async () => {
  const res = await fetch("/api/tickets");
  const data = await res.json();
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
};
