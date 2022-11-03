import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListIcon from '@mui/icons-material/List';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckIcon from '@mui/icons-material/Check';

const TodoAction = ({handleChangeTab, tab}) => {
    return (
        <div className='action__wrapper'>
            <Tabs
                value={tab}
                onChange={(e,tabValue)=>{handleChangeTab(tabValue)}}
                aria-label="basic tabs example">
                <Tab label={<ListIcon/>}/>
                <Tab label={<RadioButtonUncheckedIcon />}/>
                <Tab label={<CheckIcon />}/>
            </Tabs>

        </div>
    );
};

export default TodoAction;
