import Axios from 'axios';
import * as config from '../../config';
import Log from './log.service';

const Api = Axios.create({
    baseURL: config.BaseApi
});
if (config.Debug === true) {
    Api.interceptors.request.use(request => {
        Log.Debug('Api Request', request);
        return request
    });
      
    Api.interceptors.response.use(response => {
        Log.Debug('Api Response', response);
        return response
    });
}
export default Api;
