import { h, drainChildren } from './h';

type HNode<T extends Node> = (props: object|Node|string, ...children: (Node|string)[]) => T;

// Document metadata elements
//export const base: HNode<HTMLBaseElement> = h.bind(null, 'base');
//export const link: HNode<HTMLLinkElement> = h.bind(null, 'link');
//export const meta: HNode<HTMLMetaElement> = h.bind(null, 'meta');
export const style: HNode<HTMLStyleElement> = h.bind(null, 'style');
//export const title: HNode<HTMLTitleElement> = h.bind(null, 'title');

// Content sectioning elements
//export const address: HNode<HTMLElement> = h.bind(null, 'address');
export const article: HNode<HTMLElement> = h.bind(null, 'article');
export const aside: HNode<HTMLElement> = h.bind(null, 'aside');
export const footer: HNode<HTMLElement> = h.bind(null, 'footer');
export const header: HNode<HTMLElement> = h.bind(null, 'header');
export const h1: HNode<HTMLHeadingElement> = h.bind(null, 'h1');
export const h2: HNode<HTMLHeadingElement> = h.bind(null, 'h2');
export const h3: HNode<HTMLHeadingElement> = h.bind(null, 'h3');
export const h4: HNode<HTMLHeadingElement> = h.bind(null, 'h4');
export const h5: HNode<HTMLHeadingElement> = h.bind(null, 'h5');
export const h6: HNode<HTMLHeadingElement> = h.bind(null, 'h6');
//export const hgroup: HNode<HTMLElement> = h.bind(null, 'hgroup');
export const main: HNode<HTMLElement> = h.bind(null, 'main');
export const nav: HNode<HTMLElement> = h.bind(null, 'nav');
export const section: HNode<HTMLElement> = h.bind(null, 'section');

// Text content elements
export const blockquote: HNode<HTMLElement> = h.bind(null, 'blockquote');
//export const dd: HNode<HTMLElement> = h.bind(null, 'dd');
export const div: HNode<HTMLDivElement> = h.bind(null, 'div');
//export const dl: HNode<HTMLElement> = h.bind(null, 'dl');
//export const dt: HNode<HTMLElement> = h.bind(null, 'dt');
export const figcaption: HNode<HTMLElement> = h.bind(null, 'figcaption');
export const figure: HNode<HTMLElement> = h.bind(null, 'figure');
export const hr: HNode<HTMLElement> = h.bind(null, 'hr');
export const li: HNode<HTMLElement> = h.bind(null, 'li');
export const ol: HNode<HTMLElement> = h.bind(null, 'ol');
export const p: HNode<HTMLElement> = h.bind(null, 'p');
export const pre: HNode<HTMLElement> = h.bind(null, 'pre');
export const ul: HNode<HTMLElement> = h.bind(null, 'ul');

// Inline text semantics elements
export const a: HNode<HTMLAnchorElement> = h.bind(null, 'a');
//export const abbr: HNode<HTMLElement> = h.bind(null, 'abbr');
export const b: HNode<HTMLElement> = h.bind(null, 'b');
export const br: HNode<HTMLElement> = h.bind(null, 'br');
//export const cite: HNode<HTMLElement> = h.bind(null, 'cite');
export const code: HNode<HTMLElement> = h.bind(null, 'code');
export const em: HNode<HTMLElement> = h.bind(null, 'em');
export const i: HNode<HTMLElement> = h.bind(null, 'i');
export const small: HNode<HTMLElement> = h.bind(null, 'small');
export const span: HNode<HTMLElement> = h.bind(null, 'span');
export const strong: HNode<HTMLElement> = h.bind(null, 'strong');
//export const sub: HNode<HTMLElement> = h.bind(null, 'sub');
//export const sup: HNode<HTMLElement> = h.bind(null, 'sup');
//export const time: HNode<HTMLElement> = h.bind(null, 'time');

// Image and multimedia elements
//export const area: HNode<HTMLAreaElement> = h.bind(null, 'area');
export const audio: HNode<HTMLAudioElement> = h.bind(null, 'audio');
export const img: HNode<HTMLImageElement> = h.bind(null, 'img');
//export const map: HNode<HTMLMapElement> = h.bind(null, 'map');
//export const track: HNode<HTMLTrackElement> = h.bind(null, 'track');
export const video: HNode<HTMLVideoElement> = h.bind(null, 'video');

// Embedded content
//export const embed: HNode<HTMLEmbedElement> = h.bind(null, 'embed');
export const iframe: HNode<HTMLIFrameElement> = h.bind(null, 'iframe');
//export const object: HNode<HTMLObjectElement> = h.bind(null, 'object');
//export const param: HNode<HTMLParamElement> = h.bind(null, 'param');
export const picture: HNode<HTMLPictureElement> = h.bind(null, 'picture');
export const source: HNode<HTMLSourceElement> = h.bind(null, 'source');

// Scripting elements
export const canvas: HNode<HTMLCanvasElement> = h.bind(null, 'canvas');
//export const noscript: HNode<HTMLElement> = h.bind(null, 'noscript');
export const script: HNode<HTMLScriptElement> = h.bind(null, 'script');

// Demarcating edits elements
//export const del: HNode<HTMLElement> = h.bind(null, 'del');
//export const ins: HNode<HTMLElement> = h.bind(null, 'ins');

// Table elements
//export const caption: HNode<HTMLTableCaptionElement> = h.bind(null, 'caption');
//export const col: HNode<HTMLTableColElement> = h.bind(null, 'col');
//export const colgroup: HNode<HTMLTableColElement> = h.bind(null, 'colgroup');
export const table: HNode<HTMLTableElement> = h.bind(null, 'table');
export const tbody: HNode<HTMLTableSectionElement> = h.bind(null, 'tbody');
export const td: HNode<HTMLTableDataCellElement> = h.bind(null, 'td');
export const tfoot: HNode<HTMLTableSectionElement> = h.bind(null, 'tfoot');
export const th: HNode<HTMLTableHeaderCellElement> = h.bind(null, 'th');
export const thead: HNode<HTMLTableSectionElement> = h.bind(null, 'thead');
export const tr: HNode<HTMLTableRowElement> = h.bind(null, 'tr');

// Form elements
export const button: HNode<HTMLButtonElement> = h.bind(null, 'button');
//export const datalist: HNode<HTMLDataListElement> = h.bind(null, 'datalist');
//export const fieldset: HNode<HTMLFieldSetElement> = h.bind(null, 'fieldset');
export const form: HNode<HTMLFormElement> = h.bind(null, 'form');
export const input: HNode<HTMLInputElement> = h.bind(null, 'input');
export const label: HNode<HTMLLabelElement> = h.bind(null, 'label');
//export const legend: HNode<HTMLLegendElement> = h.bind(null, 'legend');
//export const meter: HNode<HTMLMeterElement> = h.bind(null, 'meter');
export const optgroup: HNode<HTMLOptGroupElement> = h.bind(null, 'optgroup');
export const option: HNode<HTMLOptionElement> = h.bind(null, 'option');
//export const output: HNode<HTMLOutputElement> = h.bind(null, 'output');
//export const progress: HNode<HTMLProgressElement> = h.bind(null, 'progress');
export const select: HNode<HTMLSelectElement> = h.bind(null, 'select');
export const textarea: HNode<HTMLTextAreaElement> = h.bind(null, 'textarea');

// Interactive elements
//export const details: HNode<HTMLDetailsElement> = h.bind(null, 'details');
//export const dialog: HNode<HTMLDialogElement> = h.bind(null, 'dialog');
//export const menu: HNode<HTMLMenuElement> = h.bind(null, 'menu');
//export const summary: HNode<HTMLElement> = h.bind(null, 'summary');

// Web Components
//export const slot: HNode<HTMLSlotElement> = h.bind(null, 'slot');
//export const template: HNode<HTMLTemplateElement> = h.bind(null, 'template');

// Special tag, creates a documentFragment
// Special tag, creates a comment
export function fragment(...children: (string|Node)[]): DocumentFragment {
  return drainChildren(document.createDocumentFragment(), children);
}

export function comment(content: string): Comment {
  return document.createComment(content);
}
