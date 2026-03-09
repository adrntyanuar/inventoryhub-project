const listEl = document.getElementById("inventory-list");

async function loadInventory() {
  try {
    const response = await fetch("/api/inventory");
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const payload = await response.json();
    const items = payload.items || [];

    listEl.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} (${item.category}) - Stock: ${item.stock}`;
      listEl.appendChild(li);
    });

    if (items.length === 0) {
      listEl.innerHTML = "<li>No inventory data available.</li>";
    }
  } catch (error) {
    listEl.innerHTML = `<li>Failed to load inventory: ${error.message}</li>`;
  }
}

loadInventory();
