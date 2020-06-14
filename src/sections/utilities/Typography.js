import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Typography = () => (
  <ScrollableAnchor id="typography">
    <section className="py-3 mb-3">
      <h2 className="h4">Typography</h2>
      <hr className="mt-1 mb-4" />

      <div className="row">
        <div className="col-sm">
          <div className="bs-component mb-3">
            <div className="mb-4">
              <h1 className="lh-title">Heading 1</h1>
              <h2 className="lh-title">Heading 2</h2>
              <h3 className="lh-title">Heading 3</h3>
              <h4 className="lh-title">Heading 4</h4>
              <h5 className="lh-title">Heading 5</h5>
              <h6 className="lh-title">Heading 6</h6>
            </div>
            <h3>
              Heading
              <small className="text-muted ml-2">With muted text</small>
            </h3>
            <p className="lead mb-4" style={{ maxWidth: "500px" }}>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
          </div>
        </div>
        <div className="col-sm">
          <div className="bs-component">
            <h2>Example body text</h2>
            <p>
              Nullam quis risus eget <a href="/">urna mollis ornare</a> vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam id dolor id nibh ultricies
              vehicula.
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              The following is <strong>rendered as bold text</strong>.
            </p>
            <p>
              The following is <em>rendered as italicized text</em>.
            </p>
            <p>
              An abbreviation of the word attribute is{" "}
              <abbr title="attribute">attr</abbr>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Typography;
