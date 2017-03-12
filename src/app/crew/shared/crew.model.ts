interface SocialLinksInterface {
    name: string;
    urlLink: string;
}

export interface CREW {
    name: string;
    imgUrl: string;
    bioStory: string;
    socialAccountsLinks: SocialLinksInterface[];
}
