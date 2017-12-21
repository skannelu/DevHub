export class SampleProjectsData {

  static projects = [
    {
      "label": "Projects",
      "data": "proj",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "selectable": false,
      "children": [{
        "label": "Adhoc Sportz",
        "selectable": false,
        "data": "agile",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [
          {"label": "Frontend", "icon": "fa-chrome", "data": "fe"},
          {"label": "Backend", "icon": "fa-cloud", "data": "be"},
          {"label": "Operations", "icon": "fa-cogs", "data": "ops"}
        ]
      },
        {
          "label": "SWIFT App",
          "data": "mobile",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "selectable": false,
          "children": [
            {"label": "Frontend", "icon": "fa-chrome", "data": "fe"},
            {"label": "Backend", "icon": "fa-cloud", "data": "be"},
            {"label": "Operations", "icon": "fa-cogs", "data": "ops"}
          ]
        },
      {
        "label": "Yumster App",
          "data": "agile",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "selectable": false,
          "children": [
            {"label": "Frontend", "icon": "fa-chrome", "data": "fe"},
            {"label": "Backend", "icon": "fa-cloud", "data": "be"},
            {"label": "Operations", "icon": "fa-cogs", "data": "ops"}
          ]
      },
      {
        "label": "Book-A-Vintage App",
        "data": "mobile",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "selectable": false,
        "children": [
          {"label": "Frontend", "icon": "fa-chrome", "data": "fe"},
          {"label": "Backend", "icon": "fa-cloud", "data": "be"},
          {"label": "Operations", "icon": "fa-cogs", "data": "ops"}
        ]
      }
      ]


    }
  ]
}
