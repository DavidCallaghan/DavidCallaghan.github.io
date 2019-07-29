var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_fire_stations_1 = new ol.format.GeoJSON();
var features_fire_stations_1 = format_fire_stations_1.readFeatures(json_fire_stations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fire_stations_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_fire_stations_1.addFeatures(features_fire_stations_1);var lyr_fire_stations_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fire_stations_1, 
                style: style_fire_stations_1,
                title: '<img src="styles/legend/fire_stations_1.png" /> fire_stations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_fire_stations_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_fire_stations_1];
lyr_fire_stations_1.set('fieldAliases', {'Publisher Label': 'Publisher Label', 'Building Name': 'Building Name', 'Address': 'Address', 'Postcode': 'Postcode', 'Telephone No.': 'Telephone No.', 'Fax No.': 'Fax No.', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_fire_stations_1.set('fieldImages', {'Publisher Label': '', 'Building Name': '', 'Address': '', 'Postcode': '', 'Telephone No.': '', 'Fax No.': '', 'Latitude': '', 'Longitude': '', });
lyr_fire_stations_1.set('fieldLabels', {'Publisher Label': 'no label', 'Building Name': 'header label', 'Address': 'inline label', 'Postcode': 'inline label', 'Telephone No.': 'inline label', 'Fax No.': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_fire_stations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});