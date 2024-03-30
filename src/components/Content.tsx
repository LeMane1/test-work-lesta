import { useState, useEffect, useCallback, useRef } from 'react'
import { useQuery } from "@apollo/client"
import { GET_VEHICLES } from '../data/requests'
import Loading from './Loading'
import { Row, Col, Spinner } from 'react-bootstrap'
import { lazy, Suspense } from 'react';

const VehicleCard = lazy(() => import('./VehicleCard'));

interface IContentProps {
	sortValue: string;
	showNewShips: boolean;
}

const Content: React.FunctionComponent<IContentProps> = (props) => {
	const offset: number = 10
	const { data, loading, error } = useQuery(GET_VEHICLES)
	const [showItemsCount, setShowItemsCount] = useState(offset)

	const [vehicles, setVehicles] = useState([])

	useEffect(() => {
		if (data && data.vehicles) {
			setVehicles(data.vehicles)
		}
	}, [data])

	useEffect(() => {
		if (data && vehicles && props.showNewShips) {
			setShowItemsCount(prev => Math.min(prev + offset, vehicles.length))
		}
	}, [props.showNewShips])

	useEffect(() => {
		if (data && data.vehicles.length > 0) {
			const sorted = [...data.vehicles]
			setVehicles(renderSwitch(sorted, props.sortValue))
		}
	}, [props.sortValue])

	const renderSwitch = (array: any, value: string) => {
		switch (value) {
			case 'class':
				return array.toSorted(sortByClass)
			case 'nation':
				return array.toSorted(sortByNation)
			case 'level':
				return array.toSorted(sortByLevel)
			default:
				return array
		}
	}

	const sortByClass = (a: any, b: any) => {
		if (a.type.name > b.type.name) return 1
		if (a.type.name < b.type.name) return -1
		return 0
	}

	const sortByNation = (a: any, b: any) => {
		if (a.nation.name > b.nation.name) return 1
		if (a.nation.name < b.nation.name) return -1
		return 0
	}

	const sortByLevel = (a: any, b: any) => a.level - b.level

	return (
		<div>
			{data && vehicles.length > 0 && <p className='opacity-50 mb-2'>{'Total number of ships: ' + vehicles.length}</p>}
			{loading ? <Spinner animation="border" /> : ''}
			{error ? <h1>Somethong went wrong</h1> : ''}
			<Row className='gy-3'>
				{data && vehicles.length ? vehicles.slice(0, showItemsCount).map((item: any, index: number) => (
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

