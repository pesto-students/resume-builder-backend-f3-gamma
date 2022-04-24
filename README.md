
# Github Resume Maker Backend Server

![logo](https://user-images.githubusercontent.com/76247705/164281597-2cb70d17-24e7-41a2-ad3c-da3ac06c67a6.jpg)


Github resume maker api for getting every public details of all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.

# Table of Contents
1. Demo
2. Installation
3. Parameter
4. Technology Stack
5. Authors
6. License


## Demo 
[Live Demo](https://github-resume-maker.herokuapp.com/user/fabpot)


## Installation

1. Clone the project
```bash
  git clone https://github.com/pesto-students/resume-builder-backend-f3-gamma.git
```
2. Set environment variables
3. Go to the project directory
```bash
  cd resume-builder-backend-f3-gamma
```
4. Install dependencies
```bash
  npm install
```
5. Start the server
```bash
  npm run start
```
6. check from brower
```bash
  /user/{username}
```

## Parameter 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**.fetch details by username. |

## Technology Stack
   * Node
   * Express
   * octakit


## Authors
* [Amit Kumar Singh]
* [Ramshad Ken]


## License
[MIT]