export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {name: 'name', type: 'string', title: 'Menu Name'},
    {name: 'price', type: 'number', title: 'Price'},
    {name: 'description', type: 'string', title: 'Description'},
    {
      name: 'imageUrl',
      title: 'product image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
