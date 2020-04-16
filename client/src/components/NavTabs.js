import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function NavTabs() {

    return (
        <div>
            <AppBar position="static">
                <Tabs>
                    <Tab label="SignIn" href="/"/>
                    <Tab label="Patients" href="/patients"/>
                    <Tab label="Progress" href="/progress"/>
                </Tabs>
            </AppBar>
        </div>
    );
}
