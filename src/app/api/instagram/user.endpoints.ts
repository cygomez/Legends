class Instagram {
    beginning: string;
    recentMedia: string;
};

export const InstagramAPI: Instagram = {
    // Standard Url for Instagram
    beginning: 'https://api.instagram.com/v1/users/',
    // Get the most recent media published by the owner of the access_token.
    recentMedia: 'self/media/recent/?access_token='
};
