/*sample function to generate body text for each skip based on select features.
 */
function getBodyText(size) {
  let text = "";
  switch (size) {
    case 4:
      text = `Perfect for small home projects, garden clean-ups, or minor refurbishments. It fits easily on most driveways and holds around 30–40 bin bags.`;
      break;

    case 5:
      text = `Slightly larger, ideal for small bathroom or kitchen renovations. Compact yet spacious enough for general household waste.`;
      break;

    case 6:
      text = `A reliable choice for medium domestic clear-outs and light building waste. It’s often called the “builder’s skip” for its versatility.`;
      break;

    case 8:
      text = `Great for bulky items like furniture, bricks, and mixed waste. Suitable for renovation and construction jobs with more debris.`;
      break;

    case 10:
      text = `Handles large volumes of light waste such as cardboard, wood, or plastic. Note: This skip is not allowed on public roads.`;
      break;

    case 12:
      text = `Popular for major renovation work, commercial clear-outs, or shop refits. It provides extra volume but must stay off-road.`;
      break;

    case 14:
      text = `Excellent for disposing of large, lightweight materials like packaging and insulation. Not suitable for soil or heavy rubble.`;
      break;

    case 16:
      text = `A high-capacity skip for bulky, low-density waste. Best for warehouse, office, or large-scale site clearances.`;
      break;

    case 20:
      text = `Designed for commercial projects that generate lots of waste. Its size makes it unsuitable for domestic use or roadside placement.`;
      break;

    case 40:
      text = `The largest skip available, ideal for industrial sites or demolition jobs. It offers maximum volume for serious waste loads.`;
      break;

    default:
      text = `Perfect for small home projects, garden clean-ups, or minor refurbishments. It fits easily on most driveways and holds around 30–40 bin bags.`;
      break;
  }

  return text;
}

export { getBodyText };
