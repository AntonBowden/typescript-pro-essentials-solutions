import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

if (!appElement) throw new Error("There is no app");

// How do I ensure that appElement is defined?

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
