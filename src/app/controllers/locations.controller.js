import { Location } from '../models/location';

export const allLocationsAPI = (req, res, next) => {
    Location.find().exec((err, locations)  => {
        if(err){
            res.json({success: false, message: "Failed Query"})
            res.end()
        } else {
            res.write(JSON.stringify(locations))
            res.end()
        }
    })
}