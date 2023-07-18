import { query, create, update, remove } from "#data/mongo.js";
import { v4 as uuidv4 } from 'uuid';


async function register (event, context, callback) {
    const user_uuid = uuidv4();
    const result = await create("journals",{user_uuid: user_uuid, entries: {}});
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully registered user ${user_uuid}!`,
            input: result,
        })
    };

    callback(null, response);
}

async function create_entry(event, context, callback) {
    const body = JSON.parse(event.body);
    const now = new Date();
    let entries = {};
    const entry = {
        body: body.body,
        emotions: body.emotions,
        timestamp: now.toISOString()
    }
    let journal = await query("journals",{user_uuid:body.id});
    if(journal.entries) entries = journal.entries;
    entries[uuidv4()] = entry;
    const result = await update("journals",{user_uuid:body.id,entries:entries});
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully added entry!`,
            result: result,
        })
    };
    return response;
}

async function modify_entry(event, context, callback) {
    const body = JSON.parse(event.body);
    const now = new Date();
    let entries = {};

    let journal = await query("journals",{user_uuid:body.id});
    if(journal.entries) entries = journal.entries;

    let entry = entries[body.entry_id];
    entry.body = body.body;
    entry.last_modified = now.toISOString();
    entry.emotions = body.emotions;
    entries[body.entry_id] = entry;

    const result = await update("journals",{user_uuid:body.id, entries:entries});
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully added entry!`,
            result: result,
        })
    };
    return response;    
}

async function list_entries(event, context, callback) {
    const body = JSON.parse(event.body);
    let journal = await query("journals", {user_uuid:body.id});
    let result = journal.entries;
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully listed entries!`,
            result: result,
        })
    };
    return response;
}

async function delete_entry(event, context, callback) {
    const body = JSON.parse(event.body);

    let journal = await query("journals",{user_uuid:body.id});
    delete journal.entries[body.entry_id];

    const result = await update("journals",journal);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully removed entry!`,
            result: result,
        })
    };
    return response;
}

async function delete_journal(event, context, callback) {
    const body = JSON.parse(event.body);
    const user_uuid = body.id;
    const result = await remove("journals",{user_uuid:user_uuid});
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully removed user!`,
            result: result,
        })
    };
    return response;
}



export { register, create_entry, modify_entry, list_entries, delete_entry, delete_journal }