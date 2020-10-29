// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const AirtableAPI = {
  apiKey: "keym6ehWNZnQzpS4m",
  base: "",
  url: "https://api.airtable.com/v0/",
  init: function ({ apiKey, base }) {
    this.apiKey = apiKey;
    this.base = base;
    //const records = await this.fetch("Link");
    return this
  },
  fetch: async function (table) {
    if (this.apiKey && this.base && table) {
      const endpoint = `${this.url}${this.base}/${table}?api_key=${this.apiKey}`;
      //console.log(endpoint);
      const res = await fetch(endpoint, {});
      const rj =  await res.json();
      //console.log("response", rj);
      return rj.records
    } else return null;
  },
}
async function fetcher (){
  AirtableAPI.init({apiKey:"keym6ehWNZnQzpS4m" , base:"appq9CwhpYOjOv4tQ"})
  const tagdata = await AirtableAPI.fetch("Tag")
  const categorydata = await AirtableAPI.fetch("Category")
  const linkdata = await AirtableAPI.fetch("Link")
  //console.log("props", tagdata, categorydata, linkdata)
  return { linkdata ,tagdata, categorydata }
}

 async function Airdata(req, res){
  return await fetcher()

}
export default Airdata;