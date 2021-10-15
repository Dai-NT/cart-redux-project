import * as Messages from '../constants/Messages';
import * as types from '../constants/ActionTypes'
 
const initialState = Messages.MSG_WELLCOME;

const messages = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default: return state
    }
}

export default messages;