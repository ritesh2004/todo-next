import mongoose,{Schema} from "mongoose";

const cardSchema = new Schema(
    {
        heading:String,
        desc:String,
        user:String
    },{
        timestamps:true
    }
);

const Test = mongoose.models.Test || mongoose.model("Test",cardSchema)

export default Test;