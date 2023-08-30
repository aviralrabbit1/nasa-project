# Nasa-project
Nasa Mission control for finding inhabitable planets using data and inference taken from:

- [a-review-of-the-best-habitable-planet-candidates](https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/)

- [habitable-exoplanets-catalog](https://phl.upr.edu/projects/habitable-exoplanets-catalog)

## Architecture Diagram of the Project

```mermaid
%%{
  init: {
    'theme': 'default',
    'themeVariables': {
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#7C0000',
      'lineColor': '#F8B229',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff'
    }
  }
}%%
graph LR;  
Browser([Browser])<==>|HTTP|webApp{{Web Application}};
webApp<==>|HTTP|node{{Node API}};
webApp==>frontend[Frontend];
node<==>|HTTP|webApp{{Web Application}}
subgraph NASA Mission Control Project;
frontend;
webApp;  
node<-->id2>Kepler_data.csv];  
node-->Backend[Backend];
click frontend "https://github.com/aviralrabbit1/nasa-project/blob/main/client.README.md"
click Backend "https://github.com/aviralrabbit1/nasa-project/blob/main/server.README.md"
click id2 "https://github.com/aviralrabbit1/nasa-project/blob/main/server/data/kepler_data.csv"
click node "https://github.com/aviralrabbit1/nasa-project/tree/main/server/src"
click webApp "https://github.com/aviralrabbit1/nasa-project/tree/main/server/public"
end;
subgraph Web
    webApp<==>|HTTP|Browser([Browser]);
    end
subgraph Data
    id1[(Nasa Exoplanet Archive)]==>|Manual download|id2>Kepler_data.csv]
    click id1 "https://phl.upr.edu/projects/habitable-exoplanets-catalog" _blank;
    end
classDef plain fill:#00f,stroke:#ef686d,stroke-width:2px,font-size:16px,font-size:16px,color:#ffe5ab;
classDef k8s fill:#c2f7f9,stroke:#641ae6,stroke-width:2px,font-size:16px,color:#000;  
classDef cluster fill:#3a4563,stroke:#fffa8f,stroke-width:2px,color:#ffffb4,font-size:30px,stroke-dasharray: 5 5;
classDef ends fill:#ffd85d,stroke:#000800,stroke-width:2px,color:#00214c;
class webApp,node k8s;  
class Browser,id1 plain;  
class cluster cluster;
class frontend,Backend ends;
style id2 fill:#bbf,stroke:#000,stroke-width:2px,color:#000,stroke-dasharray: 5 5;
```
