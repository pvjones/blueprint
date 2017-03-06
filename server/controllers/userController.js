module.exports = {

  // RETURN CURRENT USER //
  currentUser: function(req, res, next) {
    // If user isnt on the session, then return error status
    if (!req.user) {
      return res.status(401)
        .send('current user not defined');
    } else {
      let user = req.user;
      // Return user
      return res.status(200)
        .json(user);
    }
  }

};