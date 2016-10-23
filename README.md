# Hammock: A simpler way to find out who can hang.

Current json data format:

    {
        _id: ###,
        data: {
            user_id:
            location: {
                name:
                latitude:
                longitude:
            },
            activity:
            group: [user_id_1, user_id_2, ...],
            image:
            time: {
                start:
                end:
            }
        },
        secuirty_token: ###

    }
    
# API Calls
GET

`/getLiveEvents?securityToken={security_token}`
return an array of the live events

POST

`/addNewEvent`
{
    data: {data},
    security_token: ###
}
adds an event to the list of live events

`/deleteEvent`
{
    _id: ###
    security_token: ###
}
