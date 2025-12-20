import BackEndURI from "./BackEndURI";

const getToken = JSON.parse(localStorage.getItem("adminInfo"))?.adminToken;

async function getAdminInfo() {
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
