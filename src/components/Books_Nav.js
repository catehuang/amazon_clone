import React from 'react';

function Nav_Books() {
        return (
                <div className="flex flex-row justify-between px-3 py-1 text-sm bg-gray-50 border border-b-gray-200">
                        <div className="font-bold">Books</div>
                        <div className="">Advanced Search</div>
                        <div className="">Today's Deals</div>
                        <div className="">New Releases</div>
                        <div className="">Amazon Charts</div>
                        <div className="">Best Sellers & More</div>
                        <div className="hidden md:inline-block">The Globe & Mail Best Sellers</div>
                        <div className="hidden lg:inline-block">New York Times Best Sellers</div>
                        <div className="hidden xl:inline-block">Best Books of the Month</div>
                        <div className="hidden xl:inline-block">Children's Books</div>
                        <div className="hidden 2xl:inline-block">Textbooks</div>
                        <div className="hidden 2xl:inline-block">Kindle Books</div>
                </div>
        )
}

export default Nav_Books;
