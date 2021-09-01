// "left" -> "LEFT"
// "RiGhT" -> "right"
// "left right left" -> "left-right-left"
// "up Down left" -> "UDL"

function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}
