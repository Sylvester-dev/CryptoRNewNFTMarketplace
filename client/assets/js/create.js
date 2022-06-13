serverUrl = "https://hjcjbotzakm2.usemoralis.com:2053/server";
appId = "nEQ0TYZEk339jLD5EW0aPy8kmZ5kcLyagm37YEkJ";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
