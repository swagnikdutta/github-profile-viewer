import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import _ from 'lodash';

import Actions from '../../store/actions/actions';

// Components
import Loader from '../../hoc/Loader/Loader';
import Collections from '../../components/Collections/Collections';

class Home extends Component{

	async componentDidMount(){
		// this.props.fetchRestaurantCategories();
	}

	render(){
		let city = this.props.match.params.city;
		return (
			<div>
				
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
    	// restaurantCategories: _.get(state, 'zomatoReducer.restaurantCategories', []),
    	loaderVisibility: _.get(state, 'zomatoReducer.loaderVisibility', false)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchRestaurantCategories: () => dispatch(Actions.fetchRestaurantCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));