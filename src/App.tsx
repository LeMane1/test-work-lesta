import Content from './components/Content'
import Header from './components/Header'
import { Container } from 'react-bootstrap'

function App() {

	return (
		<div className='mt-5 mb-5'>
			<Container>
				<Header className="mb-3" />
				<Content />
			</Container>
		</div>
	);
}

export default App;
