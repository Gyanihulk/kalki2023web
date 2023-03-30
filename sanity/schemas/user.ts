import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../isUnique'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(8).max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
    }),
    defineField({
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email-id',
      type: 'email',
    }),
    defineField({
      name: 'address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string', title: 'Street name'},
        {name: 'streetNo', type: 'string', title: 'Street number'},
        {name: 'city', type: 'string', title: 'City'},
        {name: 'zipCode', type: 'string', title: 'Zip Code'},
      ],
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
      name: 'usertype',
      title: 'User Type',
      type: 'reference',
      to: [{type: 'userCategory'}],
    }),
    defineField({
      name: 'batch',
      title: 'Batch',
      type: 'reference',
      to: [{type: 'batch'}],
    }),
    defineField({
      name: 'workout',
      title: 'Workout',
      type: 'reference',
      to: [{type: 'workout'}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
