import { Button, Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<NavbarBootstrap
			sticky='top'
			className='bg-white shadow-sm mb-3'
		>
			<Container>
				<Nav className='me-auto'>
					<Nav.Link
						to='/'
						as={NavLink}
					>
						Home
					</Nav.Link>
					<Nav.Link
						to='/store'
						as={NavLink}
					>
						Store
					</Nav.Link>
					<Nav.Link
						to='/about'
						as={NavLink}
					>
						About
					</Nav.Link>
				</Nav>
				<Button
					style={{ width: '2.6rem', height: '2.6rem', position: 'relative' }}
					variant='outline-primary'
					className='rounded-circle'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 16 16'
						className='d-flex justify-content-center align-items-center'
					>
						<path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
					</svg>
					<div
						className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
						style={{
							color: 'white',
							width: '1.2rem',
							height: '1.2rem',
							position: 'absolute',
							bottom: 0,
							right: 0,
							transform: 'translate(20%,20%)',
						}}
					>
						3
					</div>
				</Button>
			</Container>
		</NavbarBootstrap>
	);
};
export default Navbar;
