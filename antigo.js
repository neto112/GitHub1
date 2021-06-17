function get(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
    req.onerror = (e) => reject(Error(`Network Error: ${e}`));
    req.send();
  });
}

let perfilDoNeto = null

get('https://api.github.com/users/neto112')
  .then((data) => {
    const objeto = JSON.parse(data)
    perfilDoNeto = objeto

    const perfilDiv = document.getElementsByClassName("perfil")[0];

    perfilDiv.innerHTML = `
      <img src="https://avatars.githubusercontent.com/u/79769515?v=4"></img>

      <strong>${perfilDoNeto.name}</strong>

      <small>${perfilDoNeto.login}</small>

      <button>Edit profile</button>

      <ul>
        <li>
          <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16"
            aria-hidden="true">
          </svg>
          <span>${perfilDoNeto.location}</span>
        </li>
        <li>
          <svg class="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16" height="16"
            aria-hidden="true">
          </svg>
          <span>---</span>
        </li>
        <li>
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" height="16" width="16"
            class="octicon octicon-link">
          </svg>
          <span>${perfilDoNeto.blog}</span>
        </li>
      </ul>
    `;

    const repositories = [
      {
        nome: "Instagram",
        ultimaAtualizacaoDias: 9
      },
      {
        nome: "training",
        ultimaAtualizacaoDias: 13
      },
      {
        nome: "GitHub",
        ultimaAtualizacaoDias: 14
      },
      {
        nome: "bots-binance",
        ultimaAtualizacaoDias: 16
      },
      {
        nome: "Rocketseat",
        ultimaAtualizacaoDias: 19
      },
      {
        nome: "neto112",
        ultimaAtualizacaoDias: 22
      },
      {
        nome: "clientes",
        ultimaAtualizacaoDias: 25
      },
      {
        nome: "CSM-Training",
        ultimaAtualizacaoDias: 28
      },
    ]

    const reposDiv = document.getElementsByClassName("repos")[0];

    reposDiv.innerHTML = repositories.map(repo => (
      `
        <li>
            <div>
                <strong>${repo.nome}</strong>
                <span>Updated ${repo.ultimaAtualizacaoDias} days ago</span>
            </div>
            <button>
            <svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16"
            height="16" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
            </path>
          </svg>
          Star</button>
        </li>
      `
    ));
  })
  .catch((err) => {
    console.log(err)
  });
