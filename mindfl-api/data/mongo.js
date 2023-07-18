import mongoose, { mongo } from "mongoose";
import "dotenv/config"

const mongo_url = `mongodb://${process.env.mongo_user}:${encodeURIComponent(process.env.mongo_pw)}@${process.env.mongo_url}?authSource=admin`;
const Schema = mongoose.Schema;

const Journal = new Schema({
    _id: { type: mongoose.ObjectId },
    user_uuid: { type: String },
    entries: { type : {} },
})

async function query(table, query){
    const mongodb = await mongoose.connect(mongo_url);
    const Journals = mongodb.model('Journals', Journal);
    let result = {};
    switch (table){
        case "journals":
            result = await Journals.findOne(query).exec();
    }
    mongodb.disconnect();
    if(result){
        delete result['__v'];
        delete result['_id'];
        console.log(`Result ${result}`);
        return result;
    }
};

async function create(table, obj){
    const mongodb = await mongoose.connect(mongo_url);
    const Journals = mongodb.model('Journals', Journal);
    let result = "";
    if (!obj._id) obj._id = new mongoose.Types.ObjectId;
    switch (table){
        case "journals":
            result = await Journals.create(obj);
    }
    mongodb.disconnect();
    return result;    
}

async function update(table, obj){
    const mongodb = await mongoose.connect(mongo_url);
    const Journals = mongodb.model('Journals', Journal);
    let result = "";
    switch (table){
        case "journals":
            result = await Journals.findOneAndUpdate(obj).exec();
    }
    mongodb.disconnect();
    return result;   
}

async function remove(table, obj){
    const mongodb = await mongoose.connect(mongo_url);
    const Journals = mongodb.model('Journals', Journal);
    let result = "";
    switch (table){
        case "journals":
            result = await Journals.findOneAndRemove(obj).exec();
    }
    mongodb.disconnect();
    return result;
}

export { query, create, update, remove };
