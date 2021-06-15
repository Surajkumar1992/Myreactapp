import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe('Our First Test', () => {
    it('Should Pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('Should say First Reactapp Application', () => {
        const index = fs.readFileSync("./src/index.html", "utf8");
        const {JSDOM} = jsdom;
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("Users");
        dom.window.close();
    });
});
