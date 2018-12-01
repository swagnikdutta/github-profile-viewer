import React from 'react';
import _ from 'lodash';

import Repositories from './Repositories/Repositories';
import { Wrapper } from './Style.js';

const collections = ({ userRepositories }) => {

	return (
		<Wrapper>
			<ul className="nav nav-tabs nav-fill">
				<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#overview">Overview</a></li>
				<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#repositories">Repositories</a></li>
				<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#stars">Stars</a></li>
				<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#followers">Followers</a></li>
				<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#following">Following</a></li>
			</ul>

			<div className="tab-content">
				<div className="tab-pane fade" id="overview" role="tabpanel" >
					Overview
				</div>
				<div className="tab-pane fade show active" id="repositories" role="tabpanel" >
					<Repositories userRepositories={userRepositories} />
				</div>
				<div className="tab-pane fade" id="stars" role="tabpanel" >
					Stars
				</div>
				<div className="tab-pane fade" id="followers" role="tabpanel" >
					Followers
				</div>
				<div className="tab-pane fade" id="following" role="tabpanel">
					Following
				</div>
			</div>
		</Wrapper>
	);
};

export default collections;