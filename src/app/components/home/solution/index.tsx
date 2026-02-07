'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

function Solutions() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section id="solution">
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div
            ref={ref}
            className='py-16 md:py-28 px-6 border border-dark_black/10 dark:border-white/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] dark:bg-linear-to-r dark:from-dark_blue_gradient dark:via-black dark:to-dark_yellow_gradient backdrop-blur-[200px]'>
            <motion.div
              {...bottomAnimation}
              className='flex flex-col gap-6 items-center md:max-w-3xl mx-auto'>
              <div className='flex flex-col gap-3 items-center text-center'>
                <h2 className='text-3xl md:text-5xl'>
                  <TextGenerateEffect words="Solusi Inovatif untuk" />
                  <TextGenerateEffect
                    words="Karakter yang Berani"
                    delay={1}
                    className="italic font-normal instrument-font"
                  />
                </h2>
                <p>
                  Siap untuk meng-install rasa percaya diri baru?
                  Kami meracik pengalaman sensorik yang tak terlupakan melalui setiap botol Scentax.
                  Mari ciptakan impresi yang presisi di setiap interaksi.
                </p>
              </div>
              <Link
                href='/contact'
                className='group w-fit text-white font-medium bg-dark_black dark:bg-white dark:text-dark_black rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent hover:text-dark_black dark:hover:bg-transparent dark:hover:text-white border border-dark_black dark:border-white transition-all duration-200'>
                <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                  Mari Berkolaborasi
                </span>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out group-hover:rotate-45'>
                  <rect
                    width='32'
                    height='32'
                    rx='16'
                    className='fill-white dark:fill-dark_black transition-colors duration-200 ease-in-out group-hover:fill-dark_black dark:group-hover:fill-white'
                  />
                  <path
                    d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                    strokeWidth='1.42857'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white dark:group-hover:stroke-dark_black'
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
