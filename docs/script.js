const user = "valtercfjunior";
const url = "https://api.github.com/users/";

async function getUserData() {
  let profileRep = url + user + "/repos";
  await fetch(profileRep)
    .then((res) => res.json())
    .then((data) => {
      let container = "";

      data.forEach((repo) => {
        container += `
            <a href="${repo.html_url}" style="text-decoration: none" target="_blank">
                <div id="projects" class="cards-laterais cards" >
                    <h1 > <img src="./images/folder.svg" alt="folder"> ${repo.name}</h1>
                    <p >${repo.description}</p>
                    <div class="cardsStats">
                        <img src="./images/star.svg" alt="star">
                        <p>${repo.stargazers_count}</p>
                        <img src="./images/git-branch.svg" alt="branch">
                        <p>${repo.forks_count}</p>
                    </div>
                    </div>
            </a>     
            `;
      });

      document.getElementById("projectsContainer").innerHTML = container;
    });
}

getUserData();
