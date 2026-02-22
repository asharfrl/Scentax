export interface Product {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
    details: {
        topNotes: string;
        middleNotes: string;
        baseNotes: string;
        longevity: string;
    }
    isComingSoon?: boolean;
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'null',
        name: 'NULL',
        tagline: '// Clean Code. Zero Distraction.',
        description: 'Aroma kosong yang penuh makna. Untuk Anda yang menyukai ketenangan total dan fokus tanpa gangguan. Diformulasikan untuk programmer yang membutuhkan "ruang kosong" dalam pikiran mereka.',
        price: 65000,
        image: '/images/home/onlinePresence/prdct_1-2.png',
        tags: ['Clean Code', 'Deep Work'],
        isComingSoon: true,
        details: {
            topNotes: 'Clean Air, White Tea',
            middleNotes: 'Cotton Flower, Transparent Musk',
            baseNotes: 'Iso E Super, Ambrette Seeds',
            longevity: '6-8 Jam'
        }
    },
    {
        id: '2',
        slug: 'boolean',
        name: 'BOOLEAN',
        tagline: '// Balanced Logic. Harmonious Sync.',
        description: 'Keseimbangan sempurna antara logika dan rasa. True or False, wanginya tetap valid. Cocok untuk mereka yang menjalani hidup dengan prinsip biner namun tetap fleksibel.',
        price: 65000,
        image: '/images/home/onlinePresence/prdct_2-2.png',
        tags: ['Balanced Logic', 'Universal'],
        isComingSoon: true,
        details: {
            topNotes: 'Bergamot, Black Pepper',
            middleNotes: 'Lavender, Sage',
            baseNotes: 'Vetiver, Cedarwood',
            longevity: '7-9 Jam'
        }
    },
    {
        id: '3',
        slug: 'overclock',
        name: 'OVERCLOCK',
        tagline: '// High Performance. Midnight Build.',
        description: 'Performa tinggi untuk mengejar deadline. Aroma intens yang memacu adrenalin produktivitas. Teman setia saat lembur dan mengejar target yang mustahil.',
        price: 65000,
        image: '/images/home/onlinePresence/prdct_3-2.png',
        tags: ['High Performance', 'Midnight Build'],
        isComingSoon: true,
        details: {
            topNotes: 'Espresso, Red Apple',
            middleNotes: 'Leather, Tobacco',
            baseNotes: 'Dark Amber, Oudh',
            longevity: '8-10 Jam'
        }
    },
    {
        id: '4',
        slug: 'kernel',
        name: 'KERNEL',
        tagline: '// System Core. Premium Base.',
        description: 'Inti dari kestabilan sistem. Aroma klasik dan kuat yang menjadi fondasi kepercayaan diri. Wewangian yang memancarkan otoritas dan ketenangan.',
        price: 65000,
        image: '/images/home/onlinePresence/prdct_4-2.png',
        tags: ['System Core', 'Premium Base'],
        isComingSoon: true,
        details: {
            topNotes: 'Sandalwood, Cardamom',
            middleNotes: 'Violet, Papyrus',
            baseNotes: 'Leather, Virginia Cedar',
            longevity: '8-10 Jam'
        }
    }
];
