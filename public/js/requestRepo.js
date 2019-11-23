
const getRepo = async (event) => {  
  clearResults();

  repoClicked = event.path[0].innerHTML;

  const repo = userData.repos.find(r => r.name === repoClicked);

  if (repo) {
    wrapper = createNode('div')
    repoName = createNode('h2');
    repoDesc = createNode('p');
    repoStars = createNode('span');
    repoLanguage = createNode('span');
    repoLink = createNode('a');
    back = createNode('div');

    addClass(wrapper, "repo");
    addClass(repoName, "repo-name");
    addClass(repoDesc, "description");
    addClass(repoStars, "stars");
    addClass(repoLanguage, "language");
    addClass(repoLink, "repo-link");
    addClass(back, "return");

    repoName.innerHTML = repo.name;
    repoDesc.innerHTML = repo.description;
    repoStars.innerHTML = repo.stargazers_count;
    repoLanguage.innerHTML = repo.language ? repo.language : 'Linguagem desconhecida';
    repoLink.href = repo.html_url;
    repoLink.innerHTML = 'Visitar no GitHub';
    repoLink.setAttribute("target", "_blank");
    back.innerHTML = 'Voltar';
    back.addEventListener("click", getUserRepos); 


    append(results, back);
    append(repoName, repoStars);
    append(wrapper, repoName);
    append(wrapper, repoLanguage);
    append(wrapper, repoDesc);
    append(wrapper, repoLink);
    append(results, wrapper);
    
  }
}