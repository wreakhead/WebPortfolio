import Grid from "@material-ui/core/Grid";

const CommonLayout = (props) => {
  return (
    <>
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="my-3">
                    {props.greet}
                    <strong className="brand-name"> {props.title}</strong>
                  </h2>
                  <h3 className="my-3">{props.description}</h3>
                  <div className="mt-3">{props.button}</div>
                </div>
                <div className={props.animate}>
                  <Grid item xs={12} sm={10} lg={10}>
                    <img
                      className="img-fluid imgstyle"
                      alt="hello_image"
                      src={props.image}
                    />
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonLayout;
