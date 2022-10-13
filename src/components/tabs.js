import axios from "axios";

const URL = 'http://localhost:5001/api/topics';

function Tabs(topics) {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // const topicsDiv = document.createElement("div");
  // topicsDiv.classList.add("topics");
  // for (let i = 0; i < topics.length; i++){
  //   const div = document.createElement("div");
  //   div.classList.add("tab");
  //   iv.textContent = topics[i];
  //   topicsDiv.appendChild(div);
  // }
  // return topicsDiv;
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");
  topics.forEach(topic => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("tab");
    newDiv.textContent = topic;
    topicsDiv.append(newDiv);
  });
  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(URL)
    .then(res => {
      const topics = document.querySelector(selector);
  topics.append(Tabs(res.data.topics));
    })
}

export { Tabs, tabsAppender }
