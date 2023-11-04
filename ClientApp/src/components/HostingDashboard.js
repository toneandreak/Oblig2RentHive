import React, { useState, useEffect } from 'react';
import Table from './Table/Table';



function HostingDashboard() {
    const [listings, setListings] = useState([])
    const [pendingBookings, setPendingBookings] = useState([])
    const [approvedBookings, setApprovedBookings] = useState([])
    const [pastBookings, setPastBookings] = useState([])



    useEffect(() => {
        fetch('api/Hosting/GetListingData')
            .then(response => response.json())
            .then(data => {
                setListings(data.listings);
                setPendingBookings(data.pendingBookings);
                setApprovedBookings(data.approvedBookings);
                setPastBookings(data.pastBookings);
            });
    }, []);


    //Defining the columns

    const AllListingColumns = [
        {
            key: 'title',
            title: 'Title'
        },
        {
            key: 'description',
            title: 'Description'
        },
        {
            key: 'createdAt',
            title: 'Created'
        },
    ];

    const ReservationsColumns = [
        {
            key: 'guest',
            title: 'Guest'
        },
        {
            key: 'title',
            title: 'Listing'
        },
        {
            key: 'startDate',
            title: 'Start Date'
        },
        {
            key: 'endDate',
            title: 'End Date'
        },
        {
            key: 'totalPrice',
            title: 'Total Price'
        },

    ];








    return (
        <div>
            <Table data={listings} columns={AllListingColumns} tableTitle="Available Listings" />
            <Table data={pendingBookings} columns={ReservationsColumns} tableTitle="Pending Reservations" />
            <Table data={approvedBookings} columns={ReservationsColumns} tableTitle="Approved Reservations" />
            <Table data={pastBookings} columns={ReservationsColumns} tableTitle="Past reservations" />



        </div>
    );

}
export default HostingDashboard; 

