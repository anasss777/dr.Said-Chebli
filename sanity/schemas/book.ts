import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'إسم الكتاب',
      type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'رابط الكتاب',
      type: 'file',
    }),
    defineField({
      name: 'categories',
      title: 'التصنيفات',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'نبذة عن الكتاب',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'صورة للكتاب',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ],
})
