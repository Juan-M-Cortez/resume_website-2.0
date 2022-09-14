import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function formatDate(datesArr) {
    let yyyy = datesArr[0].split('', 4).join('');
    let dateList = []
    for (let index = 0; index < datesArr.length; index++) {

        let mm = datesArr[index].split('', 7).splice(5, 2).join('');
        let dd = datesArr[index].split('').splice(8, 2).join('');

        dateList.unshift(mm + '-' + dd + '-' + yyyy)
    }
    return dateList;
}

function Dates(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { dates, pickADate } = props;

    //------api loaded*?*------
    let dateList;
    if (dates[0])
        dateList = formatDate(dates);
    else
        dateList = ['Loading...']

    const indexFlip = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="d-flex p-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Past 10 days</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>pick a date</DropdownItem>
                    {/* <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem text>Dropdown Item Text</DropdownItem>
                         <DropdownItem disabled>Action (disabled)</DropdownItem> */}
                    <DropdownItem divider />
                    {
                        dateList.map((date, index) => <DropdownItem key={`dropdown-${index}`} onClick={() => pickADate(indexFlip[index])}>{date}</DropdownItem>)
                    }
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default Dates;