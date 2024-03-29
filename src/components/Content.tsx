import * as React from 'react';
import { useQuery } from "@apollo/client"
import { GET_VEHICLES } from '../data/requests';
import Loading from './Loading'
import { Row, Col, Spinner } from 'react-bootstrap'
import { lazy, Suspense } from 'react';

const VehicleCard = lazy(() => import('./VehicleCard'));

interface IContentProps {
}

const Content: React.FunctionComponent<IContentProps> = (props) => {

	const { data, loading, error } = useQuery(GET_VEHICLES)

	return (
		<div>
			{loading ? <Spinner animation="border" /> : ''}
			<Row className='gy-3'>
				{data ? data.vehicles.map((item: any, index: number) => (
					<Col key={index} xs={12} md={6} lg={4}>
						<Suspense fallback={<Loading />}>
							<VehicleCard
								key={index}
								shipLevel={item.level}
								icon={item.icons.large}
								nationColor={item.nation.color}
								nationName={item.nation.name}
								nationIcon={item.nation.icons.large}
								type={item.type.name}
								typeIcon={item.type.icons.default}
							/>
						</Suspense>
					</Col>
				)) : ''}
			</Row>
		</div>
	)
};

export default Content;
