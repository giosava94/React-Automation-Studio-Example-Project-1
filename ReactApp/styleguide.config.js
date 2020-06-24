const path = require('path')
module.exports = {
  pagePerSection:true,
  theme: {

    fontFamily: {
      base: 'Roboto'
    }
  },

  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/React-Automation-Studio/styleguide/Wrapper'),
    //LogoRenderer: path.join(__dirname, './src/React-Automation-Studio/styleguide/components/Logo'),
//    StyleGuide: path.join(__dirname, './src/React-Automation-Studio/styleguide/components/StyleGuide'),
	//	StyleGuideRenderer: path.join(__dirname, './src/React-Automation-Studio/styleguide/components/StyleGuideRenderer'),
	//	SectionsRenderer: path.join(__dirname, './src/React-Automation-Studio/styleguide/components/SectionsRenderer'),



  },
  sections: [
    {
      name: 'Introduction',
      content: 'src/React-Automation-Studio/docs/introduction.md'
    },

    {
      name: 'Documentation',
      content: 'src/React-Automation-Studio/docs/documentation.md'
    },
    {
      name: 'Installation Guide',
      content: 'src/React-Automation-Studio/docs/installationGuide.md',
      sections: [
        {
          name: 'Installation',
          content: 'src/React-Automation-Studio/docs/installation/installation.md',
        },
        {
          name: 'Launching the Docker compose files',
          content: 'src/React-Automation-Studio/docs/installation/launching.md',
        },
        {
          name: 'Configuring Enviroment Variables',
          content: 'src/React-Automation-Studio/docs/installation/userloginOverview.md',
          sections: [
            {
              name: ' Enabling login and authentication',
              content: 'src/React-Automation-Studio/docs/installation/userlogin.md',
            },
            {
              name: ' Enabling user access rights',
              content: 'src/React-Automation-Studio/docs/installation/userAccessRights.md',
            },
            {
              name: ' Enabling HTTPS',
              content: 'src/React-Automation-Studio/docs/installation/https.md',
            },
          ]
        },


      ]
    },
    {
      name: 'Style Guide',
      content: 'src/React-Automation-Studio/docs/styleguide.md',
      sections: [
        {
          name: 'How It Works',
          content: 'src/React-Automation-Studio/docs/layout/howItWorks.md',
        },
        {
          name: 'Sample Layouts',
          content: 'src/React-Automation-Studio/docs/layout/sampleLayouts.md',
          components: 'src/React-Automation-Studio/docs/layout/layoutExamples/*.js',
          exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
          usageMode: 'hide' // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Layout Wrapper Components',
          content: 'src/React-Automation-Studio/docs/WorkingWithLayouts.md',
          components: 'src/React-Automation-Studio/components/UI/Layout/ComposedLayouts/*.js',
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Base Components',
          content: 'src/React-Automation-Studio/docs/WorkingWithComponents.md',
          components: 'src/React-Automation-Studio/components/BaseComponents/*.js',
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Widget and PV Components',
          content: 'src/React-Automation-Studio/docs/widget/widget.md',
          components: ['src/React-Automation-Studio/components/SystemComponents/Widgets/Widget.js', 'src/React-Automation-Studio/components/SystemComponents/PV.js', 'src/React-Automation-Studio/components/ExperimentalExamples/Mobile/DynamicPvFieldExample.js'],
          exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand', // 'hide' | 'collapse' | 'expand'




        },
        {
          name: 'Experimental Base Components',
          content: 'src/React-Automation-Studio/docs/WorkingWithComponents.md',
          components: 'src/React-Automation-Studio/components/ExperimentalBaseComponents/*.js',
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        },
        { 
          name: "LNL Components",
          components: "src/components/LNLComponents/*.js",
          exampleMode: 'collapse',
          usageMode: 'expand',
        },
      ],
      sectionDepth: 2
    },
   // {
   //   name: 'Documentation',
   //   sections: [
   //     {
   //       name: 'Installation',
   //       content: 'docs/installation.md',
   //       description: 'The description for the installation section'
   //     },
   //     {
   //       name: 'Configuration',
   //       content: 'docs/configuration.md'
   //     },
   //     {
   //       name: 'Live Demo',
   //       external: true,
   //       href: 'http://example.com'
   //     }
   //   ]
   // },


 ]
}
