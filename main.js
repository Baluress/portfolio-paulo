const url = 'https://api.github.com/users/baluress'

function getUser() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      avatar.src = data.avatar_url
      titleName.innerHTML = data.name
      descriptionBio.innerHTML = data.bio
    })
}

getUser()
