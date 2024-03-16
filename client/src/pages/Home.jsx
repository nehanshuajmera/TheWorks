import { AccordionList } from "../components/accordion-list/accordion-list.component";
import { Form } from "../components/form/form.component";
import { AlphabetSort } from "../components/alphabetic-sort/alphabetic-sort.component";
import { SortBox } from "../components/sort-box/sort-box.component";
import { useState } from "react";
import "./Home.css";

export const Home = () => {
  const initialAccordions = [
    { index: "1", title: "America", subTitle: "Sub Heading 1", content: "Content 1" },
    { index: "2", title: "Hello", subTitle: "Sub Heading 2", content: "Content 2" },
    { index: "3", title: "Welcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "4", title: "Melcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "5", title: "Telcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "6", title: "Delcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "7", title: "Kelcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "8", title: "Melcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "9", title: "Celcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "10", title: "Lelcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "11", title: "jelcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "12", title: "Nelcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "13", title: "Xelcome", subTitle: "Sub Heading 3", content: "Content 3" },
    { index: "14", title: "Melcome", subTitle: "Sub Heading 3", content: "Content 3" },
  ];
  const [accordions, setAccordions] = useState(initialAccordions);

  const handleAlphaSort = (letter) => {
    const sortedAccordions = initialAccordions.filter(accordion =>
      accordion.title.startsWith(letter)
    );
    setAccordions(sortedAccordions);
  };

  const handleSort = (sortOption) => {
    const sortedAccordions = [...accordions];
    if (sortOption === "leastViewed") {
      sortedAccordions.sort((a, b) => parseInt(a.index) - parseInt(b.index));
    } else {
      sortedAccordions.sort((a, b) => parseInt(b.index) - parseInt(a.index));
    }
    setAccordions(sortedAccordions);
  };

  return (
    <div className="home">
      <section className="search-sort-container">
        <div className="search-sort">
          <AlphabetSort onSort={handleAlphaSort} />
          <SortBox onSort={handleSort} />
        </div>
      </section>
      <section className="accordion-container">
        <AccordionList accordions={accordions} />
      </section>
      <section className="form-container">
        <Form />
      </section>
    </div>
  );
};
