const WORKER_BASE = "https://commission-worker.kevin-tsui910919.workers.dev";

document.getElementById("load").onclick = async () => {
  const res = await fetch(`${WORKER_BASE}/api/tickets`);
  const data = await res.json();
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
};

