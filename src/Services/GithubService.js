import APIService from './APIService';

const fetchRestaurantCategories = async () => await APIService.invoke({
	url: ``,
	method: 'GET'
});

export default {
	fetchRestaurantCategories
};