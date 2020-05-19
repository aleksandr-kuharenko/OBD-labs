const { User } = require('./User');
const { Concept } = require('./Concept');
const { Dimention } = require('./Dimention');
const { Indicator } = require('./Indicator');
const { Property } = require('./Property');
const { EntityProperty } = require('./EntityProperty');
const { DataPoint } = require('./DataPoint');
const { Entity } = require('./Entity');

User.hasMany(DataPoint);
User.hasMany(Concept);

DataPoint.belongsTo(Indicator);
Property.hasMany(Indicator);
Concept.hasMany(Indicator);

DataPoint.belongsToMany(Dimention, {through: 'DataPointDimenion'} );
Dimention.belongsToMany(DataPoint, {through: 'DataPointDimenion'} );
Property.hasMany(Dimention);
Concept.hasMany(Dimention);

Concept.hasMany(Entity);
Entity.belongsTo(EntityProperty);

module.exports = { 
    User, 
    Concept, 
    DataPoint, 
    Dimention, 
    Indicator, 
    Property, 
    EntityProperty,
} 
