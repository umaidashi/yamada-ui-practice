import Layout from '@/components/layouts/Layout'
import { Button, HStack, Heading, Input, Text, VStack } from '@yamada-ui/react'
import { useState } from 'react'

enum TodoStatus {
	Todo = 'todo',
	Done = 'done',
}

type TodoType = {
	title: string
	description: string
	status: TodoStatus
}

const mockTodos: TodoType[] = [
	{
		title: 'Learn Next.js',
		description: 'Learn Next.js with yamada-ui',
		status: TodoStatus.Todo,
	},
	{
		title: 'Learn Tailwind CSS',
		description: 'Learn Tailwind CSS with yamada-ui',
		status: TodoStatus.Done,
	},
]

export default function Todo() {
	const [todos, setTodos] = useState<TodoType[]>(mockTodos)
	const [todoInput, setTodoInput] = useState('')
	return (
		<Layout title='Todo'>
			<Heading as='h1'>Todo</Heading>

			<VStack>
				<HStack>
					<Input
						value={todoInput}
						onChange={e => setTodoInput(e.target.value)}
						placeholder='Add a new task'
					/>
					<Button
						colorScheme='primary'
						onClick={() => {
							setTodos([
								...todos,
								{ title: todoInput, description: '', status: TodoStatus.Todo },
							])
							setTodoInput('')
						}}
					>
						Add
					</Button>
				</HStack>
				<VStack>
					{todos.map((todo, i) => (
						<HStack key={`${i}-${todo.title}`}>
							<Text as={todo.status === TodoStatus.Done ? 'del' : 'p'}>
								{todo.title}
							</Text>
							<Button
								colorScheme='danger'
								size='sm'
								onClick={() => {
									const newTodos = todos.filter((_, index) => index !== i)
									setTodos(newTodos)
								}}
							>
								Delete
							</Button>
							{todo.status === TodoStatus.Todo && (
								<Button
									colorScheme='primary'
									size='sm'
									onClick={() => {
										const newTodos = todos.map((t, index) => {
											if (index === i) {
												return {
													...t,
													status: TodoStatus.Done,
												}
											}
											return t
										})
										setTodos(newTodos)
									}}
								>
									Done
								</Button>
							)}
						</HStack>
					))}
				</VStack>
			</VStack>
		</Layout>
	)
}
