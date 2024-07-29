import { useState } from "react";
const Search = (props) => {
    const [search, setSearch] = useState();
    const onSearchChange = () => {
        props.onSearchChange(search);
    };

    const searchKeyDown = (e) => {
        if ((e.key = "Enter")) {
            onSearchChange();
        }
    };
    return (
        <>
            <div>
                Cari Artikel :{" "}
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={searchKeyDown}
                ></input>
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>
                Ditemukan {props.totalPosts} data dengan pencarian kata:{" "}
                {search}
            </small>
        </>
    );
};

export default Search;