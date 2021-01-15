export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '600211d4d3f5ac00a050681e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cjmu7m71',
                  apiId: '4a8879d2-7de4-4ec0-8268-d68ff6bc69e1'
                },
                {
                  buildHookId: '600211d40ba793011df30d1a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ay3k2i9b',
                  apiId: '16cf7d9c-331c-47ce-9156-3509b3e2173f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/natalyjazzviolin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ay3k2i9b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
