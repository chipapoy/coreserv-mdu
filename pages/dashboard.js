// import MUIDataTable from "mui-datatables";
import { useState,useEffect } from 'react';
// import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import Headertop from "../components/Layouts/Headertop";
import Pagetop from "../components/Layouts/Pagetop";
import { useAuth } from '@/hooks/auth';
import axios from "axios";
import MUIDataTable, { TableHead } from "mui-datatables";
import TableOptions from "../components/Dashboard/TableOptions";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Dashboard = () => {

    const { user } = useAuth({ middleware: 'auth' })
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
            name: "address",
            label: "Address",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "bill_period_from",
            label: "Bill Period From",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "bill_period_to",
            label: "Bill Period To",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "bill_month",
            label: "Month",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "current_reading",
            label: "Current Reading",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "previous_reading",
            label: "Previous Reading",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "consumption",
            label: "Consumption",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "rate",
            label: "Rate",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "amount",
            label: "Amount",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "vat_amount",
            label: "Vat Amount",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "interest",
            label: "Interest",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "penalty",
            label: "Penalty",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "penalty_over_interest_vat_amount",
            label: "Penalty/Interest Vat Amount",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "surcharge",
            label: "Surcharge",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "miscellaneuos",
            label: "Miscellaneuos",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "total_amount",
            label: "Total Amount",
            options: {
                filter: true,
                sort: true,
            }
        },{
            name: "date_bill_received",
            label: "Date Bill Received",
            options: {
                filter: true,
                sort: true,
                display:false
            }
        },{
            name: "due_date",
            label: "Due Date",
            options: {
                filter: true,
                sort: true,
                display:false
            }
        },{
            name: "rfp_date",
            label: "RFP Date",
            options: {
                filter: true,
                sort: true,
                display:false
            }
        }

    ];

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        const result = await axios.get('http://localhost:8000/api/dashboardList');

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
                            title={"RFP Dashboard"} 
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

export default Dashboard
