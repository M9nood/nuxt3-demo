
// https://nuxt.com/docs/api/configuration/nuxt-config
const CONTENT_URL = 'https://scontent-qa.finnomena.com'
const LEAD_FORM_VERSION = '1.2.0-staging'
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    hid: 'custom-form-editor-script',
                    src: `${CONTENT_URL}/web-component/lead/form/${LEAD_FORM_VERSION}/finno-lead-form.min.js`
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: `${CONTENT_URL}/web-component/lead/form/${LEAD_FORM_VERSION}/finno-lead-components-frontend.css`,
                    type: 'text/css'
                }
            ]
        }
    }
})
