const url = require("url");
const querystring = require("querystring");

const successHandler = (res, data) => {
  //   let next = data.paging.next;
  //   let previous = data.paging.previous;

  //   let parsedNextRouteUrl = url.parse(next);
  //   let nextQuery = querystring.parse(parsedNextRouteUrl.query);

  //   let parsedPreviousRouteUrl = url.parse(previous);
  //   let previousQuery = querystring.parse(parsedPreviousRouteUrl.query);

  //   console.log(nextQuery);
  //   console.log(previousQuery);

  res.status(200).json({
    message: data.status.message,
    count: data.paging.count,
    data: data.data,
  });
};

module.exports = successHandler;
