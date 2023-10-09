import { FC, useState } from 'react'
import logo from '../../assets/logo.svg'
import styles from './Header.module.scss'

const Header: FC = () => {
	const [nightMode, setNightMode] = useState(false)
	const handleToggleNightMode = () => {
		setNightMode(prev => !prev)
		if (!nightMode) {
			document.documentElement.setAttribute('data-theme', 'dark')
		} else {
			document.documentElement.setAttribute('data-theme', '')
		}
	}

	return (
		<div className={styles.header}>
			<img src={logo} alt='logo'></img>
			<svg
				className={nightMode ? styles.svgActive : ''}
				onClick={handleToggleNightMode}
				xmlns='http://www.w3.org/2000/svg'
				width='37'
				height='37'
				viewBox='0 0 37 37'
				// fill='none'
			>
				<path
					d='M33.0968 21.3422C33.0991 21.3516 33.1005 21.361 33.1011 21.3705L33.0868 21.4171C32.2148 24.2638 30.4673 26.7629 28.0929 28.559C26.0093 30.1269 23.53 31.0831 20.9332 31.3204C18.336 31.5578 15.724 31.0665 13.3904 29.9018C11.0568 28.7372 9.09406 26.9451 7.72239 24.7269C6.35072 22.5087 5.62444 19.9521 5.62508 17.344L5.62507 17.3407C5.61569 14.2984 6.60469 11.3371 8.44034 8.91103L8.44045 8.91088C10.2366 6.53608 12.736 4.78826 15.5829 3.91614L15.5843 3.91572C15.6115 3.90736 15.6404 3.90656 15.6679 3.9134C15.6955 3.92025 15.7207 3.93448 15.7408 3.95456C15.7609 3.97465 15.7751 3.99983 15.7819 4.0274C15.7888 4.05497 15.788 4.08388 15.7796 4.11103L15.7781 4.11593C15.0593 6.49384 14.999 9.02223 15.6037 11.4317C16.2085 13.8412 17.4556 16.0414 19.2122 17.798C20.9688 19.5546 23.169 20.8017 25.5785 21.4065C27.988 22.0112 30.5163 21.9509 32.8943 21.2321L32.8992 21.2306C32.9263 21.2222 32.9552 21.2214 32.9828 21.2282C33.0104 21.2351 33.0355 21.2493 33.0556 21.2694C33.0757 21.2895 33.0899 21.3147 33.0968 21.3422Z'
					stroke='#F8F8F8'
					strokeWidth='2'
				/>
			</svg>
		</div>
	)
}
export default Header
