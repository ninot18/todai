import type { Social } from '@/types/social.ts';

import Instagram from '@/assets/svg/instagram.svg';
import Threads from '@/assets/svg/threads.svg';

export const SOCIAL: Social[] = [
    {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/lorejordan/',
        label: 'Visitar el perfil de Lore Jordán en Instagram',
        image: {
            logo: Instagram,
            width: 200,
            height: 200,
        },
    },
    {
        id: 'threads',
        name: 'Threads',
        url: 'https://www.threads.net/@lorejordan',
        label: 'Visitar el perfil de Lore Jordán en Threads',
        image: {
            logo: Threads,
            width: 200,
            height: 200,
        },
    },
];
