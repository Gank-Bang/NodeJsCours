export default {

    product: {

        type: "object",

        properties:{
            name:{
                type:"string",
            },
            quantity:{
                type:"integer",
            }
        }

    },

    products: {

        type: "object",

        additionalProperties: { $ref: "#/components/schemas/product"},

    },

};