import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

const Layout = () => {
	return (
		<>
			<Navbar />
			<Container className='mb-4'>
				<Outlet />
			</Container>
		</>
	);
};
export default Layout;
