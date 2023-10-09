import { FC } from 'react'
import styles from './TasksEmpty.module.scss'
import emptyPng from '../../assets/empty.png'

const TasksEmpty: FC = () => {
	return (
		<div className={styles.empty}>
			<img src={emptyPng} alt='empty!' />
			<span>Похоже, задач не осталось, так держать!</span>
		</div>
	)
}

export default TasksEmpty
