// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Configurators Components/ConfiguratorOption',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  /*argTypes: {
	backgroundColor: {control: 'color'},
	label: {control: 'text'},
	onClick: {action: 'onClick'},
	primary: {control: 'boolean'},
	size: {
	  control: {type: 'select'},
	  options: ['small', 'medium', 'large'],
	},
  },*/
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
    <pc-option 
      id="${args.id}"
      label="${args.label}"
      img-src="${args.imgSrc}"
      img-alt="${args.imgAlt}"
      img-size="${args.imgSize}"
      miscellaneous="${args.miscellaneous}"
      pricing="${args.pricing}"
      checked="${args.checked}"
    >
      <div slot="title">${args.slots.title}</div>
      <div slot="subtitle">${args.slots.subtitle}</div>
      <div slot="content">${args.slots.content}</div>
    </pc-option>`;
};

export const Sandbox = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Sandbox.args = {
  id: "dumb",
  label: "dumb",
  imgSrc: "assets/gate_default.png",
  imgAlt: "image alt",
  imgSize: "contain",
  checked: false,
  miscellaneous: "à partir de",
  pricing: "1549€",
  slots: {
	title: "Babord - Coulissant aspect 2 vantaux",
	subtitle: "Aluminium · Semi-ajouré",
	content: "Hauteur : min 751 - max 3052 mm <br />Largeur : min 751 - max 3052 mm"
  }
};
