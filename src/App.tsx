import React, { useState } from 'react';
import './App.css';
import Posts from './components/posts/Posts';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UserPage from './components/userPage/UserPage';
import AboutMePage from './components/aboutMePage/AboutMePage';
import Menu from './components/navbar/menu/Menu';
import { Container } from 'react-bootstrap';

export const POSTS_PAGE = '/';
export const ABOUT_ME_PAGE = '/about_me';
export const ABOUT_USER_PAGE = '/about_user';

function App() {
	return (
		<div className="App">
			<Navbar/>
			<Container className="w-80 m-auto pb-5 pt-5">
				<Routes>
					<Route path={POSTS_PAGE} element={<Posts/>}/>
					<Route path={ABOUT_ME_PAGE} element={<AboutMePage/>}/>
					<Route path={`${ABOUT_USER_PAGE}/:id`} element={<UserPage/>}/>
				</Routes>
			</Container>
		</div>
	);
}

export default App;
