import Parse from "parse";

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID,
  process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY
);

Parse.serverURL =
  process.env.NEXT_PUBLIC_PARSE_SERVER_URL ||
  "https://parseapi.back4app.com/";

export default Parse;