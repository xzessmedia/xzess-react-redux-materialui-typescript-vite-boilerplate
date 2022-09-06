import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // HashRouter as Router
import {createTheme, Theme, ThemeProvider} from "@mui/material";
import Store from './store/store';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PageError404 from "./views/Error404/PageError404";

const defaultTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#4db6ac',
            main: '#3f50b5',
            dark: '#00695c',
            contrastText: '#fff',
        },
        secondary: {
            light: '#4dd0e1',
            main: '#0097a7',
            dark: '#00838f',
            contrastText: '#000',
        },
    },
});

const routing = (
    <Provider store={Store}>
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path='*' element={<PageError404/>} />
            </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(routing);
//ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
