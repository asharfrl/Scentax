'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

import { products, Product } from '@/data/products'
import Link from 'next/link'

type ResultType = 'NULL' | 'BOOLEAN' | 'OVERCLOCK' | 'KERNEL'

const getProduct = (slug: string): Product => {
    const product = products.find(p => p.slug === slug)
    if (!product) {
        // Fallback or error handling if product is missing, though we expect it to exist
        return products[0]
    }
    return product
}

const results: Record<ResultType, Product> = {
    NULL: getProduct('null'),
    BOOLEAN: getProduct('boolean'),
    OVERCLOCK: getProduct('overclock'),
    KERNEL: getProduct('kernel'),
}

export default function ScentRecommender() {
    const [step, setStep] = useState(0)
    const [environment, setEnvironment] = useState<'light' | 'dark' | null>(null)
    const [result, setResult] = useState<Product | null>(null)

    const resetQuiz = () => {
        setStep(0)
        setEnvironment(null)
        setResult(null)
    }

    const handleEnvironmentSelect = (env: 'light' | 'dark') => {
        setEnvironment(env)
        setStep(1)
    }

    const handlePreferenceSelect = (choice: string) => {
        if (environment === 'light') {
            if (choice === 'zero') setResult(results.NULL)
            else setResult(results.BOOLEAN)
        } else {
            if (choice === 'overload') setResult(results.OVERCLOCK)
            else setResult(results.KERNEL)
        }
        setStep(2)
    }

    return (
        <div className='w-full flex flex-col items-center text-center gap-8'>
            {/* Header */}
            <div className='space-y-4'>
                <h2 className='text-3xl md:text-5xl font-medium text-white instrument-font italic'>
                    Personal Env.
                </h2>
                <p className='text-white/60 max-w-xl mx-auto'>
                    Jalankan algoritma Scentax untuk menemukan aroma yang paling sinkron dengan kepribadian Anda.
                </p>
            </div>

            {/* Quiz Container */}
            <div className='w-full max-w-2xl p-4 md:p-8 flex flex-col justify-center items-center min-h-[400px] relative'>
                <AnimatePresence mode='wait'>

                    {/* Step 0: Environment */}
                    {step === 0 && (
                        <motion.div
                            key="step0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className='w-full space-y-8'
                        >
                            <h3 className='text-xl md:text-2xl font-medium text-white'>Pilih Environment Kerja Anda:</h3>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <button
                                    onClick={() => handleEnvironmentSelect('light')}
                                    className='group p-6 border border-white/10 bg-white/5 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4'
                                >
                                    <div className='w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform text-white/70 group-hover:text-white'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-medium text-lg text-white'>Light Mode</span>
                                        <span className='text-sm text-white/50'>Siang, Terang, Outdoor</span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleEnvironmentSelect('dark')}
                                    className='group p-6 border border-white/10 bg-white/5 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4'
                                >
                                    <div className='w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform text-white/70 group-hover:text-white'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-medium text-lg text-white'>Dark Mode</span>
                                        <span className='text-sm text-white/50'>Malam, Gelap, Indoor</span>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 1: Preference */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className='w-full space-y-8'
                        >
                            <h3 className='text-xl md:text-2xl font-medium text-white'>
                                {environment === 'light' ? 'Mode Fokus Anda:' : 'Tantangan Saat Ini:'}
                            </h3>
                            <div className='grid md:grid-cols-2 gap-4'>
                                {environment === 'light' ? (
                                    <>
                                        <button
                                            onClick={() => handlePreferenceSelect('zero')}
                                            className='p-6 border border-white/10 bg-white/5 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 group'
                                        >
                                            <span className='block text-lg font-medium mb-1 text-white'>Zero Distraction</span>
                                            <span className='text-sm text-white/50'>Hening, Fokus Penuh</span>
                                        </button>
                                        <button
                                            onClick={() => handlePreferenceSelect('sync')}
                                            className='p-6 border border-white/10 bg-white/5 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 group'
                                        >
                                            <span className='block text-lg font-medium mb-1 text-white'>Harmonious Sync</span>
                                            <span className='text-sm text-white/50'>Mengalir, Seimbang</span>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handlePreferenceSelect('overload')}
                                            className='p-6 border border-white/10 bg-white/5 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 group'
                                        >
                                            <span className='block text-lg font-medium mb-1 text-white'>Overload / Deadline</span>
                                            <span className='text-sm text-white/50'>Cepat, Intens, Panas</span>
                                        </button>
                                        <button
                                            onClick={() => handlePreferenceSelect('system')}
                                            className='p-6 border border-white/10 bg-white/5 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 group'
                                        >
                                            <span className='block text-lg font-medium mb-1 text-white'>System Core / Stable</span>
                                            <span className='text-sm text-white/50'>Kuat, Stabil, Pondasi</span>
                                        </button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Result */}
                    {step === 2 && result && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className='w-full flex flex-col md:flex-row items-center gap-8'
                        >
                            <div className='w-full md:w-1/2 relative aspect-square max-w-[280px]'>
                                <div className='absolute inset-0 bg-white/10 rounded-3xl transform rotate-6'></div>
                                <div className='absolute inset-0 bg-white/5 rounded-3xl transform -rotate-3'></div>
                                <Image
                                    src={result.image}
                                    alt={result.name}
                                    fill
                                    className='object-cover rounded-3xl relative z-10 shadow-2xl'
                                />
                            </div>

                            <div className='w-full md:w-1/2 text-left space-y-5'>
                                {/* <div className='inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white/80 border border-white/5'>
                                    Detection Complete
                                </div> */}
                                <div>
                                    <h3 className='text-4xl font-medium text-white mb-2'>
                                        {result.name}
                                    </h3>
                                    <p className='text-sm font-mono text-white/60 bg-white/5 w-fit px-2 py-1 rounded-sm'>
                                        {result.tagline}
                                    </p>
                                </div>

                                <p className='text-white/80 leading-relaxed text-lg'>
                                    {result.description}
                                </p>

                                <div className='py-4'>
                                    <p className='text-white/50 italic text-sm border-l-2 border-white/20 pl-4 instrument-font'>
                                        "Karakter Anda telah terdeteksi. Gunakan varian ini untuk melanjutkan baris cerita Anda berikutnya;"
                                    </p>
                                </div>

                                <div className='flex gap-4 pt-2 items-center'>
                                    <Link
                                        href={`/product/${result.slug}`}
                                        className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center justify-between py-3 pl-6 pr-2 hover:opacity-90 transition-all duration-200'
                                    >
                                        <span className='group-hover:translate-x-1 transform transition-transform duration-200'>
                                            Beli Sekarang
                                        </span>
                                        <div className='bg-dark_black rounded-full p-2 ml-4'>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-rotate-45 transition-transform duration-200">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </div>
                                    </Link>

                                    <button
                                        onClick={resetQuiz}
                                        className='w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 text-white transition-colors'
                                        title="Restart Algorithm"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="23 4 23 10 17 10"></polyline>
                                            <polyline points="1 20 1 14 7 14"></polyline>
                                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                {/* Dots Navigation */}
                <div className='flex gap-2 mt-8 z-20'>
                    {[0, 1, 2].map((i) => (
                        <button
                            key={i}
                            disabled={i > step}
                            onClick={() => {
                                if (i < step) {
                                    setStep(i)
                                    if (i === 0) {
                                        setResult(null)
                                        setEnvironment(null)
                                    }
                                }
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === step
                                ? 'bg-white w-6'
                                : i < step
                                    ? 'bg-white/50 hover:bg-white cursor-pointer'
                                    : 'bg-white/10 cursor-not-allowed'
                                }`}
                            aria-label={`Go to step ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
