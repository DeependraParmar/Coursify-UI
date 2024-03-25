import React, { useMemo } from 'react';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { usePagination, useSortBy, useTable } from 'react-table';


const UsersTable = ({ users }) => {
    const navigate = useNavigate();

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Profile Picture',
                accessor: 'profilePicture',
                Cell: ({ row }) => <img src={row.original.profilePicture} alt="Profile" />,
            },
            {
                Header: 'Name',
                accessor: 'name',
                Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original.id}`)}>{row.original.name}</span>,
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
        ],
        [navigate]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        prepareRow,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data: users,
            initialState: { pageIndex: 0, pageSize: 5 },
        },
        useSortBy,
        usePagination
    );

    return (
        <>
            <table className='table' {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {
                                        column.isSorted ? (column.isSortedDesc ? <FaSortDown /> : <FaSortUp />) : ' '
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='tablePagination'>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous Page
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next Page
                </button>
            </div>
        </>
    );
};

export default UsersTable;