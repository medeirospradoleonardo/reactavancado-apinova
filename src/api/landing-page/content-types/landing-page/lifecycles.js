const axios = require('axios')
const netlifyWebhook = strapi.config.get("custom.netlifyWebhook")

module.exports = {
    async afterCreate(event) {
        const { data, params } = event;

        netlifyWebhook && axios.post(netlifyWebhook)
    },

    async afterUpdate(event) {
        const { result, params } = event;

        netlifyWebhook && axios.post(netlifyWebhook)
    },
};