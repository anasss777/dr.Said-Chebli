import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: '',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'العنوان',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'صورة المقالة',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'عنوان للصورة',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'التصنيفات',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'محتوى المقالة',
      type: 'blockContent',
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
