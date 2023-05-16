var config = {
    style: 'mapbox://styles/ds2333/clhps6dlv00nm01qncoxb7mim',
    accessToken: 'pk.eyJ1IjoiZHMyMzMzIiwiYSI6ImNsOHg1cGplZTAzYXozb3FzYWNnYmNsZjYifQ.3SePdbb2OGmTcQfqHc2cUw',
    showMarkers: false,
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Zoning for Housing Opportunities',
    subtitle: 'CRP6430 Affordable Housing Policies and Programs',
    byline: 'By Ada (Duxixi) Shen',
    footer: 'Data Source: See <a href = "https://www.nyc.gov/site/planning/data-maps/open-data/dwn-housing-database.page#housingdevelopmentunit">NYC DCP Housing Dataset</a> <p> Image Sources: Google Map <p> Full Report: See <a href = "https://www.nyc.gov/assets/planning/download/pdf/plans-studies/city-of-yes/city_of_yes_info_session_102722.pdf">City of Yes',
    chapters: [
        {
            id: 'redlining0',
            alignment: 'left',
            hidden: false,
            title: 'Intro',
            // image: 'images/redlining_legend.png',
            description: "New York City has not produced enough housing to keep up with the rapid growth of population and jobs that has happened in the city in recent decades. “When you look at housing production,” said <a href = 'https://www.ny1.com/nyc/all-boroughs/housing/2022/10/07/new-york-city-housing-supply-demand'> Basha Gerhards</a>, “we are a least 10 years behind.”<p>The range of housing types and the areas of housing has become more limited since zoning was introduced.The zoning rules have many restrictions and are very redundant.<p>When I was looking into the zoning history, I discovered that many rules are rooted in a history of discrimination and exclusion.",
            location: {
                center: [-74.23410, 40.71995],
                zoom: 9.44,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0 },
            { layer: 'redlining-nyc-line', opacity: 0 },
            { layer: 'nyc-bound', opacity: 0.65 },
            { layer: 'zoning-r', opacity: 0 },
            { layer: 'redlining-nyc-area', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0 },
            { layer: 'mapbox-dem', opacity: 0 }
             ],
            onChapterExit: [
            ]
        },
        {
            id: 'redlining1',
            alignment: 'left',
            hidden: false,
            title: 'NYC Redlining Map by HOLC',
            image: 'images/redlining_legend.png',
            description: 'Home Owners’ Loan Corporation (HOLC) made a redlining map of New York City in 1930s. <p>Neighborhoods that were deemed “hazardous” were shaded in red on maps,and banks were encouraged to avoid lending in those areas.',
            location: {
                center: [-74.23410, 40.71995],
                zoom: 9.44,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0 },
            { layer: 'redlining-nyc-line', opacity: 0 },
            { layer: 'redlining-nyc-area', opacity: 0.65 },
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0 },
            { layer: 'zoning-r', opacity: 0 },
            { layer: 'mapbox-dem', opacity: 0 }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'redlining2',
            alignment: 'left',
            hidden: false,
            title: 'Net Housing Units of NTAs (Neighborhood Tabulation Areas) 2010-2021',
            image: 'images/nta_point_legend.png',
            description: 'Housing units in Upper East Side-Carnegie Hill and Central have declined, where the neighborhoods were marked as Class A or B (green/blue areas) in the previous redlining map. <p> Other areas outside redlining also do not contribute much to the housing growth in the past decade.',
            location: {
                center: [-74.23410, 40.71995],
                zoom: 9.44,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0.65 },
            { layer: 'redlining-nyc-line', opacity: 0 },
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'housing-nta-2110', opacity: 0 },
            { layer: 'zoning-r', opacity: 0 },
            { layer: 'mapbox-dem', opacity: 0 }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'redlining3',
            alignment: 'left',
            hidden: false,
            title: 'Redlining Areas vs Land Use',
            image: 'images/red_landuse_legend.png',
            description: 'Areas outside of redlining are largely occupied by the R1 to R5 zoning codes, which are low-density residence districts. <p> The restrictive zoning has prohibited the possible opportunities for minority groups to move into these “desirable” communities outside of redlining areas.',
            location: {
                center: [-74.23410, 40.71995],
                zoom: 9.44,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 1 },
            { layer: 'zoning-r', opacity: 1 },
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0 },
            { layer: 'mapbox-dem', opacity: 0 }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'identify_neighborhood1',
            alignment: 'left',
            hidden: false,
            title: 'Net Housing Units of NTAs (Neighborhood Tabulation Areas) 2010-2021',
            image: 'images/nta_area_legend.png',
            description: 'The task force has looked into the areas with zero or negative net housing production (red/white areas) across the city.',
            location: {
                center: [-74.23410, 40.71995],
                zoom: 9.44,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 0 },
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0.65 },
            { layer: 'zoning-r', opacity: 0 },
            { layer: 'mapbox-dem', opacity: 0 }
            ],
            onChapterExit: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 0 },
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0.65 },
            { layer: 'zoning-r', opacity: 0 }
            ]
        },
        {
            id: 'identify_neighborhood2',
            alignment: 'left',
            hidden: false,
            title: 'Lower density -Two units in a two-family district',
            image: 'images/low_density.png',
            description: "Woodhaven is a neighborhood with little increase in housing market. There are many 1-family home in a 2-family district. <p> Irina and Alek live in a house like this and would like to add a smallsecond unit for Irina's mother.<p>They find out that the parking requirement, the minimum unit size, and inability to add an exterior staircase would make second unit impossible.",
            location: {
                center: [-73.86072, 40.69010],
                zoom: 19.90,
                pitch: 54.03,
                bearing: 151.11
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 0},
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0.65},
            { layer: 'zoning-r', opacity: 0 }
                ],
            onChapterExit: []
        },
        {
            id: 'identify_neighborhood3',
            alignment: 'left',
            hidden: false,
            title: 'Lower density -Small apartment buildings',
            image: 'images/low_commercial.png',
            description: "Omar owns a building in the classification of mixed residential & commercial buildings in Corona. <p>He wants to redevelop his family's 1-story retail strip into a classic NYC building type: A few stories of residential on top of a commercial ground floor.<p> He finds out that the combined parking requirement, FAR limits, and height limits would make that impossible.",
            location: {
                center: [-73.86105, 40.74783],
                zoom: 19.47,
                pitch: 53.53,
                bearing: -55.29
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 0},
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0.65},
            { layer: 'zoning-r', opacity: 0 }
                ],
            onChapterExit: []
        },
        {
            id: 'identify_neighborhood4',
            alignment: 'left',
            hidden: false,
            title: 'Medium and Higher Density -Smaller units',
            image: 'images/medium_density.png',
            description: "There are many grant buildings from NYC's past in the housing-decreasing areas. <p> With the declining household size across America in recent decades, Gary proposes to build a project of no-frillsstudios for the many people in NYC who want to live alone but can’t.<p>He finds out that dwelling unit factor mandates a minimum average unit size. If half the building were 450 sf studios, the other half would have to be massive 1300 to 1400 sf apartments.",
            location: {
            center: [-73.95817, 40.77864],
            zoom: 17.77,
            pitch: 58.00,
            bearing: 100.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 0},
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0.65},
            { layer: 'zoning-r', opacity: 0 }
                ],
            onChapterExit: []
        },
        {
            id: 'identify_neighborhood5',
            alignment: 'left',
            hidden: false,
            title: 'Higher Density - Conversion',
            image: 'images/conversion.png',
            description: "A housing nonprofit acquires a vacant hotel and wants to convert it to supportive housing. <p>They discover that the relaxed rules for conversion are not available for supportive housing. And the building does not comply with light and air standards. <p>Applicants in residential conversion process must follow State and City Law and file up to 7 different forms with the Department of Buildings, and may require additional approval from other agencies. ",
            location: {
            center: [-73.98879, 40.73756],
            zoom: 16.89,
            pitch: 58.00,
            bearing: 74.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 0},
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0.65},
            { layer: 'zoning-r', opacity: 0 }
                ],
            onChapterExit: []
        },
        {
            id: 'identify_neighborhood6',
            alignment: 'left',
            hidden: false,
            title: 'Medium and Higher Density -Parking',
            image: 'images/parking.png',
            description: "There are scenarios where people owns buildings in mid-high desntiy distrcits leave FAR on the table. <p> Because if they were to build out the entire lot, they would have to provide a lot more parking. <p> So if the parking requirement was not an obstacle in that way, the city would get a few more units out of each development spread across the entire city. ",
            location: {
            center: [-73.96990, 40.75553],
            zoom: 18.37,
            pitch: 52.03,
            bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            { layer: 'nta-poin-2110', opacity: 0},
            { layer: 'redlining-nyc-line', opacity: 0},
            { layer: 'redlining-nyc-area', opacity: 0},
            { layer: 'nyc-bound', opacity: 0 },
            { layer: 'housing-nta-2110', opacity: 0.65},
            { layer: 'zoning-r', opacity: 0 }
                ],
            onChapterExit: []
        }
     ]
};
