/*
 * @Author: Tim Koepsel 
 * @Date: 2020-03-24 03:55:18 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2020-03-24 03:55:18 
 */
import Api from "../services/api.service";

describe('api service', ()=> {
    it('does axios work', async ()=>{
        let response = await Api.get('https://feiertage-api.de/api/?jahr=2019');
        console.log(`http response status: ${response.status}`);
        expect(response.status).toBe(200); // should be 200
    });
});
