import * as React from 'react';

interface IHeaderProps {
	className?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ className }) => {
	return (
		<div className={className}>
			<h1 className='bold'>Ships</h1>
		</div>
	)
};

export default Header;
