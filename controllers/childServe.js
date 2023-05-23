const childServe = function (req, res) {
    //PID = ParentID
    const PID = parseInt(req.params.ParentID);
    //Sending PID param to children.ejs
    res.render('children', { PID });
  };
module.exports = childServe;