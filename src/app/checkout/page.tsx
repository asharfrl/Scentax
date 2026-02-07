'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react/dist/iconify.js'

function CheckoutForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const productSlug = searchParams.get('product')
    const product = products.find(p => p.slug === productSlug)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState<'qris' | 'midtrans'>('midtrans')

    if (!product) {
        return (
            <div className="text-center py-20 text-dark_black dark:text-white">
                <h2 className="text-2xl mb-4">Produk tidak ditemukan</h2>
                <Link href="/" className="text-purple bg-purple/10 px-6 py-2 rounded-full">Kembali ke Katalog</Link>
            </div>
        )
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API/Payment Gateway Processing
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto bg-green/10 dark:bg-white/5 border border-green/20 dark:border-white/10 rounded-3xl p-10 text-center text-dark_black dark:text-white space-y-6"
            >
                <div className="w-24 h-24 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon
                        icon='ix:success-filled'
                        width='50'
                        height='50'
                        style={{ color: '#22c55e' }}
                    />
                </div>
                <h2 className="text-4xl font-medium">Pembayaran Berhasil!</h2>
                <p className="text-dark_black/60 dark:text-white/60 text-lg leading-relaxed">
                    Terima kasih, <strong>{formData.name}</strong>.<br />
                    Pesanan Anda untuk <strong>{product.name}</strong> telah terkonfirmasi. Resi pengiriman akan dikirimkan ke {formData.email} dan WhatsApp Anda.
                </p>
                <div className="pt-4">
                    <Link
                        href="/"
                        className='group w-fit mx-auto text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-3 pl-6 pr-3 transition-all duration-200 ease-in-out hover:shadow-lg hover:opacity-90'>
                        <span className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-2'>
                            Kembali ke Beranda
                        </span>
                        <div className='bg-white dark:bg-dark_black rounded-full p-2'>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark_black dark:text-white transform group-hover:-rotate-45 transition-transform">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </Link>
                </div>
            </motion.div>
        )
    }

    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
            {/* Order Summary */}
            <div className="space-y-8 order-2 lg:order-1">
                <div className="bg-white dark:bg-dark_black border border-dark_black/10 dark:border-white/10 rounded-3xl p-8 shadow-sm">
                    <h2 className="text-2xl font-medium text-dark_black dark:text-white mb-6">Ringkasan Pesanan</h2>

                    <div className="flex gap-6 items-start pb-8 border-b border-dark_black/10 dark:border-white/10">
                        <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/10 flex-shrink-0 border border-gray-200 dark:border-white/20">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <h3 className="text-xl font-medium text-dark_black dark:text-white">{product.name}</h3>
                            <p className="text-dark_black/60 dark:text-white/60 text-sm italic">{product.tagline}</p>
                            <div className="flex gap-2">
                                {product.tags.slice(0, 1).map((tag, i) => (
                                    <span key={i} className="text-xs border border-dark_black/10 dark:border-white/20 px-2 py-1 rounded-md text-dark_black/60 dark:text-white/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <div className="flex justify-between text-dark_black/60 dark:text-white/60">
                            <span>Harga Satuan</span>
                            <span>Rp {product.price.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-dark_black/60 dark:text-white/60">
                            <span>Biaya Layanan</span>
                            <span>Rp 5.000</span>
                        </div>
                        <div className="flex justify-between text-dark_black/60 dark:text-white/60 border-b border-dark_black/10 dark:border-white/10 pb-6">
                            <span>Pajak (11%)</span>
                            <span>Rp {(product.price * 0.11).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-lg font-medium text-dark_black dark:text-white">Total Pembayaran</span>
                            <span className="text-2xl font-medium text-dark_black dark:text-white instrument-font italic">
                                Rp {(product.price * 1.11 + 5000).toLocaleString('id-ID')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Payment Method Selection */}
                <div className="bg-white dark:bg-dark_black border border-dark_black/10 dark:border-white/10 rounded-3xl p-8 shadow-sm space-y-6">
                    <h2 className="text-2xl font-medium text-dark_black dark:text-white">Metode Pembayaran</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <button
                            type="button"
                            onClick={() => setPaymentMethod('midtrans')}
                            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 ${paymentMethod === 'midtrans'
                                ? 'border-purple bg-purple/5 dark:bg-purple/10'
                                : 'border-dark_black/10 dark:border-white/10 hover:border-dark_black/30 dark:hover:border-white/30'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-[#0052cc] rounded flex items-center justify-center text-white font-bold text-xs p-1">
                                    Midtrans
                                </div>
                                <div className="text-left">
                                    <p className="font-medium text-dark_black dark:text-white">Payment Gateway</p>
                                    <p className="text-xs text-dark_black/50 dark:text-white/50">OVO, GoPay, ShopeePay, Cards</p>
                                </div>
                            </div>
                            {paymentMethod === 'midtrans' && (
                                <div className="w-6 h-6 rounded-full bg-purple flex items-center justify-center">
                                    <Icon icon="mdi:check" className="text-white w-4 h-4" />
                                </div>
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={() => setPaymentMethod('qris')}
                            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 ${paymentMethod === 'qris'
                                ? 'border-purple bg-purple/5 dark:bg-purple/10'
                                : 'border-dark_black/10 dark:border-white/10 hover:border-dark_black/30 dark:hover:border-white/30'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-xs">
                                    QRIS
                                </div>
                                <div className="text-left">
                                    <p className="font-medium text-dark_black dark:text-white">QRIS Direct</p>
                                    <p className="text-xs text-dark_black/50 dark:text-white/50">Scan langsung (Simulasi)</p>
                                </div>
                            </div>
                            {paymentMethod === 'qris' && (
                                <div className="w-6 h-6 rounded-full bg-purple flex items-center justify-center">
                                    <Icon icon="mdi:check" className="text-white w-4 h-4" />
                                </div>
                            )}
                        </button>
                    </div>

                    {paymentMethod === 'qris' && (
                        <div className="bg-white p-6 rounded-xl border border-dashed border-dark_black/20 w-full text-center mt-4 flex flex-col items-center">
                            <div className="font-bold text-lg mb-2 text-dark_black">QRIS</div>
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                                <Image
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Bayar ${product.name} - Rp ${(product.price * 1.11 + 5000).toLocaleString('id-ID')}`}
                                    alt="QRIS Code"
                                    width={200}
                                    height={200}
                                    className="w-48 h-48 object-contain"
                                    unoptimized
                                />
                            </div>
                            <p className="text-sm text-dark_black/60 mt-3 max-w-xs">
                                Scan QR code di atas dengan aplikasi pembayaran Anda.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Customer Details Form */}
            <div className="bg-white dark:bg-dark_black border border-dark_black/10 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm order-1 lg:order-2">
                <h2 className="text-2xl font-medium text-dark_black dark:text-white mb-8">Data Pengiriman</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="w-full">
                        <label htmlFor="name" className="text-dark_black dark:text-white mb-2 block">Nama Lengkap</label>
                        <input
                            className="w-full rounded-full border px-5 py-3 outline-none transition dark:border-white/20 border-dark_black/10 focus:border-dark_black dark:focus:border-white bg-transparent dark:bg-black/20 text-dark_black dark:text-white"
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Ashar Farial"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="text-dark_black dark:text-white mb-2 block">Email</label>
                        <input
                            className="w-full rounded-full border px-5 py-3 outline-none transition dark:border-white/20 border-dark_black/10 focus:border-dark_black dark:focus:border-white bg-transparent dark:bg-black/20 text-dark_black dark:text-white"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="shar123@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="phone" className="text-dark_black dark:text-white mb-2 block">Nomor WhatsApp</label>
                        <input
                            className="w-full rounded-full border px-5 py-3 outline-none transition dark:border-white/20 border-dark_black/10 focus:border-dark_black dark:focus:border-white bg-transparent dark:bg-black/20 text-dark_black dark:text-white"
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="08123456789"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="address" className="text-dark_black dark:text-white mb-2 block">Alamat Lengkap</label>
                        <textarea
                            className="w-full rounded-3xl border px-5 py-3 outline-none transition dark:border-white/20 border-dark_black/10 focus:border-dark_black dark:focus:border-white bg-transparent dark:bg-black/20 text-dark_black dark:text-white resize-none"
                            id="address"
                            name="address"
                            required
                            rows={4}
                            placeholder="JL. Jalanan..."
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='group w-full text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center justify-between py-3 pl-6 pr-3 transition-all duration-200 ease-in-out hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'>
                            <span className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-2'>
                                {isSubmitting ? 'Memproses...' : paymentMethod === 'midtrans' ? 'Bayar dengan Midtrans' : 'Konfirmasi Pembayaran'}
                            </span>
                            <div className='bg-white dark:bg-dark_black rounded-full p-2.5'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark_black dark:text-white transform group-hover:-rotate-45 transition-transform duration-200">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full text-dark_black dark:text-white font-medium bg-transparent border border-dark_black/10 dark:border-white/10 rounded-full flex items-center justify-center gap-3 py-3 hover:bg-dark_black/5 dark:hover:bg-white/5 transition-all duration-200 group"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                            <path d="M19 12H5m7 7l-7-7 7-7" />
                        </svg>
                        <span>Batal & Kembali</span>
                    </button>

                </form>
            </div >
        </div >
    )
}



export default function CheckoutPage() {
    return (
        <section>
            <div className='relative w-full pt-28 md:pt-40 pb-20 2xl:pb-32 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
                <div className="container mx-auto px-4 md:px-8 relative z-10">


                    <h1 className="text-4xl md:text-5xl font-medium text-dark_black dark:text-white mb-12 text-center instrument-font italic">
                        Checkout / Payment
                    </h1>

                    <Suspense fallback={<div className="text-center p-10 text-dark_black dark:text-white">Loading data...</div>}>
                        <CheckoutForm />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}
