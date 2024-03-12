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
          repoElement.innerHTML = `<strong>${repo.name}</strong>: ${repo.description}`;
          document.getElementById('repos').appendChild(repoElement);
        });
      })
      .catch(error => console.error('Erro ao buscar repositórios:', error));
  }
  