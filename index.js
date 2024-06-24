import { sinanHelper } from './helpers/sinanHelper';
import { ApiObj } from './helpers/NebiHelper';
import {EgoAPI} from "./helpers/EgoCall"



//Gultekin
const APIClient = require('./helpers/gultekinHelper');
const client = new APIClient();

async function testGultekinAPIMethods() {
    try {
        // Test each method

        // GET request
        const getDataPromise = client.get('gets');

        // GET by ID request
        const getByIdDataPromise = client.getById('gets', 1);
        await Promise.allSettled([getDataPromise, getByIdDataPromise]);
        

        // GET request
        const getData = await client.get('gets');
        console.log('GET:', getData);

        // GET by ID request
        const getByIdData = await client.getById('gets', 1);
        console.log('GET by ID:', getByIdData);

        // POST request
        const postData = await client.post('gets', { name: 'New Name' });
        console.log('POST:', postData);

        // PUT request
        const putData = await client.put('gets', 1, { name: 'Updated Name' });
        console.log('PUT:', putData);

        // DELETE request
        const deleteData = await client.delete('gets', 1);
        console.log('DELETE:', deleteData);

    } catch (error) {
        console.log(`Error in testing Gultekin's methods ${error}`)
    }
}
//call "testGultekinAPIMethods" functions
testGultekinAPIMethods(); //END Gultekin

console.log(sinanHelper.get());
console.logetById(1);
sinanHelper.postData("ahmet", "avatarsız", "abidik-gubidik");
sinanHelper.putData(1, "senin adın ahmet", "avatarın-yok", "hacı-token-kalmadı");
sinanHelper.deleteData(54);






//Egomen çağırıyor

EgoAPI.
EgoAPI.
EgoAPI.
EgoAPI.


//nebi Fetchs Metods

ApiObj.getFetch();
ApiObj.deleteFetch(2);
ApiObj.postFetch("ahmet", "avatar", "");
ApiObj.putFetch1, "senin adın ahmet", "avatarın-yok", "hacı-token-kalmadı"();
ApiObj.deleteFetch(34)








