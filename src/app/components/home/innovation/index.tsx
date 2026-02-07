'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import ScentRecommender from '../scent-recommender'

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [showRecommender, setShowRecommender] = useState(false);

  const bottomAnimation = (index: any) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })
  return (
    <section id='services'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            {/* <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-(--breakpoint-Xsm) text-center'>
                <h2>
                  <TextGenerateEffect words="Where innovation meets" delay={0.4} />
                  <TextGenerateEffect
                    words="aesthetics"
                    delay={1}
                    className="italic font-normal instrument-font"
                  />
                </h2>
              </motion.div>
              <div ref={ref} className='w-full'>
                <div
                  className='grid auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 w-full'>
                  {innovationList?.map((items: any, index: any) => {
                    return (
                      <motion.div
                        key={index}
                        className={`${items.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9`}
                        initial={{ scale: 1.2, opacity: 0, filter: 'blur(8px)' }}
                        animate={inView ? { scale: 1, opacity: 1, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: 'easeInOut' }}
                      >
                        <div>
                          <Image
                            src={items.image}
                            alt='image'
                            height={40}
                            width={40}
                          />
                        </div>
                        <div>
                          <h3 className={`text-2xl ${items.txt_color}`}>
                            {items.title.split('\n')?.map((line: any, i: number) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </h3>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div> */}
            <div
              className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full min-h-[400px] transition-all duration-500'>

              {showRecommender ? (
                <div className="w-full relative fade-in">
                  <button
                    onClick={() => setShowRecommender(false)}
                    className="absolute top-0 right-0 z-20 text-white/50 hover:text-white p-2"
                    title="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  <ScentRecommender />
                </div>
              ) : (
                <>
                  <h4 className='text-white text-center xl:text-left'>
                    Bingung memilih varian yang cocok dengan environment kerja Anda?
                    <br />
                    Temukan rekomendasi kami untuk
                    <br />
                    menemukan wangi yang paling sinkron dengan kepribadian Anda.
                    <br />
                    <br />
                    Program Aroma Anda Sendiri!
                    <br />
                    <br />
                    Bebas Bug, Hanya Aroma Murni
                  </h4>
                  <div className='flex flex-col sm:flex-row gap-3 items-center'>
                    <button
                      onClick={() => setShowRecommender(true)}
                      className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer'>
                      <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                        Temukan Aromamu
                      </span>
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out'>
                        <rect
                          width='32'
                          height='32'
                          rx='16'
                          fill='#1B1D1E'
                          className=' transition-colors duration-200 ease-in-out group-hover:fill-white'
                        />
                        <path
                          d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                          stroke='white'
                          strokeWidth='1.42857'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='group-hover:stroke-black'
                        />
                      </svg>
                    </button>
                    <Link
                      href='/#work'
                      className='group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                      <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                        Lihat Produk
                      </span>
                      <svg
                        width='50'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out '>
                        <rect width='32' height='32' rx='16' fill='white' />
                        <path
                          d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                          stroke='#1B1D1E'
                          strokeWidth='1.42857'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
