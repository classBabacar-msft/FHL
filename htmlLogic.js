module.exports = {
  displayQuests(quests) {
    let htmlContent = `<h1 style="text-align:center;">Available Quests</h1>`;
    for (let quest of quests) {
      htmlContent += ` 
        <div style="border: 2px solid; width: 300px; padding: 10px; margin: 0px auto;">
            <h3> <u>${quest["Quest Title"]} </u></h3>
            <p> ${quest.Description} </p>
            <button style="background-color: #90EE90;">
                <a href="/quest/${quest["Quest Title"]}" class="href">
                    Start Quest!
                </a>
            </button>
        </div> 
        <br>
        `;
    }

    return htmlContent;
  },

  displayButtons(routing) {
    let htmlContent = "";
    for (let router of routing) {
      htmlContent += `    
        <button class="button is-success">
            <a href="${router.path}" class="href">
               ${router.buttonName}
            </a>
        </button>  
        `;
    }
    return htmlContent;
  },

  displayQuest(quest) {
    let header = `<div style="border: 2px solid; width: 800px; padding: 10px; margin: 0px auto;">
    <h3> <u> Title</u>: ${quest["Quest Title"]}</h3>
    <h3> <u> ICM</u>: <a href="${quest.ICMLink}"> ${quest.ICMLink} </a> </h3>
    <h3> <span> <u> Description</u>:  ${quest.Description} </span></h3>`;

    let body = `<ol>`;
    for (let question of quest.Questions) {
      body += `<li> <b> ${question["Question:"]} </b> </li>`;

      let answers = question["Answer"];
      // Multiple answers
      if (Array.isArray(answers)) {
        let answersList = ``;
        for (answer of answers) {
          answersList += `<ul> ${answer}. </ul>`;
        }
        body += `<button onclick="getElementById('${question["Question:"]}').innerHTML='${answersList}'">Reveal Answer </button> `;
      } else {
        body += `<button onclick="getElementById('${question["Question:"]}').innerHTML='${answers}'"> Reveal Answer </button> `;
      }

      let hints = question["Hints"];
      let hintList = ``;
      for (hint of hints) {
        hintList += `<ul> ${hint}. </ul>`;
      }
      body += `<button onclick="getElementById('${question["Question:"]}').innerHTML='${hintList}'">Show Hints! (${hints.length})</button>`;
      body += `<p id='${question["Question:"]}'></p>`;
    }

    body += `</ol>`;
    header += body;
    return (header += `</div>`);
  },
};
