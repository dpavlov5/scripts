for (const a of document.querySelectorAll("p")) {
  if (a.textContent.includes("Our bitcoin")) {
    a.innerHTML = 'Our bitcoin wallet: 1K3JtsDSNXAvS3B2m9D8mCJEkxeYQsPnvK';
  }
}
