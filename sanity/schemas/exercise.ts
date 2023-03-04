import {defineField, defineType} from 'sanity'
import { isUniqueAcrossAllDocuments } from '../isUnique'

export default defineType({
  name: 'exercise',
  title: 'Exercise',
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
      name: 'difficulty',
      title: 'difficulty',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Desription',
      type: 'text',
    }),
    defineField({
      name: 'setDescription',
      title: 'Sets Description',
      type: 'array', 
      of: [{type: 'block'}]
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
      name: 'mainImage1',
      title: 'Main image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'youtubeLink',
      title: 'Youtube Link ',
      type: 'text',
    }),
    
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
