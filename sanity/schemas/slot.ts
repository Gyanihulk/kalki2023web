import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slot',
  title: 'Slot',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'workout',
      title: 'Wokout',
      type: 'reference',
      to: [{type: 'workout'}],
    }),
    defineField({
      name: 'slotTiming',
      title: 'Slot Timing',
      type: 'datetime',
    }),
    defineField({
      name: 'duration',
      title: 'duration',
      type: 'number',
    }),
  ],
})
