const TableColumnData = [
    {
        headerClassName: 'data-table header',
        accessor: "firstName",
        editable: true,
        isStatus: false,
        isLink: true,
        editType: 'text',
        fieldHeader: 'First Name',
        show: true,
        footer: null
    },
    {
        headerClassName: 'data-table header',
        accessor: "lastName",
        editable: true,
        editType: 'select',
        isStatus: false,
        isLink: false,
        fieldHeader: 'Last Name',
        show: true,
        editOptions: [
            'winner',
            'chicken',
            'dinner'
        ],
        footer: null
    },
    {
        headerClassName: 'data-table header -number',
        className: "-number",
        accessor: "age",
        editable: true,
        editType: "text",
        isStatus: false,
        isLink: false,
        fieldHeader: 'Age',
        show: true,
        footer: {label: "Average", type: "mean"}
    },
    {
        headerClassName: 'data-table header -number',
        className: "-number",
        accessor: "visits",
        editable: false,
        isLink: false,
        fieldHeader: 'Visits',
        show: true,
        footer: {label: "Total", type: "sum"}
    },
    {
        headerClassName: 'data-table header',
        accessor: "status",
        editable: false,
        isStatus: true,
        isLink: false,
        fieldHeader: 'Status',
        show: true,
        footer: null
    }
]

export default TableColumnData;