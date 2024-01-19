const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type:String, require:true},
    email: {type:String, require:true},
    phone: {type:Number, require:true},
    message: {type:String, require:true},
  },{timestamps:true});

  const User = mongoose.model('User', UserSchema);

export default User;