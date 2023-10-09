import { FC } from 'react'
import styles from './DateBlock.module.scss'

const DateBlock: FC = () => {
	const now: Date = new Date()
	const date: string = new Intl.DateTimeFormat('ru', {
		dateStyle: 'full',
	})
		.format(now)
		.slice(0, -8)

	return (
		<div className={styles.date}>
			<b>Сегодня</b> {date}
		</div>
	)
}

export default DateBlock
