let QUERY1 = encodeURIComponent(
  `*[_type == "comments"] | order(_createdAt desc).title`
);
// Compose the URL for your project's endpoint and add the query
let URL1 = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY1}`;
fetch(URL1)
  .then((res) => {
    if (res.status == 200) {
      return res.json();
    } else {
      throw new Error("FAILED TO FETCH DATA");
    }
  })

  .then((data) => {
    // console.log(data);
    data.result.forEach((item) => {
      // console.log(item);
      var commentContainer = document.getElementById("comments");
      var h4elelement = document.createElement("h4");
      h4elelement.textContent = item;
      commentContainer.appendChild(h4elelement);
    });
  })

  .catch((error) => {
    console.error("Error:", error);
    commentContainer.innerHTML = "Failed to fetch data.";
  });
