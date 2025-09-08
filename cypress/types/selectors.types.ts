export type IdSelector = `#${string}`;

export type ClassSelector = `.${string}`;

export type DataSelector = `[data-test=${string}]`;

/** Texto visível na tela (usado com cy.contains) */
export type TextSelector = string;