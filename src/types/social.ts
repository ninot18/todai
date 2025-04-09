type SocialId = 'instagram' | 'threads';

type SocialName = 'Instagram' | 'Threads';

export interface Social {
    id: SocialId;
    name: SocialName;
    url: string;
    label: string;
    image: {
        logo: any;
        width: number;
        height: number;
    };
}