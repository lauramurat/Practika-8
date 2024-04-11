
const adReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_AD':
            return [...state, { id: Math.random(), title: action.ad.title, description: action.ad.description }];
        case 'REMOVE_AD':
            return state.filter(ad => ad.id !== action.id);
        case 'EDIT_AD':
            return state.map(ad => {
                if (ad.id === action.id) {
                    return { ...ad, title: action.ad.title, description: action.ad.description };
                }
                return ad;
            });
        default:
            return state;
    }
};

export default adReducer;
