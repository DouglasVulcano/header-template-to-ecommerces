/**
 * API settings
 */
const getApiConfigs = () => ({
  endpoint: "http://localhost:3000/api",
});

const fetchApi = (endpoint) =>
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data);

/**
 * Create the closed floating button
 */
const floatingButtonClose = async () => {
  const apiConf = getApiConfigs();

  // header settings
  let headerConf = await fetchApi(apiConf.endpoint);
  if (headerConf) {
    localStorage.setItem("headerConf", JSON.stringify(headerConf));

    // create floating button
    const floatingButton = document.createElement("button");
    floatingButton.innerHTML = `<img src="https://i.pinimg.com/originals/0f/9f/38/0f9f389b440e4dcaf1c98e9b4c9fadfc.png" alt="Arrow Open" />`;
    floatingButton.className = "personal_header-floating-button-closed";
    floatingButton.id = "personal_header-floating-button-closed";

    // add click event
    floatingButton.addEventListener("click", () => {
      // remove closed floating button
      document.body.removeChild(floatingButton);

      // create open floating button
      floatingButtonOpen();
    });

    // adds the floating button to the body of the document
    document.body.appendChild(floatingButton);
  }
};

/**
 * create the open floating button
 */
const floatingButtonOpen = async () => {
  const data = JSON.parse(localStorage.getItem("headerConf"));

  // create floating button
  const floatingButtonOpened = document.createElement("button");
  floatingButtonOpened.innerHTML = `
    <img src="${data.partner.image}" alt="${data.partner.name}" />
    <div>
      <button class="personal_header-close-button" onclick="closeButton()"><b>&#x2715</b></button>
    </div>
    <div>
      ${generateSocialButtons(data.social_networks)}
      <button class="personal_header-social" style="top: -60px;" onclick="copyToClipboard()">
        <img src="/images/share.png" alt="Copy to Clipboard" />
      </button>
    </div>`;

  floatingButtonOpened.className = "personal_header-floating-button";
  floatingButtonOpened.id = "personal_header-floating-button";

  // add floating button in document body
  document.body.appendChild(floatingButtonOpened);
};

/**
 ************************************************** AUXILIARY METHODS
 */
// Close open floating button
// eslint-disable-next-line no-unused-vars
const closeButton = () => {
  // remove o botão flutuante aberto
  const floatingButtonOpened = document.getElementById(
    "personal_header-floating-button"
  );
  document.body.removeChild(floatingButtonOpened);

  // cria o botão flutuante fechado
  floatingButtonClose();
};

// copy to clipboard
// eslint-disable-next-line no-unused-vars
function copyToClipboard() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => alert("URL copiada para a área de transferência!"))
    .catch((err) => console.error("Erro ao copiar URL: ", err));
}

// eslint-disable-next-line no-unused-vars
const socialNetworkAction = (sn) => {
  alert(`Ação para a rede social ${sn}`);
};

const generateSocialButtons = (configs) => {
  let contents = "",
    top = -105;

  configs.forEach((sn) => {
    contents += `<button class="personal_header-social" style="top: ${top}px;" onclick="socialNetworkAction('${sn.social_network}')">
        <a href="${sn.link}" target="_blank" rel="noopener noreferrer">
          <img src="${sn.icon}" alt="${sn.social_network}"/>
        </a>
      </button>`;

    top -= 45;
  });

  return contents;
};

// main floating button
window.addEventListener("load", floatingButtonClose);
