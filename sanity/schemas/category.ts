import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'إسم التصنيف',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'وصف للتصنيف',
      type: 'text',
    }),
  ],
})
