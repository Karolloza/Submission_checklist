import sampleListData from '../json/sampleListData.json'
import { fetchListSuccess, fetchListError, fetchListPending } from './actions'

const promise = new Promise((resolve, reject) => resolve(sampleListData))

export const fetchSubmissionChecklist = () => async dispatch => {
    try {
        await dispatch(fetchListPending());
        const data = await promise
        await dispatch(fetchListSuccess(data));
    } catch(error) {
        dispatch(fetchListError(error));
    }
}