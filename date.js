module.exports = getdate;

function getdate() {
        var today = new Date();

        var options = {
          weekday: "long",
          day: "numeric",
          month: "long"
        };

var day = today.toLocaleString("en-us",options);

return day;
};
