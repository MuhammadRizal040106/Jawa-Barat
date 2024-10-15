var wms_layers = [];

var format_adm_kabkota_fix_geometri_0 = new ol.format.GeoJSON();
var features_adm_kabkota_fix_geometri_0 = format_adm_kabkota_fix_geometri_0.readFeatures(json_adm_kabkota_fix_geometri_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_kabkota_fix_geometri_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_kabkota_fix_geometri_0.addFeatures(features_adm_kabkota_fix_geometri_0);
var lyr_adm_kabkota_fix_geometri_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_kabkota_fix_geometri_0, 
                style: style_adm_kabkota_fix_geometri_0,
                popuplayertitle: "adm_kabkota_fix_geometri",
                interactive: true,
    title: 'adm_kabkota_fix_geometri<br />\
    <img src="styles/legend/adm_kabkota_fix_geometri_0_0.png" /> 0 - 0<br />\
    <img src="styles/legend/adm_kabkota_fix_geometri_0_1.png" /> 0 - 19734<br />\
    <img src="styles/legend/adm_kabkota_fix_geometri_0_2.png" /> 19734 - 23493<br />\
    <img src="styles/legend/adm_kabkota_fix_geometri_0_3.png" /> 23493 - 33702<br />\
    <img src="styles/legend/adm_kabkota_fix_geometri_0_4.png" /> 33702 - 67750<br />'
        });

lyr_adm_kabkota_fix_geometri_0.setVisible(true);
var layersList = [lyr_adm_kabkota_fix_geometri_0];
lyr_adm_kabkota_fix_geometri_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_adm_kabkota_fix_geometri_0.set('fieldImages', {'OBJECTID': '', 'WADMKK': '', 'WADMPR': '', 'LUAS': '', 'GIS_JM_PST': '', 'GIS_NM_INS': '', });
lyr_adm_kabkota_fix_geometri_0.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_adm_kabkota_fix_geometri_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});