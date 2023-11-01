// Tool fetch comments
const API_KEY = 'Youtube API V3';
const VIDEO_ID = 'HTlkReDK0cw';

// Number of comments to fetch
const maxResults = 50;

// Initialize an empty string to store comments
let allComments = '';

// Function to fetch comments
function fetchComments(pageToken = null) {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=${VIDEO_ID}&maxResults=${maxResults}&pageToken=${pageToken || ''}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const comments = data.items.map(item => item.snippet.topLevelComment.snippet.textDisplay);
            allComments += comments.join('\n') + '\n'; // Join comments with newlines

            // Check if there are more comments to fetch
            if (data.nextPageToken) {
                fetchComments(data.nextPageToken);
            } else {
                // Once all comments are fetched, log the combined string
                console.log(allComments);
            }
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
}

// Start fetching comments
fetchComments();"
