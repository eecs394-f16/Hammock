# Hammock: A simpler way to find out who can hang.

Current json data format:

    {
        $id: ###,
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
        }
    }
    
# API Calls
`/getLiveEvents`
return an array of the live events

`/addNewEvent`
adds an event to the list of live events