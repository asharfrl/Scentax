import { NextResponse } from "next/server";

const headerData = [
    { label: 'Tentang Kami', href: '/#aboutus' },
    { label: 'Rekomendasi', href: '/#services' },
    { label: 'Produk', href: '/#work' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Kontak', href: '/#solution' },
    // { label: 'Team', href: '/#team' },
    // { label: 'Pricing', href: '/#pricing' },
    // { label: 'Awards', href: '/#awards' },
    // { label: 'Kontak', href: '/contact' },
];

const mobileHeaderData = [
    { label: 'Kontak', href: '/contact' },
];

const footerData = {
    brand: {
        name: "SCENTAX",
        tagline: "Your Signature Scent Starts Here",
        socialLinks: [
            // {
            //     icon: "/images/home/footerSocialIcon/twitter.svg",
            //     dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
            //     link: "https://twitter.com"
            // },
            // {
            //     icon: "/images/home/footerSocialIcon/linkedin.svg",
            //     dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
            //     link: "https://linkedin.com/in"
            // },
            // {
            //     icon: "/images/home/footerSocialIcon/dribble.svg",
            //     dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
            //     link: "https://dribbble.com"
            // },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/scentax_perfume/"
            }
        ]
    },
    sitemap: {
        name: "Pages",
        links: [
            { name: "Kontak", url: "/contact" },
            { name: "Tentang Kami", url: "/#aboutus" },
            { name: "Produk", url: "/#work" },
            { name: "Rekomendasi", url: "/#services" },
            { name: "FAQ", url: "/#faq" }
        ]
    },
    // otherPages: {
    //     name: "Other Pages",
    //     links: [
    //         { name: "Error 404", url: "/not-found" },
    //         { name: "Terms & Conditions", url: "/terms-and-conditions" },
    //         { name: "Privacy Policy", url: "/privacy-policy" },
    //         { name: "Documentation", url: "/documentation" }
    //     ]
    // },
    contactDetails: {
        name: "Detail Kontak",
        address: "Jl. Cakrawala No.5, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        email: "muhammad.ashar.240533@students.um.ac.id",
        phone: "+62 899 4635 579"
    },
    copyright: "© 2026 Scentax Team. Mahasiswa PTI Universitas Negeri Malang"
};

export const GET = async () => {
    return NextResponse.json({
        headerData,
        mobileHeaderData,
        footerData
    });
};