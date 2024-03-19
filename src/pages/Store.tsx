import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import { useEffect, useState } from 'react';

const Store = () => {
	const [data, setData] = useState<null | dataType[]>(null);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://fakestoreapi.com/products');
			const dataRes = await res.json();
			setData(dataRes);
			// console.log(dataRes);
		}
		fetchData();
	}, []);

	return (
		<>
			<h2>Store</h2>
			<Row
				md={2}
				xs={1}
				lg={3}
				className='g-3'
			>
				{data &&
					data.map((data) => (
						<Col key={data.id}>
							<StoreItem {...data} />
						</Col>
					))}
			</Row>
		</>
	);
};

export default Store;
