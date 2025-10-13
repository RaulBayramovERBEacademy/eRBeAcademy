async function renderFooter() {
  const footerData = await fetch("/HTML/footer.html");
  const footerHTML = await footerData.text();
  const footer = document.querySelector("footer");
  if (!footer) {
    console.error("Footer element not found in the document.");
    return;
  }
  footer.innerHTML = footerHTML;
}
document.addEventListener("DOMContentLoaded", async function () {
  await renderFooter();
});
