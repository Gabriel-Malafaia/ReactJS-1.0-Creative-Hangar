function Card({ showModal, dataBase }) {
  return (
    <>
      {dataBase.map((section,index) => {
        const {sectionIdentifier,sectionIcon,sectionText,hiddenIdentifier,hiddenIcon,hiddenText} = section;
        return (
          <section
            className={`${index == 0 ? 'active' : null}`}
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

            <div className={`${hiddenIdentifier} animate__animated animate__fadeIn section__down ${index !== 0 ? 'hidden' : null}`}>
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
