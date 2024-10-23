import axios from "axios";

export async function getUserLoaction() {
  let data = await axios
    .get(`https://api.ipregistry.co/?key=${process.env.IREGISTER_API_KEY}`)
    .then((res) => {
      return res?.data?.location?.country.flag;
    })
    .catch((err) => {
      console.log(`error in home layout catching location: ${err}`);
    });
  return data
}
