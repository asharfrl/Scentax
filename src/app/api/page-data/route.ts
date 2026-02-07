import { NextResponse } from 'next/server'

const avatarList = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'Webflow',
  },
]

const innovationList = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Brand\nStrategy',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Digital\nMarketing',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX\nDesign',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Analytics &\nReporting',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Web\nDevelopment',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList = [
  {
    image: '/images/home/onlinePresence/prfm_1.jpg',
    title: 'Null',
    tag: ['Clean Code', 'Deep Work'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/prfm_2.jpg',
    title: 'Boolean',
    tag: ['Balanced Logic', 'Universal'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/prfm_3.jpg',
    title: 'OverClock',
    tag: ['High Performance', 'Midnight Build'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/prfm_4.jpg',
    title: 'Kernel',
    tag: ['System Core', 'Premium Base'],
    link: 'https://www.wrappixel.com/',
  },
]

const creativeMindList = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Logan Dang',
    position: 'WordPress Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Ana Belić',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Brian Hanley',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'TechDriven',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Inovasi',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Unisex',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter',
    plan_descp: 'For companies who need design support. One request at a time',
    plan_price: '$2500',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Design Updates Every 2 Days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2x Calls Per Month',
      'License free assets',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Pro',
    plan_descp: '2x the speed. Great for an MVP, Web App or complex problem',
    plan_price: '$3800',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Design Updates Daily',
      'Senior-level Designer',
      'AI Advisory Framework',
      'Full-service Creative Team',
      '4x Calls Per Month',
      'License free assets',
    ],
  },
]

const faqList = [
  {
    faq_que: 'Apa itu Scentax dan mengapa menggunakan tema teknologi?',
    faq_ans:
      'Scentax adalah brand parfum unisex yang menggabungkan dunia wewangian (Scent) dengan presisi logika pemrograman (Syntax). Brand ini dikembangkan oleh mahasiswa Pendidikan Teknik Informatika Universitas Negeri Malang sebagai inovasi dalam mata kuliah Technopreneur, di mana kami percaya bahwa setiap individu memiliki kepribadian yang bisa direpresentasikan melalui aroma.',
  },
  {
    faq_que: 'Bagaimana cara kerja fitur "Scent Recommender"?',
    faq_ans:
      'Fitur ini menggunakan algoritma cerdas untuk merekomendasikan parfum yang paling sesuai dengan kepribadian dan preferensi Anda. Cukup jawab beberapa pertanyaan singkat, dan kami akan menyajikan pilihan parfum yang paling cocok untuk Anda.',
  },
  {
    faq_que: 'Apakah aromanya benar-benar bisa digunakan oleh pria maupun wanita?',
    faq_ans:
      'Tentu saja! Scentax dirancang sebagai parfum unisex, artinya cocok digunakan oleh pria maupun wanita. Kami percaya bahwa aroma yang baik tidak mengenal gender, dan setiap individu berhak mengekspresikan dirinya melalui wewangian.',
  },
  {
    faq_que: 'Berapa lama ketahanan aroma parfum Scentax?',
    faq_ans:
      'Ketahanan aroma parfum Scentax bervariasi tergantung pada jenis parfum dan aktivitas Anda. Namun, secara umum parfum kami dapat bertahan hingga 6-8 jam setelah pemakaian. Untuk hasil terbaik, kami sarankan untuk menyemprotkan parfum pada titik nadi seperti pergelangan tangan, leher, dan belakang telinga.',
  },
  {
    faq_que: 'Bagaimana jika produk yang saya terima pecah atau bermasalah?',
    faq_ans:
      'Kami memahami kekhawatiran Anda. Jika produk yang Anda terima dalam kondisi pecah atau bermasalah, jangan khawatir! Silakan segera hubungi tim layanan pelanggan kami melalui WhatsApp atau email yang tertera di website. Kami akan dengan senang hati membantu Anda dan memberikan solusi terbaik, termasuk penggantian produk jika diperlukan.',
  },
  {
    faq_que: 'Apakah Scentax akan merilis varian baru di masa yang akan datang?',
    faq_ans:
      'Tentu saja! Kami berencana untuk terus berinovasi dan mengembangkan varian parfum baru di masa mendatang. Pantau terus media sosial dan website kami untuk mendapatkan informasi terbaru mengenai peluncuran produk baru.',
  },
]

const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: 'https://dribbble.com/wrappixel',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
