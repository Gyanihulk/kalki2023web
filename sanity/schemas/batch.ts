import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'batch',
  title: 'Batch',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'users',
      title: 'users',
      type: 'reference',
      to: [{type: 'user'}]
    }),
    defineField({
      name: 'workouts',
      title: 'workouts',
      type: 'reference',
      to: [{type: 'workout'}]
    }),
  ],
})
