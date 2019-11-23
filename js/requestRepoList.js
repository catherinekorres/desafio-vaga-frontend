const getUserRepos = async () => {  
  clearResults();

  if (userData.username) {
    const url = `https://api.github.com/users/${userData.username}/repos`;
    console.log(url)

    res = await fetch(url)
    .then(res => res.json()) 
    .then(data => {
      userData.repos = data;

      data.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1);

      title = createNode('h2');
      repoList = createNode('ul');

      title.innerHTML = `Repositórios de ${userData.username}:`;
      addClass(repoList, "repo-list");

      data.map(function(repo) { 
        li = createNode('li');
        repoName = createNode('h4');
        //repoDescription = createNode('p');
        repoLink = createNode('div');
        repoStars = createNode('span');

        repoName.innerHTML = repo.name;
        repoLink.addEventListener("click", getRepo); 
        repoStars.innerHTML = repo.stargazers_count;

        addClass(li, "repo-item");
        addClass(repoStars, "stars");
        
        append(repoLink, repoName);
        append(repoLink, repoStars);
        append(li, repoLink);
        append(repoList, li);
      })

      back = createNode('div');
      back.innerHTML = 'Voltar';
      back.addEventListener("click", getUserData); 
      addClass(back, "return");

      append(results, back);
      append(results, title);
      append(results, repoList);

    })
    .catch(error => {
      console.log(error);
    })
  }
        
}