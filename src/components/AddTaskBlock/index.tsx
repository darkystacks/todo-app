import { ChangeEvent, FC, useState } from 'react'
import { ITask } from '../../models/ITask'
import { taskApi } from '../../services/TaskService'
import styles from './AddTaskBlock.module.scss'

interface AddTaskBlockProps {
	setIsOpen: (bool: boolean) => void
}

const AddTaskBlock: FC<AddTaskBlockProps> = ({ setIsOpen }) => {
	const [createTask, {}] = taskApi.useCreateTaskMutation()
	const [selectedColor, setSelectedColor] = useState('')
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const handleSubmit = () => {
		if (!title) {
			alert('Поле название не может быть пустым!')
			return
		}
		if (!selectedColor) {
			alert('Поле цвет не может быть пустым!')
			return
		}

		createTask({ title, body, color: selectedColor } as ITask)
		setIsOpen(false)
	}
	return (
		<div className={styles.formWrapper}>
			<form className={styles.addForm}>
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
							<div className={styles.color} style={{ background: 'red' }}></div>
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
				<div className={styles.submitBlock}>
					<div className={styles.decline} onClick={() => setIsOpen(false)}>
						Отмена
					</div>
					<div className={styles.addTask} onClick={handleSubmit}>
						Добавить задачу
					</div>
				</div>
			</form>
		</div>
	)
}

export default AddTaskBlock
