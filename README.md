# Resume Analyzer

## Description
A platform where users can upload resumes and receive feedback on improving them.

## Team Members and Contact Info
- Janish Suneja (Project Manager): js2629@njit.edu | janbivalent @ Discord
- Abanoub Masoud: aam27@njit.edu | biggerboyabs @ Discord
- Nathaniel Kapleau: nlk9@njit.edu | bigslimenate @ Discord
- Samson Zheng: sz35@njit.edu | aceflaviuskaizoku @ Discord
- Irving Castillo: ic24@njit.edu | irving918 @ Discord

Link to Trello: [https://trello.com/b/Q0V4YLtD/resume-analyzer](https://trello.com/b/Q0V4YLtD/resume-analyzer)

## Project Overview
This project is built with RedwoodJS. The frontend is made with ReactJS and tested with
Storybook. The backend is made with Prisma for database communication and automated migrations.
GraphQL in combination with Cells are used for API development.

The goal is to use Natural Language Processing (NLP) to analyze and parse resumes and offer
job recommendations, advice, analysis, etc.

## Instructions On Setting Up Locally
1. Fork this repository.
2. Clone the forked repo to your local machine.
3. Navigate to the project directory.
4. Check your version of node and yarn by doing `node -v` and `yarn -v`. Ensure they are `20.x` and `4.4.0` respectively.
    1. If they are not, you will need to swap versions. For node, download `v20.18.0` from [here](https://nodejs.org/en/download/package-manager) using an installation method of your choice. You can also use a tool such as `nvm` or `nvm-windows` to manage node versions.
    2. For yarn, follow [this guide](https://docs.redwoodjs.com/docs/how-to/using-yarn/) to install the correct version. Note that running `corepack` requires elevated permissions.
5. Do `yarn install` at the root of the project directory. If prompted for downloading `v4.4.0`, say yes.
6. Do `yarn rw dev` to fire it up!
7. To migrate or synchronize the database, do `yarn rw prisma migrate dev`.
