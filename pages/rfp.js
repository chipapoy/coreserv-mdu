// import MUIDataTable from "mui-datatables";
import { useState,useEffect } from 'react';
// import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import Headertop from "../components/Layouts/Headertop";
import Pagetop from "../components/Layouts/Pagetop";
import { useAuth } from '@/hooks/auth';
import axios from '@/lib/axios'
import MUIDataTable, { TableHead } from "mui-datatables";
import TableOptions from "../components/Rfp/TableOptions";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Rfp = () => {

    const { user } = useAuth({ middleware: 'auth' });
    const [data, setData] = useState([]);
    const [contactPerson, setContactPerson] = useState([]);

    
    
    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                filter: false,
                sort: false,
                display:false
                
            }
        },
        // {
        //     name: "id",
        //     label: "Action",
        //     options: {
        //         filter: false,
        //         sort: false,
        //         empty: true,
        //         customBodyRender: (value, tableMeta, updateValue) => {
        //             return (
        //                 <button onClick={ () => console.log(value) }>
        //                     Edit
        //                 </button>
        //             );
        //         }
        //     }
        // },
        {
            name: "vendor_name",
            label: "Vendor",
            options: {
                filter: true,
                sort: true
            }
        },{
            name: "address",
            label: "Address",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "contact_num",
            label: "Phone#",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "tin_num",
            label: "TIN",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "company_code",
            label: "Company Code",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "sky_contact_id",
            options: {
                filter: false,
                sort: false,
                display: 'excluded'
            }
        },{
            name: "sky_contact_person",
            label: "Sky Contact Person",
            options: {
                filter: true,
                sort: true
            }
        },{
            name: "sky_phone_num",
            label: "Sky Phone Number",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "sky_email",
            label: "Sky Email Address",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "internal_order1",
            label: "Internal Order 1",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "internal_order2",
            label: "Internal Order 2",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "area",
            label: "Area",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "system",
            label: "System",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        const result = await axios.get('/data/rfpList');

        setData(result.data);
    };

    const theme = createTheme({
        components: {
            MUIDataTableHeadCell: {
                styleOverrides: {
                    fixedHeader: {
                        backgroundColor: 'gainsboro',
                    },
                },
            },
            MUIDataTableSelectCell: {
                styleOverrides: {
                    headerCell: {
                        backgroundColor: 'gainsboro',
                    },
                },
            },
            MUIDataTableBodyCell: {
                styleOverrides: {
                    root: {
                        fontSize: '12px',
                    },
                },
            }
        },
    });

    
    return (
        <>
            <Head><title>Coreserv MDU</title></Head>

            <div id='main_content'>
                
                <Headertop></Headertop>
                <div className="page">
                    <Pagetop/>
                    <ThemeProvider theme={theme}>
                        <MUIDataTable 
                            title={"RFP Database"} 
                            data={data} 
                            columns={columns} 
                            options={TableOptions.options} 
                            // components={}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </>
        
    )
}

export default Rfp


 

 

 
