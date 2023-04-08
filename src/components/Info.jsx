import PassportPic from "../images/passport_pic.jpg";

export default function Info(){
    return(
        <div className="info">
            <img className="info-image" src={PassportPic} alt="My passport Picture" />
            <h1 className="info-name">John Bob Ayensu</h1>
            <h3 className="info-job">Teacher</h3>
            <p className="info-web">AceTechSol.com</p>
            <div className="row g-0">
                <div className="col-sm-6 col-md-8">
                    <button type="button" className="btn btn-light">
                        <i className="fa fa-envelope"></i>
                        Email
                    </button>
                </div>
                <div className="col-sm-6 col-md-8">
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-linkedin"></i>
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    )
}