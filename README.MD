# [Performance Nightmare Without Cheats - React Edition](https://salmon-sea-0f2973803.2.azurestaticapps.net/)

## About

This repo dedicated for the performance anti patterns with React application. The idea is to get worst possible score with Lighthouse without using cheats like empty cycles, timeouts and others.

Application built with React 18, MUI, Moment, Lodash and requires working API to fetch data about user and setup

## Launch

- Clone the repo
- Install dependencies with `npm ci`
- Build the app with `npm run build`
- Launch production build with `npx serve dist`
- Run Lighthouse audit from **incognito** window

## Known anti patterns

- Sequential calls to the BE        ✅
- Greedy imports                    ✅
- Mono build                        ✅
- CPU overuse inside critical path  ✅
- Analytics                         ✅
- Multi domain usage                ✅
- Multiple blocking fonts
- Blocking JS
- Blocking CSS
- ...
