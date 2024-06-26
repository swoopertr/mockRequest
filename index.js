//const sinanHelper = require("./helpers/sinanHelper.mjs")
import { sinanHelper } from "./helpers/sinanHelper.mjs";

async function sinanFunction () {
    console.log("getting all entries", await sinanHelper.get(), "done with all entries");
    console.log("get ID 1", await sinanHelper.getById(1))
    console.log(await sinanHelper.postData("ahmet", "avatarsız", "abidik-gubidik"))
    console.log(await sinanHelper.putData(1, "senin adın ahmet", "avatarın-yok", "hacı-token-kalmadı"))
    console.log(await sinanHelper.deleteData(54))
}

sinanFunction()


