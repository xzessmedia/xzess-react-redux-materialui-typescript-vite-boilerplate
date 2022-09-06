import 'dotenv/config'
import * as pkg from './package.json';

const AppName = process.env.APP_NAME || '';
const CurrentAppMode: 'Staging'|'Production'|string = process.env.APP_MODE || 'Production';
const Version = pkg.version;
const Debug: boolean = false;
const StagingApi = process.env.STAGINGAPI || '';
const ProductionApi = process.env.PRODUCTIONAPI || '';
const BaseApi = CurrentAppMode === 'Staging' ? StagingApi : ProductionApi;

export {
    AppName,
    BaseApi,
    CurrentAppMode,
    Debug
}