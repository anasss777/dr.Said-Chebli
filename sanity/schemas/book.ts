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
    })
  ],
})
