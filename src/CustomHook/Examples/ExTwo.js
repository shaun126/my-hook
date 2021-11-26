import useWindowWidth from './useWindowWidth';

const ExTwo = () => {
	// This the way to use customHook
	const onSmallScreen = useWindowWidth(768);

	return (
		<div style={{ border: '1px solid blue' }} className={onSmallScreen ? 'Small' : 'Large'}>
			<h2>Second Example: Making custom hook using Custom Hook</h2>

			<p>Resize browser window to see the effect</p>
			<p>This will work for less than 768 px</p>

			<h3 style={onSmallScreen ? { background: 'green', color: 'white' } : { background: 'blue' }}>
				You are browsing on {onSmallScreen ? '"Small"' : '"Large"'} screen
			</h3>
		</div>
	);
};

export default ExTwo;
