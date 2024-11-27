import {defineField} from 'sanity'

const menu = {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'menuImage',
      title: 'MenuImage',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      options: {hotspot: true},
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Menu slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'restaurant',
      title: 'restaurant',
      type: 'reference',
      to: [
        {
          type: 'restaurant',
        },
      ],
    }),
  ],
}

export default menu
