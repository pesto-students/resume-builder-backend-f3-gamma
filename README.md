
```diff +GithubResume App ```
![logo](https://user-images.githubusercontent.com/76247705/164281339-5f386731-fbc6-4e55-85ec-71e43a50aae4.jpg)


This App was designed for Github users to showcase their skills.
# Table of Contents
1. Demo
2. Installation
3. Technology Stack
4. Authors
5. License

# Demo
[Live Demo](https://kind-meitner-2e6eeb.netlify.app/)

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

