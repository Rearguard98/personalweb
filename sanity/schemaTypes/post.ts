export default {
    name: 'post',
    type: 'document',
    title: 'Pos',
    fields:[
        {
            name: 'title',
            type: 'string',
            title:'Judul Pos',
        },
        {
            name:'slug',
            type:'slug',
            title:'Link pos',
            options:{
                source:'title',
            }
        },
        {
            title: 'Gambar',
            name: 'poster',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Keterangan',
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Atribut',
                }
            ]
        },
        {
            name:'excerpt',
            type:'text',
            title:'Kutipan',
        },
        {
            title: 'Konten',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            title: 'Tanggal Terbit',
            name: 'releaseDate',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today'
            }
        }
    ]

}