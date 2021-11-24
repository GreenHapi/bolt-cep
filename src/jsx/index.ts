// @include './lib/json2.js'

//@ts-ignore
import { ns } from "../shared/shared.ts";

import * as aeft from "./aeft";
import * as ilst from "./ilst";
import * as anim from "./anim";
import * as ppro from "./ppro";

let main;

switch (BridgeTalk.appName) {
  case "premierepro":
    main = ppro;
    break;
  case "aftereffects":
    main = aeft;
    break;
  case "illustrator":
    main = ilst;
    break;
  default:
    //@ts-ignore
    if (app.appName === "Adobe Animate") {
      main = anim;
    }
    break;
}
//@ts-ignore
const host = typeof $ !== "undefined" ? $ : window;
host[ns] = main;
