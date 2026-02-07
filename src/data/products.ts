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
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'null',
        name: 'NULL',
        tagline: '// Clean Code. Zero Distraction.',
        description: 'Aroma kosong yang penuh makna. Untuk Anda yang menyukai ketenangan total dan fokus tanpa gangguan. Diformulasikan untuk programmer yang membutuhkan "ruang kosong" dalam pikiran mereka.',
        price: 299000,
        image: '/images/home/onlinePresence/prfm_1.jpg',
        tags: ['Clean Code', 'Deep Work'],
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
        price: 329000,
        image: '/images/home/onlinePresence/prfm_2.jpg',
        tags: ['Balanced Logic', 'Universal'],
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
        price: 349000,
        image: '/images/home/onlinePresence/prfm_3.jpg',
        tags: ['High Performance', 'Midnight Build'],
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
        price: 399000,
        image: '/images/home/onlinePresence/prfm_4.jpg',
        tags: ['System Core', 'Premium Base'],
        details: {
            topNotes: 'Sandalwood, Cardamom',
            middleNotes: 'Violet, Papyrus',
            baseNotes: 'Leather, Virginia Cedar',
            longevity: '8-10 Jam'
        }
    }
];
