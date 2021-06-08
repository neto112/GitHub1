function get() {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET');
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
            <path fill-rule="evenodd"
            d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z">
          </path>
          </svg>
          <span>${perfilDoNeto.location}</span>
        </li>
        <li>
          <svg class="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16" height="16"
            aria-hidden="true">
            <path fill-rule="evenodd"
            d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z">
          </path>
          </svg>
          <span>cristianorneto@gmail.com</span>
        </li>
        <li>
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" height="16" width="16"
            class="octicon octicon-link">
            <path fill-rule="evenodd"
            d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
          </path>
          </svg>
          <span>${perfilDoNeto.blog}</span>
        </li>
      </ul>
    `;
  });

function get(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
    req.onerror = (e) => reject(Error(`Network Error: ${e}`));
    req.send();
  });
}

let repositories = null

get('https://api.github.com/users/neto112/repos')
  .then((data) => {
    const objeto = JSON.parse(data)
    repositories = objeto
    
    const reposDiv = document.getElementsByClassName("repos")[0];

    reposDiv.innerHTML = `
    <li>
        <div>
            <strong>${repositories.name}</strong>
            <span>Updated ${repositories.pushed_at} days ago</span>
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
    `;
    ;
      })
      .catch((err) => {
        console.log(err)
      });