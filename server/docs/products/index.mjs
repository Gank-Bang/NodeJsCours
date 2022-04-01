import getAll from "./getAll.mjs";
import schema from "./model.mjs";

export default {
    paths: {
        "products":{
            ...getAll,
        },
    },
        schema: {
            ...schema,
        },
    
}; 
