
const form = document.getElementById("search-form");
form.addEventListener("submit", searchGoogle);
function searchGoogle(event) {
  event.preventDefault(); // Prevents the form from submitting and reloading the page
  
  const searchText = document.getElementsByName("searchText")[0].value;
  const encodedSearchText = encodeURIComponent(searchText);
  const url = `https://www.google.com/search?q=${encodedSearchText}`;
  
  window.location.href = url; // Redirects to the Google search results page
}

function refreshTime() {
    var date = new Date();
    var hh24 = date.getHours();
    var min = date.getMinutes();
    var ss = date.getSeconds();
    var clockString =
      (hh24 < 10 ? "0" : "") +
      hh24 +
      ":" +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (ss < 10 ? "0" : "") +
      ss;
    document.querySelector("#clock-text").innerHTML = clockString;
  }
  window.addEventListener("load", (event) => {
    refreshTime();
});
  
setInterval(refreshTime, 1000);

window.addEventListener("load", (event) => {
  let gifs=["gifs/car.gif", "gifs/city.gif", "gifs/coffe.gif", "gifs/comp.gif", "gifs/d961pgy-99db1674-e7a9-40ac-89ef-20e30afea307.gif", "gifs/d9aeem6-6b7213c6-2309-4812-b6fb-c82de7b5ea91.gif", "gifs/d9au7u3-9046b815-7e0b-4211-811e-e26e8e75a8ec.gif", "gifs/d9c1iqa-62f8055d-f5de-409b-a75f-3ccf609b0eb2.gif", "gifs/d9g32f4-3c3cdd9c-1e85-412e-ab17-9a1083e1e3bb.gif", "gifs/d9h03vb-15f6de38-b68c-4047-aea9-86927939c40f.gif", "gifs/d9ikcm1-26426a20-3ef5-449a-88a8-c134c4bff85f.gif", "gifs/d9l17xw-a9f6b3d9-aee3-4cb4-845d-f9835b322946.gif", "gifs/d9m693z-54a16dad-5089-4910-93ce-0e3698b7fde9.gif", "gifs/d9oji4g-e98045e6-424f-40e6-bee0-42149b0ef1c0.gif", "gifs/d9orqhh-6209c27a-e1bb-48b2-9093-96d231287d08.gif", "gifs/d9qh5pk-5a53f400-bd6a-4ca1-b398-2ed9ba98a202.gif", "gifs/d9rbvpi-1053fb96-0800-44f1-b7ca-8c466c989517.gif", "gifs/d9spnlx-ae6275b7-863e-4d5d-8289-2aa14fb53f48.gif", "gifs/d9ut42f-dbbc2813-4923-4f1c-81c9-0b8cbc250ae7.gif", "gifs/d9xateg-d5707931-3979-4090-ad1f-272f470abac7.gif", "gifs/da434wj-943b75be-e9ca-4995-9573-3d4df936c1cd.gif", "gifs/da4lboo-fbc24a9d-c308-4e4a-8f29-f79dc1974067.gif", "gifs/da97ywm-b5e6e0d7-3da5-431c-ac18-310150b2fede.gif", "gifs/daa34ha-db596cb1-d059-42f7-98f5-b6d1cc75e98b.gif", "gifs/dacbjh5-9642d41b-8f03-4d32-a07c-b13c06f206f8.gif", "gifs/dadmcv8-4e637fb3-4a18-4c79-9d13-e8a393c6afb5.gif", "gifs/daedk6n-3f7d45b3-083c-4cfa-adf3-2e4a1f09654e.gif", "gifs/dafzbpq-0f83daea-83a6-41b4-b913-e4ece86fff40.gif", "gifs/dahmfi7-987ee48c-35e9-480d-af65-4a63d78060df.gif", "gifs/daiefoq-6ac799d7-e2d0-4a3d-ac57-02f4ef75937a.gif", "gifs/dal2la5-f70a3ee7-68c1-429d-9a0b-15faaa70acfa.gif", "gifs/daoprlk-63b506d5-0e01-40d4-9782-8abc39554ae1.gif", "gifs/dark.gif", "gifs/datjp1z-fc3069a4-9ffc-40d0-861b-a53e6a267634.gif", "gifs/dav52i9-b7c7fc8a-c3e8-40fc-8ba5-93bd13506f6a.gif", "gifs/davv7gx-93b2ca3c-709b-40ee-9578-33eb6b2d2847.gif", "gifs/dawohei-a036ab22-579d-4a8f-8116-2aca87644b7b.gif", "gifs/daxhv99-7211e255-0be2-4926-b788-74a9b3d26b17.gif", "gifs/dazzcul-efd9bfbf-5390-4ff7-bfbe-a09f8eb36ba8.gif", "gifs/db0tr72-6d684d4d-eb9a-40d0-a516-52b7b96c7f89.gif", "gifs/db1ludm-f5f35cb7-07d5-42ce-8168-048e4b29a978.gif", "gifs/db6i1wn-588cceab-523f-45b9-8843-ebe8f7622ee9.gif", "gifs/db9ihzu-1ed9ad30-cc86-4911-9f43-164ac43075c0.gif", "gifs/dbaa3uh-44369609-c249-40aa-b39a-eef4f9995468.gif", "gifs/dbcoh7t-0d3ee353-5765-4ce6-9a71-c39bafdaa493.gif", "gifs/dbdi2eu-8c924713-d143-46a1-b9de-fef6f573d755.gif", "gifs/dbil9vw-3ca1e38e-3bf4-40a8-9339-801771202133.gif", "gifs/dbmkthc-79ac827f-31e2-4ef8-a34e-8532af0040cd.gif", "gifs/dboq8mq-71195fbd-16a1-472a-ba1b-a73cd2abf84e.gif", "gifs/dbuic1e-44fd872d-22cb-4f86-ad0d-ef76f599b4bb.gif", "gifs/dc2mky5-f307c94c-e80a-4fb3-b6c8-b4aa56ba46a1.gif", "gifs/dc4mmw4-10d077e2-5bdf-470c-85b9-20920bdbc4b1.gif", "gifs/dcafwdz-3dc2aac3-e7dd-4e5d-9988-03293e2a0e35.gif", "gifs/dcg9dcs-c90ff4c3-4d46-408a-b3e7-dfa2cccb8c14.gif", "gifs/dcsm2x8-bbf27e63-7a2e-4419-a509-10d647ac8cdc.gif", "gifs/dd92scn-a341008d-1d24-48c0-a431-737d6d018a70.gif", "gifs/dd9jm3y-d13a91ca-b2ed-4621-bd89-e713fab6058a.gif", "gifs/ddbwb3y-1373c85d-fae0-4333-bf5d-88cd11c512f0.gif", "gifs/ddjib5a-1f4b4985-1401-437b-9b8f-b724d4dccca2.gif", "gifs/ddkv6wu-844e897b-c232-460a-8019-e6c554511d16.gif", "gifs/ddnf72i-bb32d19e-3469-484c-91b7-447522a58323.gif", "gifs/ddpvgxo-a2081406-9036-4d48-9562-55ac4f00a649.gif", "gifs/ddwsfmr-47c469ae-9f7f-4d5f-b849-8bf776377087.gif", "gifs/ddy1egp-fa9499e9-e653-4eae-830e-691790a37202.gif", "gifs/ddzro38-62ccc16d-42b3-4ee8-b920-62ec0abf0ede.gif", "gifs/de1ojy1-dde268b8-fe65-4a33-8eb7-193bcf6ad230.gif", "gifs/de3xjep-88691360-7083-4f5e-b706-3d3c9ed0b24c.gif", "gifs/de5xmey-d2973d58-f67f-4f61-abdb-b4d240d98e5d.gif", "gifs/de7226p-88f85365-0c46-4cce-a9b7-ab978f4f89e2.gif", "gifs/de90f9r-c3293cce-507e-455a-a284-78cb0daaa26d.gif", "gifs/dealryr-b9dfd7ea-707a-4d58-bc9d-fb7ad9b9a851.gif", "gifs/debee0l-eca2c69e-8c11-421b-905e-29841ab8bbf7.gif", "gifs/deesqit-0927fa40-deb1-4e7c-a00a-2b9df401d767.gif", "gifs/dehw5r1-2c44f86b-7b76-47b8-8b85-86fed70343eb.gif", "gifs/dejt4rb-3da1e591-2ba1-463f-ad46-c9655962418d.gif", "gifs/dekaj0k-e53f9de7-c37e-46b2-9f6e-a53455daf8c6.gif", "gifs/derewio-1d534a30-bf98-4e95-b876-267b0bfea1a1.gif", "gifs/detfftq-03e74626-78fb-446e-b7bc-dd99d5f6b63e.gif", "gifs/dew85f8-aa30112e-9eff-42f7-a4e7-a027fd9a771d.gif", "gifs/dewg6sk-81e712db-48c4-4ac0-a977-f4ef9529030a.gif", "gifs/dex919k-65059397-8304-443b-a63b-1efffd329c4b.gif", "gifs/dexkl20-9d7f7f81-0139-4938-8280-dd90620f21c4.gif", "gifs/deyar8h-2a63b3f6-aa8e-4100-8cc6-9d22bbac8c82.gif", "gifs/deysarw-4d5c3ea4-0b9d-4ba8-afae-c436dcf5535e.gif", "gifs/dez5d9x-79cb89e0-a551-4731-82cd-399bbc6ea0c5.gif", "gifs/dezrmu4-0b463d5d-1c1f-463b-909b-6951227567a5.gif", "gifs/df1wdk7-fa62d5b6-a1b2-4b2b-b407-02e737476148.gif", "gifs/df2be8o-0428e6a9-5f1d-4ecf-b7f6-41b36872c666.gif", "gifs/df3lc4o-af9d0a0e-440f-4cf8-b260-6bbb8a589ca9.gif", "gifs/df3whon-26d704d3-7ba4-411a-b238-12ca340fb004.gif", "gifs/df5z62i-c0babe84-8194-4ec7-8563-20993684eff2.gif", "gifs/df9qxoy-d356422e-fc6d-4182-9e72-d7c8f9f5e842.gif", "gifs/dfb35n3-96ab9e41-2dc3-4f27-a013-f0ad63fd4b46.gif", "gifs/dfcu60j-004620a2-e00b-4497-93a3-b9ea738b6677.gif", "gifs/dfe8o3r-8fe0299f-80fb-4c2c-87ae-c5d5d75dee44.gif", "gifs/dfl5rog-8c4e9a55-dbe0-41d5-a340-b092c1afdeae.gif", "gifs/dflh43c-14c4b6c6-1a27-4473-8f5b-256a992082a0.gif", "gifs/vortex.gif"];
  console.log(gifs)
  pos=Math.floor(Math.random() * gifs.length);
  document.body.style.backgroundImage=`url(${gifs[pos]})`;
});
