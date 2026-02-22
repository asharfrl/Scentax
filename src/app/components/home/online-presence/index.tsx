'use client'
import { products } from '@/data/products'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

function OnlinePresence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const bottomAnimation = (index: number) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
    transition: { duration: 0.8, delay: 0.4 + index * 0.2, },
  })

  return (
    <section id='work'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-2xl text-center'>
              <h2>
                <TextGenerateEffect words="Fokus pada karakter, bukan sekadar" duration={0.5} />
                <TextGenerateEffect
                  words="janji aroma"
                  delay={1.2}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8 w-full'>
              {products.map((item, index) => (
                <motion.div
                  key={item.id}
                  className='group flex flex-col gap-6 cursor-pointer'
                  {...bottomAnimation(index)}
                >
                  <div className='relative rounded-2xl overflow-hidden'>
                    <Link href={`/product/${item.slug}`} className="block">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={625}
                        height={410}
                        className={`w-full object-cover aspect-[4/3] transition-all duration-500 rounded-2xl ${item.isComingSoon ? 'blur-md scale-105 group-hover:blur-lg' : ''}`}
                      />
                      <div className={`absolute top-0 left-0 w-full h-full rounded-2xl flex items-center justify-center transition-all duration-300 ${item.isComingSoon ? 'bg-black/30' : 'bg-black/50 opacity-0 group-hover:opacity-100'}`}>
                        {item.isComingSoon ? (
                          <div className="flex flex-col items-center text-white p-4 text-center">
                            <Icon icon="mdi:eye-off-outline" className="text-4xl mb-2" />
                            <span className="text-xl font-bold tracking-widest">COMING SOON</span>
                          </div>
                        ) : (
                          <span className='flex justify-end p-5 w-full h-full items-start'>
                            <Icon
                              icon='icon-park-solid:circle-right-up'
                              width='50'
                              height='50'
                              style={{ color: '#fbfbfb' }}
                            />
                          </span>
                        )}
                      </div>
                    </Link>
                  </div>

                  <div className='flex flex-col items-start gap-4'>
                    <h3 className='group-hover:text-grey text-2xl font-medium'>
                      {item.name}
                    </h3>
                    <div className='flex gap-3'>
                      {item.tags.map((tag, idx) => (
                        <p
                          key={idx}
                          className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white transition-colors'
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
