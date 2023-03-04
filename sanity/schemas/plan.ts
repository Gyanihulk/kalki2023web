import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'plan',
  title: 'Plan',
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
      name: 'marketPrice',
      title: 'Market Price',
      type: 'number',
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
    }),
    defineField({
      name: 'limitedtimedeal',
      title: 'Limited Time Deal',
      type: 'boolean',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'workout',
      title: 'Workout',
      type: 'array',
      of: [{type: 'reference', to: {type: 'workout'}}],
    }),
    
  ],
})
