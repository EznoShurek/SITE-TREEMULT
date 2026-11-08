(function () {
  const links = window.EBRAZOLIN_LINKS || {};
  const hint = document.getElementById("hint");

  const discord = document.getElementById("link-discord");
  const pix = document.getElementById("link-pix");
  const whatsapp = document.getElementById("link-whatsapp");

  if (discord && links.discord) discord.href = links.discord;
  if (pix && links.pix) pix.href = links.pix;

  if (!whatsapp) return;

  whatsapp.addEventListener("click", () => {
    whatsapp.classList.add("shake");
    window.setTimeout(() => whatsapp.classList.remove("shake"), 420);

    if (!hint) return;
    hint.hidden = false;
    hint.textContent = "WhatsApp ainda está em construção. Em breve!";
    hint.classList.add("flash");
  });
})();
