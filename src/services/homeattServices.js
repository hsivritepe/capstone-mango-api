require('dotenv').config();
const knex = require('knex')(
    require('../../knexfile')[process.env.ENVIRONMENT]
);
const {
    linkAttributeToHomeSchema,
    linkAllAttributesToHomeSchema,
} = require('../helpers/validationSchemas');

const getAllHomeattsForHome = async (homeId) => {
    try {
        const data = await knex('homeatts')
            .select(
                'homeatts.id',
                'homeatts.home_id',
                'homes.home_vs_name',
                'homeatts.attribute_id',
                'homeatts.homeatts_value',
                'homeatt_categories.ha_category_name',
                'attributes.attribute_name'
            )
            .join(
                'attributes',
                'homeatts.attribute_id',
                '=',
                'attributes.id'
            )
            .join(
                'homeatt_categories',
                'attributes.ha_category_id',
                '=',
                'homeatt_categories.id'
            )
            .join('homes', 'homeatts.home_id', '=', 'homes.id')
            .where({ home_id: homeId });

        return { status: 'success', statusCode: 200, json: data };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `The data you are looking for could not be found. ${err}`,
            },
        };
    }
};

const getHomeattForHome = async (homeId, attId) => {
    try {
        const data = await knex('homeatts')
            .select(
                'homeatts.id',
                'homeatts.home_id',
                'homes.home_vs_name',
                'homeatts.attribute_id',
                'homeatts.homeatts_value',
                'homeatt_categories.ha_category_name',
                'attributes.attribute_name'
            )
            .join(
                'attributes',
                'homeatts.attribute_id',
                '=',
                'attributes.id'
            )
            .join(
                'homeatt_categories',
                'attributes.ha_category_id',
                '=',
                'homeatt_categories.id'
            )
            .join('homes', 'homeatts.home_id', '=', 'homes.id')
            .where({ home_id: homeId })
            .where({ attribute_id: attId });
        if (!data.length) {
            return {
                status: 'error',
                statusCode: 404,
                json: {
                    message: `The home attribute with id: ${attId} for home id: ${homeId} could not be found.`,
                },
            };
        }
        return { status: 'success', statusCode: 200, json: data[0] };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 404,
            json: {
                message: `Error: Unable to retrieve home attribute ${attId} for home id ${homeId}. ${err}`,
            },
        };
    }
};

const linkAttributeToHome = async (homeId, attId, body) => {
    if (!homeId || !attId) {
        return {
            status: 'error',
            statusCode: 400,
            json: { message: 'Please enter all required fields.' },
        };
    }
    try {
        const newData = {
            home_id: homeId,
            attribute_id: attId,
            ...body,
        };
        const result = await linkAttributeToHomeSchema.validateAsync(
            newData
        );
        const data = await knex('homeatts').insert(result);
        const id = data[0];
        return {
            status: 'success',
            statusCode: 201,
            json: { id, ...result },
        };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: `Error: Can not create the home attribute, ${err}`,
            },
        };
    }
};

const unlinkAttributeForHome = async (homeId, attId) => {
    try {
        const data = await knex('homeatts')
            .where({
                home_id: homeId,
                attribute_id: attId,
            })
            .del();
        if (data === 0) {
            return {
                status: 'error',
                statusCode: 400,
                json: {
                    message: `Home ID ${homeId} do not have an Attribute ID ${attId}.`,
                },
            };
        }
        return { status: 'success', statusCode: 204, json: {} };
    } catch (err) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: `Error: ${err}`,
            },
        };
    }
};

module.exports = {
    getAllHomeattsForHome,
    getHomeattForHome,
    linkAttributeToHome,
    unlinkAttributeForHome,
};
