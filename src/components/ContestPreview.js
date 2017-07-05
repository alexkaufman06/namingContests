import React from 'react';

// STATELESS FUNCTION COMPONENT
const ContestPreview = (contest) => (
	<div className="ContestPreview">
		<div>
			<div>
				{contest.categoryName}
			</div>
			<div>
				{contest.contestName}
			</div>
		</div>
	</div>
);

export default ContestPreview;