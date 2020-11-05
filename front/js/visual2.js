let teddiesId = new URLSearchParams(location.search).get("id");
console.log(teddiesId);
fetchItem(teddiesId);