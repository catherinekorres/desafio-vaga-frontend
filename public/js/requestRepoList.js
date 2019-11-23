function sortByStars(array, a, b) {
  return array.sort((x, y) => (x.stargazers_count > y.stargazers_count) ? a : b);
}

const getUserRepos = async (order) => {  
  clearResults();

  console.log(order);

  if (userData.username) {
    const url = `https://api.github.com/users/${userData.username}/repos`;
    console.log(url)

    res = await fetch(url)
    .then(res => res.json()) 
    .then(data => {
      userData.repos = data;

      order === 'desc' ? data = sortByStars(data, -1, 1) : data = sortByStars(data, 1, -1);

      title = createNode('h2');
      repoList = createNode('ul');
      changeSort = createNode('div');

      title.innerHTML = `Repositórios de ${userData.username}:`; 
      changeSort.innerHTML = 'Inverter ordem';  
      changeSort.addEventListener('click', () => {
        order === 'desc' ? getUserRepos('asc') : getUserRepos('desc')
      })

      addClass(repoList, "repo-list");
      addClass(changeSort, "change-sort");

      data.map(function(repo) { 
        li = createNode('li');
        repoName = createNode('h4');
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
      append(results, changeSort);
      append(results, repoList);


    })
    .catch(error => {
      console.log(error);
    })
  }
        
}