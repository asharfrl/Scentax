import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={117}
                height={34}
                style={{ width: '150px', height: 'auto' }}

                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/logo-dark.png"
                alt="logo"
                width={160}
                height={50}
                style={{ width: '150px', height: 'auto' }}

                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
