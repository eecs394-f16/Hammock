# Hammock: A simpler way to find out who can hang.

Current json data format:

    {
        $id: ###,
        data: {
            name:
            location:
            start_time:
            end_time:
            event:
            user_id:
        }
    }
    
# API Calls
`/getLiveEvents`
return an array of the live events

`/addNewEvent`
adds an event to the list of live events