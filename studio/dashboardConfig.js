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
                  buildHookId: '5da61094d8efb2d439b882ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mc7h6xgt',
                  apiId: 'ceec822c-57b8-4626-816e-44dd99d01e0e'
                },
                {
                  buildHookId: '5da610944fa568b2ac14948d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9qkh5xsc',
                  apiId: '16034994-68d7-4288-9abd-c0b2997bc290'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaikoehn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9qkh5xsc.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
