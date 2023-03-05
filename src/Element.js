import periodicTableData from "./PeriodicTableJSON.json";

function Element(props) {
  const elementData = periodicTableData.elements.find(
    (element) => element.symbol === props.symbol
  );

  return <div>{elementData.electron_configuration}</div>;
}

export default Element;
