/*
 * @Author: Tim Koepsel 
 * @Date: 2020-03-24 00:15:05 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2020-03-24 00:15:05 
 */

import React from 'react';
import { Navigate } from 'react-router';

interface IProps {
}

interface IState {
    redirect?: boolean;
}

class PageError404 extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            redirect: false
        };
        this.BackToPath = this.BackToPath.bind(this);
    }

    BackToPath() {
        this.setState({
            redirect: true
        });
    }

    render() {
        return (
            <div>
                {this.state.redirect === true ? <Navigate to='/' /> : null}
                <div>
                    <h1>Error 404</h1>
                    <h2>Die Seite wurde nicht gefunden</h2>
                </div>
                <div>
                    <p>Die gewünschte Seite wurde leider nicht gefunden.</p>
                    <p>Bitte prüfen Sie Ihre Url auf einen Fehler und versuchen Sie es erneut.</p>
                    <button onClick={() => this.BackToPath()}>Zurück</button>
                </div>
            </div>
        );
    }
}

export default PageError404;