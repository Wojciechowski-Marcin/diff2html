(function () {
    if (!!!global.browserTemplates) global.browserTemplates = {};

    var Hogan = require("hogan.js");
    global.browserTemplates["file-summary-line"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<a href=\"#");
            t.b(t.v(t.f("fileHtmlId", c, p, 0)));
            t.b("\" class=\"d2h-file-link\">");
            t.b("<li class=\"d2h-file-list-line\">");
            t.b("\n" + i);
            t.b("    <span class=\"d2h-file-name-wrapper\">");
            t.b("\n" + i);
            t.b(t.rp("<fileIcon0", c, p, "      "));
            t.b("<p ")
            t.b("class=\"d2h-file-name\">");
            t.b(t.v(t.f("fileName", c, p, 0)));
            t.b("</p>");
            t.b("\n" + i);
            t.b("      <span class=\"d2h-file-stats\">");
            t.b("\n" + i);
            t.b("          <span class=\"d2h-lines-added\">");
            t.b(t.v(t.f("addedLines", c, p, 0)));
            t.b("</span>");
            t.b("\n" + i);
            t.b("          <span class=\"d2h-lines-deleted\">");
            t.b(t.v(t.f("deletedLines", c, p, 0)));
            t.b("</span>");
            t.b("\n" + i);
            t.b("      </span>");
            t.b("\n" + i);
            t.b("    </span>");
            t.b("\n" + i);
            t.b("</li>");
            t.b("</a>");
            return t.fl();
        }, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} } }, subs: {}
    });

    global.browserTemplates["file-summary-wrapper"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<div class=\"d2h-file-list-wrapper\">");
            t.b("\n" + i);
            t.b("    <div class=\"d2h-file-list-header\">");
            t.b("\n" + i);
            t.b("        <span class=\"d2h-file-list-title\">Files changed (");
            t.b(t.v(t.f("filesNumber", c, p, 0)));
            t.b(")</span>");
            t.b("\n" + i);
            t.b("        <a class=\"d2h-file-switch d2h-hide\">hide</a>");
            t.b("\n" + i);
            t.b("        <a class=\"d2h-file-switch d2h-show\">show</a>");
            t.b("\n" + i);
            t.b("    </div>");
            t.b("\n" + i);
            t.b("    <ol class=\"d2h-file-list\">");
            t.b("\n" + i);
            t.b("    ");
            t.b(t.t(t.f("files", c, p, 0)));
            t.b("\n" + i);
            t.b("    </ol>");
            t.b("\n" + i);
            t.b("</div>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["generic-column-line-number"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<tr>");
            t.b("\n" + i);
            t.b("    <td class=\"");
            t.b(t.v(t.f("lineClass", c, p, 0)));
            t.b(" ");
            t.b(t.v(t.d("diffParser.LINE_TYPE.INFO", c, p, 0)));
            t.b("\"></td>");
            t.b("\n" + i);
            t.b("    <td class=\"");
            t.b(t.v(t.d("diffParser.LINE_TYPE.INFO", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            t.b("        <div class=\"");
            t.b(t.v(t.f("contentClass", c, p, 0)));
            t.b(" ");
            t.b(t.v(t.d("diffParser.LINE_TYPE.INFO", c, p, 0)));
            t.b("\">");
            t.b(t.t(t.f("blockHeader", c, p, 0)));
            t.b("</div>");
            t.b("\n" + i);
            t.b("    </td>");
            t.b("\n" + i);
            t.b("</tr>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["generic-empty-diff"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<tr>");
            t.b("\n" + i);
            t.b("    <td class=\"");
            t.b(t.v(t.d("diffParser.LINE_TYPE.INFO", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            t.b("        <div class=\"");
            t.b(t.v(t.f("contentClass", c, p, 0)));
            t.b(" ");
            t.b(t.v(t.d("diffParser.LINE_TYPE.INFO", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            t.b("            File without changes");
            t.b("\n" + i);
            t.b("        </div>");
            t.b("\n" + i);
            t.b("    </td>");
            t.b("\n" + i);
            t.b("</tr>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["generic-file-path"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<span class=\"d2h-file-name-wrapper\">");
            t.b("\n" + i);
            t.b(t.rp("<fileIcon0", c, p, "    "));
            t.b("    <span class=\"d2h-file-name\">");
            t.b(t.v(t.f("fileDiffName", c, p, 0)));
            t.b("</span>");
            t.b("\n" + i);
            t.b(t.rp("<fileTag1", c, p, "    "));
            t.b("</span>");
            return t.fl();
        }, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} }, "<fileTag1": { name: "fileTag", partials: {}, subs: {} } }, subs: {}
    });

    global.browserTemplates["generic-line"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<tr>");
            t.b("\n" + i);
            t.b("    <td class=\"");
            t.b(t.v(t.f("lineClass", c, p, 0)));
            t.b(" ");
            t.b(t.v(t.f("type", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            t.b("      ");
            t.b(t.t(t.f("lineNumber", c, p, 0)));
            t.b("\n" + i);
            t.b("    </td>");
            t.b("\n" + i);
            t.b("    <td class=\"");
            t.b(t.v(t.f("type", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            t.b("        <div class=\"");
            t.b(t.v(t.f("contentClass", c, p, 0)));
            t.b(" ");
            t.b(t.v(t.f("type", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            if (t.s(t.f("prefix", c, p, 1), c, p, 0, 171, 247, "{{ }}")) {
                t.rs(c, p, function (c, p, t) {
                    t.b("            <span class=\"d2h-code-line-prefix\">");
                    t.b(t.t(t.f("prefix", c, p, 0)));
                    t.b("</span>");
                    t.b("\n" + i);
                });
                c.pop();
            } if (t.s(t.f("content", c, p, 1), c, p, 0, 279, 353, "{{ }}")) {
                t.rs(c, p, function (c, p, t) {
                    t.b("            <span class=\"d2h-code-line-ctn\">");
                    t.b(t.t(t.f("content", c, p, 0)));
                    t.b("</span>");
                    t.b("\n" + i);
                });
                c.pop();
            } t.b("        </div>");
            t.b("\n" + i);
            t.b("    </td>");
            t.b("\n" + i);
            t.b("</tr>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["generic-wrapper"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<div class=\"d2h-wrapper\">");
            t.b("\n" + i);
            t.b("    ");
            t.b(t.t(t.f("content", c, p, 0)));
            t.b("\n" + i);
            t.b("</div>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["icon-file-added"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-added\" height=\"16\" title=\"added\" version=\"1.1\" viewBox=\"0 0 14 16\"");
            t.b("\n" + i);
            t.b("     width=\"14\">");
            t.b("\n" + i);
            t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z\"></path>");
            t.b("\n" + i);
            t.b("</svg>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["icon-file-changed"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-changed\" height=\"16\" title=\"modified\" version=\"1.1\"");
            t.b("\n" + i);
            t.b("     viewBox=\"0 0 14 16\" width=\"14\">");
            t.b("\n" + i);
            t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z\"></path>");
            t.b("\n" + i);
            t.b("</svg>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["icon-file-deleted"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-deleted\" height=\"16\" title=\"removed\" version=\"1.1\"");
            t.b("\n" + i);
            t.b("     viewBox=\"0 0 14 16\" width=\"14\">");
            t.b("\n" + i);
            t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM11 9H3V7h8v2z\"></path>");
            t.b("\n" + i);
            t.b("</svg>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["icon-file-renamed"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-moved\" height=\"16\" title=\"renamed\" version=\"1.1\"");
            t.b("\n" + i);
            t.b("     viewBox=\"0 0 14 16\" width=\"14\">");
            t.b("\n" + i);
            t.b("    <path d=\"M6 9H3V7h3V4l5 4-5 4V9z m8-7v12c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1z m-1 0H1v12h12V2z\"></path>");
            t.b("\n" + i);
            t.b("</svg>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["icon-file"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<svg aria-hidden=\"true\" class=\"d2h-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">");
            t.b("\n" + i);
            t.b("    <path d=\"M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z\"></path>");
            t.b("\n" + i);
            t.b("</svg>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["line-by-line-file-diff"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<div id=\"");
            t.b(t.v(t.f("fileHtmlId", c, p, 0)));
            t.b("\" class=\"d2h-file-wrapper\" data-lang=\"");
            t.b(t.v(t.d("file.language", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            t.b("    <div class=\"d2h-file-header\">");
            t.b("\n" + i);
            t.b("    ");
            t.b(t.t(t.f("filePath", c, p, 0)));
            t.b("\n" + i);
            t.b("    </div>");
            t.b("\n" + i);
            t.b("    <div class=\"d2h-file-diff\">");
            t.b("\n" + i);
            t.b("        <div class=\"d2h-code-wrapper\">");
            t.b("\n" + i);
            t.b("            <table class=\"d2h-diff-table\">");
            t.b("\n" + i);
            t.b("                <tbody class=\"d2h-diff-tbody\">");
            t.b("\n" + i);
            t.b("                ");
            t.b(t.t(t.f("diffs", c, p, 0)));
            t.b("\n" + i);
            t.b("                </tbody>");
            t.b("\n" + i);
            t.b("            </table>");
            t.b("\n" + i);
            t.b("        </div>");
            t.b("\n" + i);
            t.b("    </div>");
            t.b("\n" + i);
            t.b("</div>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["line-by-line-numbers"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<div class=\"line-num1\">");
            t.b(t.v(t.f("oldNumber", c, p, 0)));
            t.b("</div>");
            t.b("\n" + i);
            t.b("<div class=\"line-num2\">");
            t.b(t.v(t.f("newNumber", c, p, 0)));
            t.b("</div>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["side-by-side-file-diff"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<div id=\"");
            t.b(t.v(t.f("fileHtmlId", c, p, 0)));
            t.b("\" class=\"d2h-file-wrapper\" data-lang=\"");
            t.b(t.v(t.d("file.language", c, p, 0)));
            t.b("\">");
            t.b("\n" + i);
            t.b("    <div class=\"d2h-file-header\">");
            t.b("\n" + i);
            t.b("      ");
            t.b(t.t(t.f("filePath", c, p, 0)));
            t.b("\n" + i);
            t.b("    </div>");
            t.b("\n" + i);
            t.b("    <div class=\"d2h-files-diff\">");
            t.b("\n" + i);
            t.b("        <div class=\"d2h-file-side-diff\">");
            t.b("\n" + i);
            t.b("            <div class=\"d2h-code-wrapper\">");
            t.b("\n" + i);
            t.b("                <table class=\"d2h-diff-table\">");
            t.b("\n" + i);
            t.b("                    <tbody class=\"d2h-diff-tbody\">");
            t.b("\n" + i);
            t.b("                    ");
            t.b(t.t(t.d("diffs.left", c, p, 0)));
            t.b("\n" + i);
            t.b("                    </tbody>");
            t.b("\n" + i);
            t.b("                </table>");
            t.b("\n" + i);
            t.b("            </div>");
            t.b("\n" + i);
            t.b("        </div>");
            t.b("\n" + i);
            t.b("        <div class=\"d2h-file-side-diff\">");
            t.b("\n" + i);
            t.b("            <div class=\"d2h-code-wrapper\">");
            t.b("\n" + i);
            t.b("                <table class=\"d2h-diff-table\">");
            t.b("\n" + i);
            t.b("                    <tbody class=\"d2h-diff-tbody\">");
            t.b("\n" + i);
            t.b("                    ");
            t.b(t.t(t.d("diffs.right", c, p, 0)));
            t.b("\n" + i);
            t.b("                    </tbody>");
            t.b("\n" + i);
            t.b("                </table>");
            t.b("\n" + i);
            t.b("            </div>");
            t.b("\n" + i);
            t.b("        </div>");
            t.b("\n" + i);
            t.b("    </div>");
            t.b("\n" + i);
            t.b("</div>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["tag-file-added"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<span class=\"d2h-tag d2h-added d2h-added-tag\">ADDED</span>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["tag-file-changed"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<span class=\"d2h-tag d2h-changed d2h-changed-tag\">CHANGED</span>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["tag-file-deleted"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<span class=\"d2h-tag d2h-deleted d2h-deleted-tag\">DELETED</span>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    global.browserTemplates["tag-file-renamed"] = new Hogan.Template({
        code: function (c, p, i) {
            var t = this;
            t.b(i = i || "");
            t.b("<span class=\"d2h-tag d2h-moved d2h-moved-tag\">RENAMED</span>");
            return t.fl();
        }, partials: {}, subs: {}
    });

    module.exports = global.browserTemplates;

})();

