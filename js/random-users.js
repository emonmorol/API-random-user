const randomUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displayUserDetail(data.results[0]));
};

const displayUserDetail = (user) => {
  // console.log(user);
  const image = document.getElementById("user-image");
  const name = document.getElementById("user-name");
  const gender = document.getElementById("user-gender");
  const email = document.getElementById("user-email");
  const phone = document.getElementById("user-phone");
  const location = document.getElementById("user-location");

  image.src = `${user.picture.large}`;
  name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  gender.innerText = `${user.gender}`;
  email.innerText = `${user.email}`;
  phone.innerText = `${user.cell}`;
  location.innerText = `${user.location.country}`;
};
