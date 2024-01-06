let rowData = [];

function generateTable() {
  const rowCountInput = document.getElementById("rowCount");
  const rowCount = parseInt(rowCountInput.value, 10) || 1;

  const tableBody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  rowData = [];

  for (let i = 0; i < rowCount; i++) {
    const row = tableBody.insertRow();
    const rowValues = [];

    for (let j = 0; j < 3; j++) {
      const cell = row.insertCell(j);
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Enter ${
        j === 0 ? "name" : j === 1 ? "time" : "location"
      }`;
      cell.appendChild(input);

      input.addEventListener("input", function () {
        rowValues[j] = input.value;
      });
    }

    rowData.push(rowValues);
  }
}

function downloadTableImage() {
  const table = document.getElementById("dataTable");

  html2canvas(table).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "table_image.jpg";
    link.click();
  });
}
