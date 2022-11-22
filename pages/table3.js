import { useState,useEffect } from 'react'
import DataTable,{FixedHeaderStory} from 'react-data-table-component';
import axios from "axios";

const Table = () => {

    const [data, setData] = useState([])

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Vendor',
            selector: row => row.vendor_name,
        },
        {
            name: 'Bldg',
            selector: row => row.bldg_name,
        },
        {
            name: 'Code',
            selector: row => row.vendor_code,
        },
    ];

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        const result = await axios.get('http://localhost:8000/api/vendorList');

        setData(result.data);
    }

    return (
        
        <DataTable
            columns={columns}
            data={data}
            fixedHeader
            pagination
        />
    );
}

export default Table

    