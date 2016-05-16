


const defaultPageName = "HomePage";

export default function pageReducer(state = defaultPageName, action) {
   switch (action.type) {
        case 'PAGE_CHANGE':
                return action.pageName;
        default:
                return state;
   }
}
