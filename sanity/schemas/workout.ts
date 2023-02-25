import {defineField, defineType} from 'sanity'
import { isUniqueAcrossAllDocuments } from '../isUnique'

export default defineType({
  name: 'workout',
  title: 'Workout',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation:Rule=>Rule.required().min(8).max(80)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique:isUniqueAcrossAllDocuments
      },
    }),
    defineField({
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'text',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'avataar',
      title: 'avtaar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: [{type: 'userCategory'}]
    }),
    defineField({
      name: 'todaysWokout',
      title: 'Today Wokout',
      type: 'reference',
      to: [{type: 'workout'}]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  
})
