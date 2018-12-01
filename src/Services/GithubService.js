import APIService from './APIService';

const getUserDetails = async (userName) => {
	return await APIService.invoke({
		url: `https://api.github.com/users/${userName}`,
		method: 'GET'
	});	
}

const getUserRepositories = async (userName) => {
	return await APIService.invoke({
		url: `https://api.github.com/users/${userName}/repos`,
		method: 'GET'
	});	
}

export default {
	getUserDetails,
	getUserRepositories
};