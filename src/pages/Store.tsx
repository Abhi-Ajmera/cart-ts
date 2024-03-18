import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';

const Store = () => {
	return (
		<>
			<h2>Store</h2>
			<Row
				md={2}
				xs={1}
				className='g-3'
			>
				<Col>
					<StoreItem />
				</Col>
			</Row>
		</>
	);
};

export default Store;
