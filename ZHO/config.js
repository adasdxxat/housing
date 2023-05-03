var config = {
    style: 'mapbox://styles/ds2333/clgvrqen900es01p806ps1o6e',
    accessToken: 'pk.eyJ1IjoiZHMyMzMzIiwiYSI6ImNsaDd4MXY1cTAzMjAzZWxkbHo3Zml3OTAifQ.RhAdqZa-5LnS8ihtQvN56w',
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
            id: 'chapter_1',
            alignment: 'left',
            hidden: false,
            title: 'Neighborhood Tabulation Areas (NTAs) Net Housing Units 2021',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks</a>. New York City Housing Authority public housing developments were affected. <a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected</a>. With rising sea levels from climate change and the <a href="https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html">promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this? ',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Flood Damages to the Red Hook Houses',
            image: 'images/flood.jpg',
            description: 'The Red Hook Houses are two connected public housing complexes located in Red Hook, Brooklyn, New York City. Managed by the New York City Housing Authority (NYCHA), they comprise the largest housing development in Brooklyn. The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. During Hurricane Sandy in 2012, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides.',
            location: {
                center: [-74.00963, 40.67597],
                zoom: 16.11,
                pitch: 45.00,
                bearing: 0.00
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
            onChapterEnter: [],
            onChapterExit: []
        },
     ]
};
