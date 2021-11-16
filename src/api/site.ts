import apiClient from "./api_client";

class SiteDataServiceClass {
	async getServerStatus(): Promise<any> {
		const response: Record<string,any> = await apiClient.get(
		"status", 
		).catch((error) => {
			return error.response 
		});
		return response 
	}


export const SiteDataService = new SiteDataServiceClass()
