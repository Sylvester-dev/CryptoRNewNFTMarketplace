serverUrl = "https://hjcjbotzakm2.usemoralis.com:2053/server";
appId = "nEQ0TYZEk339jLD5EW0aPy8kmZ5kcLyagm37YEkJ";
Moralis.start({ serverUrl, appId });

const user = Moralis.User.current();
