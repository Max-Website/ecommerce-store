export default {
    name: 'rings',
    title: 'Rings',
    type: 'document',
    initialValue: {
        featured: false
    },
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotsport: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLengthe: 128
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'featured',
            title: 'Featured?',
            type: 'boolean'
        }
    ]
}