import { useState } from 'react';
import './App.css';
import { OlympicRings } from './OlympicRings';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<OlympicRings />
		</>
	);
}

export default App;
