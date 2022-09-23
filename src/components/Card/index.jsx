function Card({ showModal, dataBase }) {
  return (
    <>
      {dataBase.map((section) => {
        const {sectionIdentifier,sectionIcon,sectionText,hiddenIdentifier,hiddenIcon,hiddenText} = section;
        return (
          <section
            onClick={(e) => {
              e.target.tagName == "SECTION" ? showModal(e.target) : showModal(e.target.closest("section"));
            }}
            key={sectionIdentifier}
            id={sectionIdentifier}
          >
            <div className="section__up">
              <img src={sectionIcon} alt="" />
              <h2>{sectionText}</h2>
            </div>

            <div className={`${hiddenIdentifier} animate__animated animate__fadeIn section__down hidden`}>
              <p>{hiddenText}</p>
              <img src={hiddenIcon} alt="" />
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Card;
