const SubColumnData = [
    {
        headerClassName: 'data-table header',
        accessor: "nickName",
        isStatus: false,
        isLink: true,
        editable: false,
        fieldHeader: 'Nick name',
        show: true,
    },
    {
        headerClassName: 'data-table header',
        accessor: "hobby",
        isStatus: false,
        isLink: false,
        editable: true,
        editType: 'select',
        editOptions: [
            'one',
            'two',
            'three'
        ],
        fieldHeader: 'Hobby',
        show: true,
    },
    {
        headerClassName: 'data-table header -number',
        className: "-number",
        accessor: "friendCount",
        isLink: false,
        editable: true,
        editType: 'text',
        fieldHeader: 'Friend count',
        show: true,
        footer: null
    },
    {
        headerClassName: 'data-table header',
        accessor: "status",
        isStatus: true,
        isLink: false,
        fieldHeader: 'Status',
        show: true,
    }
]

export default SubColumnData;