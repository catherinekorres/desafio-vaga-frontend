const getUserData = async () => {
  clearResults();

  if (input.value) {
    userData.username = input.value;

    const url = `https://api.github.com/users/${input.value}`;
    console.log(url)

    res = await fetch(url)
    .then(res => res.json()) 
    .then(data => {
      console.log(data);

      wrapper = createNode('div');
      avatar = createNode('img');
      user = createNode('h4');
      bio = createNode('p');
      email = createNode('p');
      followers = createNode('p');
      following = createNode('p');
      repos = createNode('div');

      avatar.src = data.avatar_url;
      user.innerHTML = data.login;
      bio.innerHTML = data.bio;
      email.innerHTML = data.email;
      followers.innerHTML = `followers: ${data.followers}`;
      following.innerHTML = `following: ${data.following}`;
      repos.innerHTML = 'Ver repositórios';
      repos.addEventListener("click", getUserRepos); 

      append(wrapper, avatar);
      append(wrapper, user);
      append(wrapper, bio);
      append(wrapper, email);
      append(wrapper, followers);
      append(wrapper, following);
      append(wrapper, repos);
      addClass(repos, "go-to-repo-list");

      append(results, wrapper);
      addClass(wrapper, "user-info");

    })
    .catch(error => {
      console.log(error);
    })
  }
}