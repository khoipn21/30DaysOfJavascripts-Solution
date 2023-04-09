import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

if (~countries.indexOf("Ethiopia")) console.log("ETHIOPIA");
else countries.push("Ethiopia");

if (~webTechs.indexOf("Sass")) console.log("Sass in a CSS preprocess");
else {
  webTechs.push("Sass");
  console.log(webTechs);
}
