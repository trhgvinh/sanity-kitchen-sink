export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cd8a14d668d81801044b82',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8xzohawn',
                  apiId: '94301cb7-8307-4ad9-a241-77a49b7225bb'
                },
                {
                  buildHookId: '60cd8a14d668d8179f045248',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2iryugjp',
                  apiId: '91b316d4-77eb-4abc-ba94-6b14e78ee982'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trhgvinh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2iryugjp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
