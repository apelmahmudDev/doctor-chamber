import React from 'react';

const Spinner = () => {
	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ height: '20vh' }}
		>
			<div class="spinner-border text-info" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
