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

#### [Implement Redux Tool Kit : create slice](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/b60395f8021eb1f20fe0b05cb6442e45b910dbca)

### create store and connect with slice

#### [Implement Redux Tool Kit : create store and connect with slice](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/9d34303910f02b745cc62f9503dcd415646383f4)

### access and modify store data in ui
    
    =>useSelector
    =>useDispatch

#### [Implement Redux Tool Kit : access and modify store data in ui](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/54c6c22f61b32ec5b407e822492b3e5347304440)

## Implement Shopping Cart Application

### create a product card

#### [Implement Shopping Cart Application : create a product card](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/b4cf3b8fb20187356b17ebf1156f50d38c836ca8)

### integrate api to fetch products and show in home page

    > npm install axios

#### [Implement Shopping Cart Application : integrate api to fetch products and show in home page](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/1a9d4cb5e7e3629a9f453b8d76880b09c8927f2b)

### create cart ui

#### [Implement Shopping Cart Application : create cart ui](https://github.com/bibhusprasad/027_reactjs_tutorial_from_youtube_2026/commit/4c6c57c6de9ed25454dda1b01699909d6d796117)

### create cartSlice and add item to cart