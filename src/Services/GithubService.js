import APIService from './APIService';

const fetchRestaurantCategories = async () => await APIService.invoke({
	url: `${baseUrl}categories`,
	method: 'GET'
});

export default {
	fetchRestaurantCategories
};