class AuthenticationHandler {
  constructor() {
    return this.spotifyAuthConfig = {
      clientId: 'a31e6bbd8b1246d8b5a16096abd2ad5c',
      clientSecret: 'f351d3e7939e4be69d15c395a59f5459',
      redirectUrl: 'com.nistro://auth',
      scopes: [
        'playlist-read-private',
        'playlist-modify-public',
        'playlist-modify-private',
        'user-library-read',
        'user-library-modify',
        'user-top-read',
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };
  }
}


const authHandler = new AuthenticationHandler();

export default authHandler;