document.getElementById("fileInput").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    uploadToSanity(file);
  }
});

function uploadToSanity(file) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v1/images/${DATASET}`;
  const headers = {
    Authorization: `skDDKJCWQ1ADj1be7zxBoCM07eh7J6gHnINYI1kldrWfqB0ZHf62bMM41bfjPU6qoVsjyweeEocSO7gpmFW5RlSfotjKnevQO6iZGtkGyC70l3kZa34Tz6T2aFZHa6bpPv06iB14slKfOl6L279XCRz1C8LTzoc1JeOXEPgEQmO7u6ZBTcgR`,
    "Content-Type": file.type,
  };
  fetch(url, {
    method: "POST",
    headers: headers,
    body: file,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
