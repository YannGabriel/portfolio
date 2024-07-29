
function updateProfileInfos(profileData){
  const name = document.getElementById('profile-name')
  console.log("Passei")
  name.innerText = profileData.name
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfos(profileData)
})()

