serverUrl = "https://6jvfolc0td4p.usemoralis.com:2053/server";
appId = 'svwErIclpXy8OOAQESvKnu12putOFhcsSpeEGFSR';
Moralis.start({ serverUrl, appId });

const user = Moralis.User.current();
