import Image from '@/packages/components/base/Images/Image';
import IconVercel from '#/vercel.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="https://gading.dev/assets/icons/app/logo.png" size={32} alt="Vercel Logo" />
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
          Powered by{' '}
        <span className={styles.logo}>
          <IconVercel fill="currentColor" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
