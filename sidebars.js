/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "intro",
    "graphq-vs-dql",
    {
      "Data Modeling": [
        "overview",
        "type-fields",
        "edge-predicates",
        "identification",
        "interfaces-unions",
        {
          Advanced: ["data-storage", "dql-mapping", "distribution", "facets"],
        },
      ],
    },
    {
      Directives: [
        "directives",
        "schema-directives",
        {
          Advanced: ["cascade"],
        },
      ],
    },
    "defs",
  ],
};

module.exports = sidebars;
