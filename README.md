
# Github Resume Maker Backend Server

Github resume maker api for getting every public details of all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.
## Run Locally

Clone the project

```bash
  git clone https://github.com/pesto-students/resume-builder-backend-f3-gamma.git
```

Go to the project directory

```bash
  cd resume-builder-backend-f3-gamma
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
show from brower

```bash
  localhost:3000/user/{username}
```
##### default port is 3000, change port number if Port 3000 is already in use

### URL deatils
#### Get every details of a github user user.


```http
  https://github-resume-maker.herokuapp.com/user/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**.fetch details by username. |


## Authors

- [@ramshadKen4](https://github.com/ramshadKen4)
- [@amitsing](https://github.com/amitsingh4india)

