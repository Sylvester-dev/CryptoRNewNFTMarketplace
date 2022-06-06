serverUrl = "https://zfaxtniyopd8.usemoralis.com:2053/server";
appId = '39SwxbGndvVurm6YgCbpaFTvjdu4fcEv3bhGFbL1';
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
