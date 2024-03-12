// Função para fazer uma solicitação GET para a API do GitHub
function getGitHubRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
      // Limpa o conteúdo anterior
      document.getElementById('repos').innerHTML = '';

      // Exibe os repositórios do usuário
      data.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repo-item');
        repoElement.setAttribute('data-repo-name', repo.name); // Adiciona um atributo para armazenar o nome do repositório
        repoElement.innerHTML = `<strong>${repo.name}</strong>: ${repo.description}`;
        repoElement.addEventListener('click', () => {
          handleRepoClick(repo.name, username); // Chama a função de clique quando o elemento é clicado
        });
        document.getElementById('repos').appendChild(repoElement);
      });
    })
    .catch(error => console.error('Erro ao buscar repositórios:', error));
}

// Função para lidar com o clique em um repositório
function handleRepoClick(repoName, username) {
  // Aqui você pode fazer o que quiser com o nome do repositório clicado
  console.log(`Repositório clicado: ${repoName}`);
  // Por exemplo, redirecionar para a página do repositório:
  window.location.href = `https://github.com/${username}/${repoName}`;
}
