const List = () => {
  return (
    <div className="list">
      <div className="list__steps">
        <div>
          <div className="list__steps__number">1</div>
          <div className="list__steps__item">
            Create your account and fill in the information.
          </div>
        </div>
        <div>
          <div className="list__steps__number">2</div>
          <div className="list__steps__item">
            Upload a short video to prove your identity.
          </div>
        </div>
        <div>
          <div className="list__steps__number">3</div>
          <div className="list__steps__item">
            Complete your profile and start tutoring!
          </div>
        </div>
      </div>
      <div className="list__btn">Get started</div>
    </div>
  );
};

export default List;
