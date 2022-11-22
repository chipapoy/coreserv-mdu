import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
// import Add from '../components/Vendor/Add';
import Link from 'next/link'



const Options = {
    options : {
        filterType: 'multiselect',
        responsive: 'scroll',
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
        print: false,
        onRowClick: function(rowData,meta){
            // console.log(rowData)
            // console.log(meta)
            return (
                <Link href='/rfp/update'>  
                    <Tooltip>
                        <IconButton>
                            <EditIcon  />
                        </IconButton>
                    </Tooltip>
                </Link>
                
            );
        },
        expandableRows: true,
        expandableRowsHeader: false,
        isRowExpandable: (dataIndex, expandedRows) => {
            // if (dataIndex === 3 || dataIndex === 4) return false;

            // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
            if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0)
            return false;
            return true;
        },
        // rowsExpanded: [0, 1],
        renderExpandableRow: (rowData, rowMeta) => {
            const colSpan = rowData.length + 1;

            // console.log(rowData[0]);

            return (
            <TableRow>
                <TableCell colSpan={colSpan}>
                    <Link 
                        href={{
                            pathname:'/rfp/update',
                            query: rowData
                        }}
                    >  
                        <Tooltip>
                            <IconButton>
                                <EditIcon  />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    {/* <Link href='/rfp/update' >  
                        <Tooltip>
                            <IconButton>
                                <EditIcon  />
                            </IconButton>
                        </Tooltip>
                    </Link> */}
                </TableCell>
            </TableRow>
            );
        },
        // onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) =>
        //     console.log(allExpanded),
        customToolbar: () => {

            // const handleClick = () => {
            //     console.log("clicked on icon!");
            // }
            
            return (
                <Link href='/rfp/create'>  
                    <Tooltip title="Add RFP">
                        <IconButton>
                            <AddIcon  />
                        </IconButton>
                    </Tooltip>
                </Link>
                
            );
        }
    }
}


export default Options