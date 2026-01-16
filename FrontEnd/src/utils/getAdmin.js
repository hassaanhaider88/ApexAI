import BackEndURI from "./BackEndURI";


async function getAdminInfo() {
  const getToken = JSON.parse(localStorage.getItem("adminInfo"))?.adminToken;
  console.log(getToken);
  try {
    if (!getToken) return false;
    const res = await fetch(`${BackEndURI}/api/admin/info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        getToken: getToken,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default getAdminInfo;
