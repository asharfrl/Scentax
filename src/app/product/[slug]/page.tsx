'use client'

import { products } from '@/data/products'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { useState } from 'react'

export default function ProductPage() {
    const params = useParams()
    const slug = params?.slug as string
    const product = products.find((p) => p.slug === slug)

    const router = useRouter()
    const [showComingSoon, setShowComingSoon] = useState(false)

    const handleComingSoon = () => {
        setShowComingSoon(true)
        setTimeout(() => setShowComingSoon(false), 2000)
    }

    if (!product) {
        return notFound()
    }

    return (
        <section>
            <div className='relative w-full pt-28 md:pt-40 pb-20 2xl:pb-32 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
                <div className="container mx-auto px-4 md:px-8 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full max-w-xl mx-auto lg:mx-0 p-4"
                        >
                            <div className="relative aspect-[4/5] w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-[2.5rem] transform rotate-3 dark:from-white/5 opacity-50" />
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-white/5 border border-white/20">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={`object-cover transition-all duration-700 ${product.isComingSoon ? 'blur-xl scale-110' : 'hover:scale-105'}`}
                                        priority
                                    />
                                    {product.isComingSoon && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white p-6 text-center">
                                            <Icon icon="mdi:eye-off-outline" className="text-6xl mb-4 opacity-90" />
                                            <h3 className="text-3xl font-bold tracking-tighter mb-2">COMING SOON</h3>
                                            <p className="text-sm font-medium leading-tight max-w-[200px] opacity-80">
                                                this picture holds something that could spark your excitement
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>


                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col gap-8 text-dark_black dark:text-white"
                        >
                            <div className="space-y-4">
                                <div className="flex gap-3 flex-wrap">
                                    {product.tags.map((tag, i) => (
                                        <span key={i} className="text-xs tracking-wider uppercase border border-dark_black/10 dark:border-white/20 px-4 py-1.5 rounded-full text-dark_black/70 dark:text-white/70 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="text-5xl md:text-7xl font-medium tracking-tight">
                                    {product.name}
                                </h1>
                                <TextGenerateEffect
                                    words={product.tagline}
                                    className="font-mono text-dark_black/60 dark:text-white/50 text-base md:text-lg"
                                />
                            </div>

                            <div className="space-y-8">
                                <p className="text-lg text-dark_black/80 dark:text-white/80 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-8 border-y border-dark_black/10 dark:border-white/10">
                                    <div className="space-y-2">
                                        <span className="text-xs text-dark_black/40 dark:text-white/40 uppercase tracking-widest font-semibold">Top Notes</span>
                                        <p className="font-medium text-lg">{product.details.topNotes}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs text-dark_black/40 dark:text-white/40 uppercase tracking-widest font-semibold">Middle Notes</span>
                                        <p className="font-medium text-lg">{product.details.middleNotes}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs text-dark_black/40 dark:text-white/40 uppercase tracking-widest font-semibold">Base Notes</span>
                                        <p className="font-medium text-lg">{product.details.baseNotes}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs text-dark_black/40 dark:text-white/40 uppercase tracking-widest font-semibold">Longevity</span>
                                        <p className="font-medium text-lg">{product.details.longevity}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 pt-4 relative">
                                <div>
                                    <span className="text-sm text-dark_black/50 dark:text-white/50 block mb-1 font-medium">Price</span>
                                    <span className="text-4xl font-medium instrument-font italic block min-w-[150px]">
                                        {product.isComingSoon ? (
                                            <span className="text-dark_black/40 dark:text-white/40">Coming Soon</span>
                                        ) : (
                                            `Rp ${product.price.toLocaleString('id-ID')}`
                                        )}
                                    </span>
                                </div>

                                {product.isComingSoon ? (
                                    <button
                                        onClick={handleComingSoon}
                                        className='group flex-1 w-full sm:w-auto min-w-[240px] text-white dark:text-dark_black font-medium bg-dark_black/50 dark:bg-white/50 rounded-full flex items-center justify-between py-3 pl-8 pr-3 transition-all duration-300 shadow-lg cursor-pointer overflow-hidden relative'
                                    >
                                        <span className='group-hover:translate-x-2 transform transition-transform duration-300'>
                                            Beli Sekarang
                                        </span>
                                        <div className='bg-white/30 dark:bg-dark_black/30 rounded-full p-2.5 ml-4'>
                                            <Icon icon="mdi:clock-outline" className="text-xl" />
                                        </div>
                                    </button>
                                ) : (
                                    <Link
                                        href={`/checkout?product=${product.slug}`}
                                        className='group flex-1 w-full sm:w-auto min-w-[240px] text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center justify-between py-3 pl-8 pr-3 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl'
                                    >
                                        <span className='group-hover:translate-x-2 transform transition-transform duration-300'>
                                            Beli Sekarang
                                        </span>
                                        <div className='bg-white dark:bg-dark_black rounded-full p-2.5 ml-4 shadow-sm'>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-rotate-45 transition-transform duration-300 text-dark_black dark:text-white">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </div>
                                    </Link>
                                )}

                                <AnimatePresence>
                                    {showComingSoon && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute -top-12 right-0 left-0 sm:left-auto bg-dark_black dark:bg-white text-white dark:text-dark_black px-6 py-2 rounded-full text-sm font-medium shadow-xl text-center z-50 border border-white/10"
                                        >
                                            🚀 Segera Hadir di Koleksi Kami!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                onClick={() => router.back()}
                                className="w-full mt-8 text-dark_black dark:text-white font-medium bg-transparent border border-dark_black/10 dark:border-white/10 rounded-full flex items-center justify-center gap-3 py-3 hover:bg-dark_black/5 dark:hover:bg-white/5 transition-all duration-200 group"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                                    <path d="M19 12H5m7 7l-7-7 7-7" />
                                </svg>
                                <span>Kembali</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Other Products Section */}
                    <div className="mt-12 md:mt-20 border-t border-dark_black/10 dark:border-white/10 pt-12">
                        <h3 className="text-3xl font-medium text-dark_black dark:text-white mb-8 text-center instrument-font italic">
                            Koleksi Lainnya
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
                            {products.filter(p => p.slug !== product.slug).map((otherProduct) => (
                                <Link
                                    href={`/product/${otherProduct.slug}`}
                                    key={otherProduct.slug}
                                    className="group flex flex-col gap-6 cursor-pointer"
                                >
                                    <div className="relative">
                                        <Image
                                            src={otherProduct.image}
                                            alt={otherProduct.name}
                                            width={625}
                                            height={410}
                                            className="rounded-2xl w-full object-cover aspect-[4/3]"
                                        />
                                        <div className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex transition-all duration-300'>
                                            <span className='flex justify-end p-5 w-full'>
                                                <Icon
                                                    icon='icon-park-solid:circle-right-up'
                                                    width='50'
                                                    height='50'
                                                    style={{ color: '#fbfbfb' }}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start gap-4'>
                                        <h4 className='group-hover:text-grey text-2xl font-medium transition-colors'>
                                            {otherProduct.name}
                                        </h4>
                                        <div className='flex gap-3'>
                                            {otherProduct.tags.map((tag, idx) => (
                                                <p
                                                    key={idx}
                                                    className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white transition-colors'
                                                >
                                                    {tag}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
