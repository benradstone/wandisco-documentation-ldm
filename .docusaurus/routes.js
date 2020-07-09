
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/wandisco-documentation-ldm/',
  component: ComponentCreator('/wandisco-documentation-ldm/'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/__docusaurus/debug',
  component: ComponentCreator('/wandisco-documentation-ldm/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs',
  component: ComponentCreator('/wandisco-documentation-ldm/docs'),
  
  routes: [
{
  path: '/wandisco-documentation-ldm/docs/',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs/api-reference',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/api-reference'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs/command-reference',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/command-reference'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs/configuration',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/configuration'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs/getting-started',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/getting-started'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs/operation',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/operation'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs/quickstart',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/quickstart'),
  exact: true,
  
},
{
  path: '/wandisco-documentation-ldm/docs/readme',
  component: ComponentCreator('/wandisco-documentation-ldm/docs/readme'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
