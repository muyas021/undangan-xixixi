const form = document.getElementById("comments");

const now = new Date();
// adding data to db
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("comments").add({
    name: form.name.value,
    comment: form.comment.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  });
  form.name.value = "";
  form.comment.value = "";
  form.created_at.value = Date;
});

// reading from db
const div = document.querySelector(".comment-list");

renderList = (doc) => {
  const when = dateFns.distanceInWordsToNow(doc.data().created_at.toDate(), {
    addSuffix: true,
  });
  var main_div = document.createElement("div");
  var time_div = document.createElement("div");
  var name = document.createElement("h5");
  var comment = document.createElement("p");
  var created_at = document.createElement("p");
  var clock = document.createElement("img");
  main_div.setAttribute("class", "mt-6");
  time_div.setAttribute("class", "flex");
  name.setAttribute(
    "class",
    "text-white text-sm font-bold mb-1 tracking-wider"
  );
  comment.setAttribute("class", "text-white text-sm mb-1");
  created_at.setAttribute(
    "class",
    "text-white text-xs text-sage-200 my-auto ml-1"
  );
  clock.setAttribute("src", "assets/icons/icon-clock-16.svg");
  name.textContent = doc.data().name;
  comment.textContent = doc.data().comment;
  created_at.textContent = when;
  div.appendChild(main_div);
  main_div.appendChild(name);
  main_div.appendChild(comment);
  main_div.appendChild(time_div);
  time_div.appendChild(clock);
  time_div.appendChild(created_at);
};

db.collection("comments")
  .orderBy("created_at")
  .onSnapshot((snap) => {
    let changes = snap.docChanges();
    changes.forEach((change) => {
      if (change.type == "added") {
        renderList(change.doc);
      }
    });
  });
