import * as React from 'react';
import { css } from '@emotion/css'
import { Form } from 'react-bootstrap'

interface IHeaderProps {
	className?: string;
	onChangeSort: (arg: string) => void;
}

const headerStyle = css`
	
`

const Header: React.FunctionComponent<IHeaderProps> = ({ className, ...props }) => {

	const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		props.onChangeSort(e.target.value)
	}

	return (
		<div className={`	pb-2
											d-flex
											flex-wrap
											justify-content-between
											${headerStyle}
											${className}`}>
			<h1 className='bold mb-2'>Ships</h1>
			<Form.Select aria-label="Default select example" onChange={handleOnChange}>
				<option>Sorting parameters</option>
				<option value="class">By class</option>
				<option value="nation">By nation</option>
				<option value="level">By tier</option>
			</Form.Select>
		</div>
	)
};

export default Header;
