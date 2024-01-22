import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'إسم الفيديو',
      type: 'string',
    }),
    defineField({
      name: 'videoLink',
      title: 'رابط الفيديو',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'وصف للفيديو',
      type: 'blockContent',
    }),
  ],
})
