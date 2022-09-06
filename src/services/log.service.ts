import * as config from '../../config';

class LogService {
    Debug(info: string, inspect: object={}) {
        if (config.Debug === true) {
            console.log(`[${config.AppName}] ${info} [INSPECT] => ${JSON.stringify(inspect)}`);
        }
    }

    Error(error: object, source?: string) {
        if (config.Debug === true) {
            if (source) {
                console.log(`[${config.AppName}] ERROR HAPPENED IN ${source} [MESSAGE] => ${JSON.stringify(error)}`);
            } else {
                console.log(`[${config.AppName}] ERROR HAPPENED [MESSAGE] => ${JSON.stringify(error)}`);
            }
        } else {
            console.log(`[${config.AppName}] ERROR`);
        }
    }
}

const Log = new LogService();
export default Log;