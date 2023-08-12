import axios from 'axios'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import DataTable, { Media } from 'react-data-table-component';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Skeleton } from 'primereact/skeleton';
import { FcContacts } from "react-icons/fc";
import differenceBy from "lodash.differenceby";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';




function ListEmployee() {


    const [Employee, setEmployee] = useState([]);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
    const [searchData, setsearchData] = useState("");
    const [filter, setfilter] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [searchData, setsearchData] = useState("")

    useEffect(() => {
        axios.get(`/api/EmployeeList`).then(res => {
            if (res.data.status === 200) {
                setEmployee(res.data.data);
                setfilter(res.data.data);
            }
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 500) {

            }
        })
    }, []);


    const handleRowSelected = React.useCallback((state) => {
        setSelectedRows(state.selectedRows);
    }, []);

    const contextActions = React.useMemo(() => {
        const handleDelete = (e) => {
            if (
                window.confirm(
                    `Are you sure you want to delete:\r ${selectedRows.map(
                        (row) => row.id
                    )}?`
                )
            ) {
                const data = selectedRows.map((row) => row.id);
                axios.post(`/api/RemoveArchive/${data}`).then((res) => {
                    console.log(res);
                    if (res.data.status === 200) {
                        setToggleCleared(!toggleCleared);
                        setfilter(differenceBy(filter, selectedRows, "title"));
                        // swal("Success", res.data.message, 'success');
                        toast.current.show({
                            severity: "success",
                            summary: res.data.message,
                            detail: "Deleted",
                        });
                    }
                });
            }
        };

        return (
            <>

                <Button
                    key="delete"
                    className='p-button-sm p-button-danger'
                    onClick={(e) => handleDelete(e)}
                    // icon={PrimeIcons.TRASH}
                    label="Delete"
                />
            </>
        );
    }, [filter, selectedRows, toggleCleared]);



    const column = [
        {
            name: "Employee Code",
            selector: row => <div className='align-content-center align-middle text-secondary me-1'>
                <FcContacts size={20} />
                <span>{row.user_code}</span>
            </div>,
            sortable: true,
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
            hide: Media.MD,
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "Role",
            selector: row => row.role === 2 ? <Tag severity={'info'} value="Employee"></Tag> : <Tag value="Admin"></Tag>,
            sortable: true,
        },
        // {
        //     name: "Contact #",
        //     selector: row => row.contact_number,
        //     sortable: true,
        //     hide: Media.MD,
        // },
        {
            name: "Status",
            selector: row => row.status === 1 ? <Badge severity={'info'} value={'Active'} /> : <Badge severity={'danger'} value={'Not Active'} />,
            sortable: true,
            // hide: Media,
        },
        {
            name: "Action",
            cell: row => <div>
                <Link className="me-2" to={`/admin/employee/refid=${row.id}`} > <Badge value={'Details'} severity={'info'} /></Link>
                <Badge className=' me-2p-badge' severity={'danger'} value={'DeActivate'} />
            </div>,
            sortable: true,
        },
    ];


    const ViewData = (e) => {
        // alert(e.target)
        console.log(e)
    }

    const headertm = <nav className='navbar navbar-expand-lg bg-dark py-3'>
        <div className="container-fluid">
            <span className="navbar-brand text-light">
                Employee List
            </span>
            <div className="navbar-toggle" data-bs-target="#table" data-bs-toggle="collapse">
                <FaBars className='' size={20} />
            </div>
            <div className='collapse navbar-collapse' id='table'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/admin/register" className="text-light nav-link">Register Employee</Link>
                    </li>
                </ul>
            </div>
        </div>

    </nav>

    if (loading) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <table className='table'>
                        <thead>
                            <tr><Skeleton className='p-skeleton' width='100%' /></tr>
                            <tr><Skeleton className='p-skeleton' width='100%' /></tr>
                            <tr><Skeleton className='p-skeleton' width='100%' /></tr>
                            <tr><Skeleton className='p-skeleton' width='100%' /></tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Panel header="Employee List">
                            <DataTable
                                title=""
                                columns={column}
                                data={Employee}
                                selectableRows
                                contextActions={contextActions}
                                onSelectedRowsChange={handleRowSelected}
                                clearSelectedRows={toggleCleared}
                                pagination
                                subHeader

                                subHeaderComponent={

                                    <InputText className='p-inputtext w-100' placeholder='Employee Code' value={searchData}
                                        onChange={(e) => setsearchData(e.target.value)} />
                                }
                            // subHeaderAlign=""

                            />
                        </Panel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEmployee
