serverUrl = "https://6jvfolc0td4p.usemoralis.com:2053/server";
appId = 'svwErIclpXy8OOAQESvKnu12putOFhcsSpeEGFSR';
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
