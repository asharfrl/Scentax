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
        slug: 'algorithm',
        name: 'ALGORITHM',
        tagline: '// Pure. Logical. Fragrant.',
        description: 'Algorithm bukan sekadar wewangian, melainkan sebuah formula presisi bagi Anda yang menghargai struktur dan kejelasan. Terinspirasi dari logika pemrograman yang bersih, varian ini dirancang untuk memberikan kesan profesional, cerdas, dan sophisticated. Sama seperti baris kode yang dieksekusi dengan sempurna, Algorithm hadir dengan perpaduan aroma yang seimbang, namun meninggalkan impresi yang kuat dan bertahan lama.',
        price: 55000,
        image: '/images/home/onlinePresence/prdct_1.jpg',
        tags: ['Citrus', 'Segar', 'Woody'],
        isComingSoon: false,
        details: {
            topNotes: 'Segar & Clean',
            middleNotes: 'Floral / Spicy ringan',
            baseNotes: 'Woody / Musky',
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
];
