

$('#customTable').DataTable( {
    ajax: {
        url: '../json/data.json',
        dataSrc: 'data'
    },
    columns: [
        { data: 'name' },
        { data: 'address' },
        { data: 'city' },
        { data: 'age' },
        { data: 'last visit' },
        { data: 'orders' }
    ]
} );
