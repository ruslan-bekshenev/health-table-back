const whitelist = ["*"];

export const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist[0] === "*") {
      callback(null, true);
    } else {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
};
