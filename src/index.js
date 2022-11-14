// theme: 3.11.2022
// 1 - React

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.breed),
    React.createElement("h3", {}, props.animal),
  ]);
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Luna"),
  //     React.createElement("h2", {}, "dog"),
  //     React.createElement("h2", {}, "cat")
  // ])
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Animals"),
    React.createElement(Pet, { name: "Luna", animal: "dog", breed: "bone" }),
    React.createElement(Pet, {
      name: "Mekelle",
      animal: "cow",
      breed: "plant",
    }),
    React.createElement(Pet, { name: "John", animal: "parrot", breed: "rice" }),
  ]);
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Animals"),
  //     React.createElement(Pet),
  //     React.createElement(Pet),
  //     React.createElement(Pet)
  // ])
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt me!")
  // );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
