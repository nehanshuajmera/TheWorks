import "./accordion.styles.css";

export const Accordion = ({ title, subTitle, content, isOpen, onClick }) => {
  return (
    <div className="accordion">
      <div className="accordion-width">
      <div className="accordion-header" onClick={onClick}>
        <div className="accordion-heading">
          <div className="accordion-title">{title}</div>
          <div className="accordion-subtitle">{subTitle}</div>
        </div>
        <div className="accordion-toggle">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
      </div>
    </div>
  );
};
