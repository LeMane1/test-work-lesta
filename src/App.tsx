import Content from './components/Content'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

function App() {

	const [sortValue, setSortValue] = useState<string>('')
	const [showNewShips, setShowNewShips] = useState<boolean>(false)

	const handleOnChangeSort = (value: string) => setSortValue(value)

	const handleScroll = () => {
		const items = document.querySelectorAll('.item')
		const lastItem = items[items.length - 1]
		const position = lastItem.getBoundingClientRect()
		setShowNewShips(position.top < window.innerHeight)
	}

	return (
		<div className='pt-2'
			style={{
				height: "100vh",
				overflowY: "scroll"
			}}
			onScroll={handleScroll}
		>
			<Container>
				<Header className="mb-4" onChangeSort={handleOnChangeSort} />
				<Content sortValue={sortValue} showNewShips={showNewShips} />
			</Container>
		</div>
	);
}

export default App;
