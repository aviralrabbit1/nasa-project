# Nasa-project
Nasa Mission control for finding inhabitable planets using data and inference taken from:

- [a-review-of-the-best-habitable-planet-candidates](https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/)

- [habitable-exoplanets-catalog](https://phl.upr.edu/projects/habitable-exoplanets-catalog)

## Architecture Diagram of the Project

```mermaid
---
title: 
displayMode: compact
---
%%{
  init: {
    'theme': 'default', %% `default`,`base`, `dark`, `forest` or `neutral`
    `startOnLoad`: true,
    'useMaxWidth': true,
    "wrap": true,
    "fontFamily": "Trebuchet MS, Verdana, Arial, Sans-Serif",
    "logLevel": "debug", %% debug/fatal/info
    "securityLevel": 'loose', %% "strict" | "loose" | "antiscript" | "sandbox" | undefined
    'themeVariables': {
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#7C0000',
      'lineColor': '#F8B229',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff'
    },
    "flowchart": {
        "defaultRenderer": "elk",
        "htmlLabels": false,
        "curve": "cardinal" %% or linear
        'topPadding': 75,
        %% this is a comment
    },
  }
}%%
flowchart LR;  

Browser([Web <br> Browser])<==>|HTTP|webApp{{Web <br> Application <br> `Frontend`}};
webApp<==>|HTTP|node{{Node API<br> `Backend` fa:fa-code}};
node<==>|HTTP|webApp{{"Web <br> Application <br> `Frontend` fa:fa-tv"}}
subgraph fa:fa-earth NASA Mission Control Project;
webApp;  
node<-->id2>Kepler_data.csv];  
node-->Backend((Express <br> server fa:fa-server));
end;
subgraph Web fa:fa-globe
    webApp<==>|HTTP|Browser([Web <br> Browser]);
    end
subgraph Database fa:fa-database
    direction TB
    id1[(Nasa Exoplanet <br> Archive fa:fa-folder-open)]:::urgent:large ==>|Manual download|id2>Kepler_data.csv fa:fa-table]
    click id1 href "https://phl.upr.edu/projects/habitable-exoplanets-catalog" _blank;
    end
classDef plain fill:#00f,stroke:#ef686d,font-weight: bolder,stroke-width:3,font-family: verdana,font-size:16px,color:#ffe5ab,width: 90px,height: 60px;
classDef k8s fill:#c2f7f9,stroke:#00f,font-weight: bolder,font-family: verdana,stroke-width:3px,font-size:16px,color:#000,text-anchor: middle;  
classDef cluster fill:#3a4563,stroke:#fffa8f,shape-rendering: crispEdges,font-weight: bolder,stroke-width:2px,color:#ffffb4,font-size:30px,stroke-dasharray: 5 5;
classDef ends fill:#ffffb4,stroke:#000800,font-weight: bolder,stroke-width:3px,color:#00214c,font-size:15px;
classDef movement font-style:italic, margin-right: 20px, width:150px;
classDef shift font-size:16px;
class webApp,node k8s;  
class Browser,id1 plain;  
class cluster cluster;
class frontend,Backend ends;
class id2 movement;
class id1 shift;
style id2 fill:#bbf,stroke:#000,stroke-width:3,color:#000,font-family: verdana,font-size:12px,width:100px,stroke-dasharray: 5 5;
```
