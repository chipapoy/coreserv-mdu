// import MUIDataTable from "mui-datatables";
import { useState,useEffect } from 'react';
// import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import Headertop from "../components/Layouts/Headertop";
import Pagetop from "../components/Layouts/Pagetop";
import { useAuth } from '@/hooks/auth';
import axios from '@/lib/axios'
import MUIDataTable, { TableHead } from "mui-datatables";
import TableOptions from "../components/Vendor/TableOptions";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const Vendors = () => {

    const { user } = useAuth({ middleware: 'auth' });
    const [data, setData] = useState([]);
    
    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                filter: false,
                sort: false,
                display:false
                
            }
        },{
            name: "vendor_name",
            label: "Vendor",
            options: {
                filter: true,
                sort: true
            }
        },{
            name: "bldg_name",
            label: "Bldg",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "vendor_code",
            label: "Code",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "city",
            label: "City",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "contact_person",
            label: "Contact Person",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "contact_num",
            label: "Number",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "tier_segment",
            label: "Tier",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "kam",
            label: "KAM",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "account",
            label: "Account",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "payment_terms",
            label: "Payment Terms",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "soa_type",
            label: "SOA",
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

        const result = await axios.get('/data/vendorList');

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
                            title={"MDU List"} 
                            data={data} 
                            columns={columns} 
                            options={TableOptions.options} 
                            // components={}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </>
        
    );
}

export default Vendors


 

 

 
