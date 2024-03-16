import { useState } from "react";
import { Accordion } from "../accordion/accordion.component";
import './accordion-list.styles.css';

export const AccordionList = ({ accordions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-list">
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          title={accordion.title}
          subTitle={accordion.subTitle}
          content={accordion.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
