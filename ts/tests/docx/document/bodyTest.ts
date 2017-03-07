import { Body } from "../../../docx/document/body";
import { assert } from "chai";
import { SectionProperties } from "../../../docx/document/body/section-properties";
import { PageSize } from "../../../docx/document/body/page-size";
import { PageMargin } from "../../../docx/document/body/page-margin";
import { Columns } from "../../../docx/document/body/columns";
import { DocumentGrid } from "../../../docx/document/body/doc-grid";

function jsonify(obj: Object) {
    let stringifiedJson = JSON.stringify(obj);
    return JSON.parse(stringifiedJson);
}

describe("Body", () => {
    let body: Body;

    beforeEach(() => {
        body = new Body();
        body.push(new SectionProperties());
        body.push(new PageSize());
        body.push(new PageMargin());
        body.push(new Columns());
        body.push(new DocumentGrid());
    });

    describe("#constructor()", () => {

        it("should create the Section Properties", () => {
            let newJson = jsonify(body);
            assert.equal(newJson.root[0].rootKey, "w:sectPr");
        });

        it("should create the Page Size", () => {
            let newJson = jsonify(body);
            assert.equal(newJson.root[1].rootKey, "w:pgSz");
        });

        it("should create the Page Margin", () => {
            let newJson = jsonify(body);
            assert.equal(newJson.root[2].rootKey, "w:pgMar");
        });

        it("should create the Columns", () => {
            let newJson = jsonify(body);
            assert.equal(newJson.root[3].rootKey, "w:cols");
        });

        it("should create the Document Grid", () => {
            let newJson = jsonify(body);
            assert.equal(newJson.root[4].rootKey, "w:docGrid");
        });
    });
});