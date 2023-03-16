/**
 * Configurações de Api
 */
const getApiConfigs = () => ({
  endpoint: "http://localhost:3000/api",
});

const fetchApi = (endpoint) =>
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data);

/**
 * Cria o botão flutuante fechado
 */
const floatingButtonClose = async () => {
  const apiConf = getApiConfigs();

  // configurações do header
  let headerConf = await fetchApi(apiConf.endpoint);
  if (headerConf) {
    localStorage.setItem("headerConf", JSON.stringify(headerConf));

    // cria o botão flutuante
    const floatingButton = document.createElement("button");
    floatingButton.innerHTML = `<img src="https://i.pinimg.com/originals/0f/9f/38/0f9f389b440e4dcaf1c98e9b4c9fadfc.png" alt="Arrow Open" />`;
    floatingButton.className = "personal_header-floating-button-closed";
    floatingButton.id = "personal_header-floating-button-closed";

    // adiciona o evento de click
    floatingButton.addEventListener("click", () => {
      // remove o botão flutuante fechado
      document.body.removeChild(floatingButton);

      // cria o botão flutuante aberto
      floatingButtonOpen();
    });

    // adiciona o botão flutuante ao corpo do documento
    document.body.appendChild(floatingButton);
  }
};

/**
 * Cria o botão flutuante aberto
 */
const floatingButtonOpen = async () => {
  const data = JSON.parse(localStorage.getItem("headerConf"));

  // cria o botão flutuante
  const floatingButtonOpened = document.createElement("button");
  floatingButtonOpened.innerHTML = `
  <img src="${data.partner.image}" alt="${data.partner.name}" />
  <div>
    <button class="personal_header-close-button" onclick="closeButton()"><b>&#x2715</b></button>
  </div>`;
  floatingButtonOpened.className = "personal_header-floating-button";
  floatingButtonOpened.id = "personal_header-floating-button";

  // adiciona o botão flutuante ao corpo do documento
  document.body.appendChild(floatingButtonOpened);
};

/**
 * Fecha o botão flutuante aberto
 */
const closeButton = () => {
  // remove o botão flutuante aberto
  const floatingButtonOpened = document.getElementById(
    "personal_header-floating-button"
  );
  document.body.removeChild(floatingButtonOpened);

  // cria o botão flutuante fechado
  floatingButtonClose();
};

// Botão flutuante principal
window.addEventListener("load", floatingButtonClose);
console.log(window.location);
