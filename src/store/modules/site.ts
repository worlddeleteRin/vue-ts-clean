import { ActionContext } from 'vuex';
// import { SiteDataService } from '@/api/site';


const state = {
	loading_states: {
		critical_data_loading: true,
        common_data_loaded: false,
        main_sliders_loaded: false,
	},
};

const mutations = {
	setSiteLoadingState(state: Record<string,any>, 
	{loading_state_name, is_loading}: {loading_state_name: string, is_loading: boolean}) {
		state.loading_states[loading_state_name] = is_loading;
	},
};
  
const actions = {
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
