let id = new URLSearchParams(location.search);
console.log(id.get("id"));
fetchItem2(id);