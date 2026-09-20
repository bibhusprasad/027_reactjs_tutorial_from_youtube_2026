# 027_reactjs_tutorial_from_youtube_2026

------------------------
## 01. React Js Tutorial

<https://www.youtube.com/watch?v=ZP6zJLGdR8s>

Redux Toolkit Full Course 2026 🔥 | React + Redux Project (Hindi)

------------------------

### Store
    Global state container
### Reducer
    State change logic
### Slice
    State + Reducers + Action in one place
### UseSelector
    Hook to fetch data
### Dispatch
    Trigger the Action

## Create React Project
    > npm create vite@latest
    > cd ecom-app
    > npm install tailwindcss @tailwindcss/vite
    
    =>vite.config.js
    add import tailwindcss from '@tailwindcss/vite'
    add plugins: [react(),tailwindcss()],

    =>index.css
    replace everything with @import "tailwindcss";

    >npm install react-router

#### [Initial : Create React ecom-app project with tailwindcss and react-router](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/ce2d97262d2b3d5b7278b3ca1fdb6dbbc674a4b5)

## Create Header and Footer from Flowbite
    
    [Flowbite URL](https://flowbite.com/docs/components/navbar/)

    => copy Header HTML code and convert to jsx code using any online tool.
    => do same for footer 

#### [Create Header and Footer from Flowbite](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/5dcc898b03b98d98f1386db26eb78bc7fb232345)

## Create Home and Cart Pages and implement Routes with Link to navigate pages

    >npm install react-router-dom

    =>Outlet, Link
    =>BrowserRouter, Routes, Route

#### [Create Header and Footer from Flowbite](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/5e02287bcf37f9e9c401a214a7dbcc4818ff5cb5)

## Implement Redux Tool Kit: Slice, State, Reducer

    > npm install @reduxjs/toolkit
    > npm install react-redux

### create slice
