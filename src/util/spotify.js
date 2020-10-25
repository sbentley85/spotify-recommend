

// let accessToken: string;
// const clientId = 'e976fc9716424616b581c3056a5e2372'
// const redirectUri = 'http://localhost:3000'

// document.body.onload = function() {
    
//     if (!sessionStorage.getItem('searchTerm')) {
//         document.getElementById('input').value = null
//     } else {
//         document.getElementById('input').value = sessionStorage.getItem('searchTerm')
//     }
// }


// const Spotify = {
//     getAccessToken () {
        
//         if (accessToken) {
//             console.log(`Existing token: ${accessToken}`)
//             return accessToken;
//         }
//         // check for access token match
//         const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
//         const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        

//         if (accessTokenMatch && expiresInMatch) {
//            accessToken = accessTokenMatch[1];
//            const expiresIn = Number(expiresInMatch[1]);
//            window.setTimeout(() => accessToken = '', expiresIn * 1000);
//            window.history.pushState('Access Token', null, '/');
//            // Clears the parameters, allowing us to grab a new access token when it expires

//            return accessToken;
//         } else {

//             const accessUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
//             window.location = accessUri
            
//         }
//     },

//     search (term: string) {
//         sessionStorage.setItem('searchTerm', term)
        
//         const accessToken = Spotify.getAccessToken();
//         console.log(`Access Token(search): ${accessToken}`)
//         let endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`
        
//         return fetch(endpoint, {
//             headers: {Authorization: `Bearer ${accessToken}`}
//           }).then(response => {
//               return response.json();
//            }).then(jsonResponse => {
//                if (!jsonResponse.tracks) {
                   
//                    return [];
//                }
               
//                return jsonResponse.tracks.items.map((track: {id: number, name: string, artists: any, album: any, uri: any}) => ({
//                    id: track.id,
//                    name: track.name,
//                    artist: track.artists[0].name,
//                    album: track.album.name,
//                    uri: track.uri
//                }))
//            })
           
//     },

//     savePlaylist(name: string, trackUris) {
//         if (!name || !trackUris.length) {
            
//             return;
//         }
             
//         const accessToken = Spotify.getAccessToken();
//         const headers = { Authorization: `Bearer ${accessToken}` };
//         let userId;

//         return fetch('https://api.spotify.com/v1/me', {headers: headers}
//         ).then(response => response.json()
//         ).then(jsonResponse => {
//             userId = jsonResponse.id;
//             console.log(userId)
//             return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
//             {
//                 headers: headers,
//                 method: 'POST',
//                 body: JSON.stringify({name: name})
//             }).then(response => response.json()
//             ).then(jsonResponse => {
//                 const playlistId = jsonResponse.id;
//                 console.log(playlistId)
//                 return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
//                 {
//                     headers: headers,
//                     method: 'POST',
//                     body: JSON.stringify({uris: trackUris}),
                    
//                 })  
        
//             })
//         })

//     },

//     getPlaylists () {
//         console.log('getting playlists')
//         const accessToken = Spotify.getAccessToken();
//         const headers = { Authorization: `Bearer ${accessToken}` };
        

//         return fetch('https://api.spotify.com/v1/me/playlists?limit=50', {headers: headers}
//         ).then(response => response.json()
//         ).then(jsonResponse => {
//             console.log(jsonResponse)
//             return jsonResponse.items.map(playlist => ({
//                 id: playlist.id,
//                 name: playlist.name,
//             }))


//         })
        

//     }



// }

// export default Spotify;