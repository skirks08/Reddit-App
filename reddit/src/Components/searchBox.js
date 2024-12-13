import React from "react";
import { useDispatch } from "react-redux";

const PostSearch = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search posts"
        />
    );
};