import Container from "../../components/global/container";
import Header from "../../components/global/Header";
import styles from "./styles.module.scss";
import WriterInfo from "./WriterInfo";

const Article = () => {
  return (
    <div>
      <Header />
      <Container className="mt-32">
        <main className="px-56">
          <article className={styles.articleContainer}>
            <header>
              <div className={styles.title}>
                CSS Naming Conventions: Fewer Rules, more Fun
              </div>
              <div className={styles.subTitle}>
                The ease of using straightforward CSS Naming Conventions in
                large scale projects.
              </div>

              <WriterInfo />
            </header>

            <p>
              Naming Conventions have proven to be a great guide line for all
              kind of things people want to name. There are{" "}
              <a href="#">Systematic Names</a> in biology and chemistry, and a
              specific scheme for postal codes which are kind of a naming
              convention for regions. Also{" "}
              <a href="#">products have a scheme</a> for getting their names:
              Books for example have ISBN. Or, more specific, Nokia{" "}
              <a href="#">has naming conventions</a> for their products.
            </p>

            <img
              src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=500&q=80"
              alt=""
            />

            <p>
              Naming conventions in code are called{" "}
              <a href="#">Identifier Naming Convention</a> and are well known by
              most software engineers for a long time. In CSS there we saw a
              push in Naming Convention establishment within the last few years
              with concepts like SMACSS, OOCSS and BEM which provide a decent
              standard for naming elements.
            </p>
            <p>
              In general these guide lines are based upon how you build your
              styles and what type of granularity you want to support within
              your code.
            </p>
            <p>
              The concept of what I call <em>Structured Components</em> has
              proven to be a good one in all of the above named conventions.
              Structured components consist of the following elements:
            </p>

            <p>
              In general these guide lines are based upon how you build your
              styles and what type of granularity you want to support within
              your code.
            </p>
            <p>
              The concept of what I call Structured Components has proven to be
              a good one in all of the above named conventions. Structured
              components consist of the following elements:
            </p>
            <p>
              Components: A page module that has a certain purpose and is a
              wrapper for its children, in example a modal or a slider can be a
              component.
            </p>
            <p>
              Nested Elements: Parts of which a component can consist, sometimes
              similar across components.
            </p>
            <p>
              Variants: A component and its containing elements which are
              modified in a certain way.
            </p>
            <p>
              States: The state of a component or nested element is modified by
              user interaction, for example a disabled button.
            </p>
            <p>
              The Naming Conventions named above, mainly BEM in my opinion,
              abstract this model to provide a complex ruleset for each and
              every case you run into while working with HTML and CSS. For sure
              you want to nest components into each other to be more flexible
              and to have even more options.
            </p>
          </article>
        </main>
      </Container>
    </div>
  );
};

export default Article;
