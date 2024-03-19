import { Card } from 'react-bootstrap';

const StoreItem = ({ category, description, image, rating, price, title }: dataType) => {
	return (
		<Card>
			<Card.Img
				variant='top'
				src={image}
				alt={title}
				height={180}
				style={{ objectFit: 'contain' }}
			/>
			<Card.Body className='d flex flex-column'>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='col-9'>{title}</span>
					<span className='col-3 text-end'>$ {price}</span>
				</Card.Title>
			</Card.Body>
			<p>{category}</p>
			<p>{description}</p>
		</Card>
	);
};
export default StoreItem;
