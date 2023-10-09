import { ChangeEvent, FC, useState } from 'react'
import { ITask } from '../../models/ITask'
import { taskApi } from '../../services/TaskService'
import styles from './ChangeTaskPopup.module.scss'

interface ChangeTaskPopupProps {
	task: ITask
	setPopupOpen: (bool: boolean) => void
}

const ChangeTaskPopup: FC<ChangeTaskPopupProps> = ({ task, setPopupOpen }) => {
	const [updateTask, {}] = taskApi.useUpdateTaskMutation()
	const [selectedColor, setSelectedColor] = useState(task.color)
	const [title, setTitle] = useState(task.title)
	const [body, setBody] = useState(task.body)

	const handleClose = () => {
		updateTask({ title, body, color: selectedColor, id: task.id })
		setPopupOpen(false)
	}

	return (
		<div className={styles.popup}>
			<div className={styles.popupFade} onClick={handleClose}></div>
			<div className={styles.popupWindow}>
				<div className={styles.popupHead}>
					<div
						className={styles.color}
						style={{ background: selectedColor }}
					></div>
					<span>{title}</span>
				</div>
				<div className={styles.changeBlock}>
					<input
						type='text'
						value={title}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setTitle(e.target.value)
						}
						className={styles.inputTitle}
						placeholder='Название'
						maxLength={70}
					/>
					<textarea
						className={styles.inputBody}
						value={body}
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
							setBody(e.target.value)
						}
						placeholder='Описание'
					></textarea>
					<div className={styles.chooseColor}>
						<ul>
							<li
								onClick={() => {
									setSelectedColor('transparent')
								}}
								className={selectedColor === 'transparent' ? styles.active : ''}
							>
								<div
									className={styles.color}
									style={{ background: 'transparent' }}
								></div>
								Нет
							</li>
							<li
								onClick={() => {
									setSelectedColor('red')
								}}
								className={selectedColor === 'red' ? styles.active : ''}
							>
								<div
									className={styles.color}
									style={{ background: 'red' }}
								></div>
								Красный
							</li>
							<li
								onClick={() => {
									setSelectedColor('green')
								}}
								className={selectedColor === 'green' ? styles.active : ''}
							>
								<div
									className={styles.color}
									style={{ background: '#00C72C' }}
								></div>
								Зеленый
							</li>
							<li
								onClick={() => {
									setSelectedColor('blue')
								}}
								className={selectedColor === 'blue' ? styles.active : ''}
							>
								<div
									className={styles.color}
									style={{ background: 'blue' }}
								></div>
								Синий
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChangeTaskPopup
