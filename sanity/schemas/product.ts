import {defineField, defineType} from 'sanity'
import { isUniqueAcrossAllDocuments } from '../isUnique'

export default defineType({
  name: 'product',
  title: 'Product',
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
      name: 'description',
      title: 'Desription',
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
      name: 'Image1',
      title: 'Secondary Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'Image2',
      title: 'Secondary Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'Image3',
      title: 'Secondary Image 3',
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
