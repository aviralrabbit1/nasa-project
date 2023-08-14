import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";
import './Footer.css';

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0", align: Centered }}>
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-2 col-sm-6 col-md-12 mt-sm-1">
                <ul className="list-unstyled list-inline social text-center">
                  <u><a className="col-sm-2"  >Made by Aviral Verma</a></u>
                  <li className="list-inline-item"><a href="https://github.com/aviralrabbit1"><i className="fa fa-github"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/aviral-verma-iiita/"><i className="fa fa-linkedin"></i></a></li>
                  {/* <li className="list-inline-item"><a href="mailto:aviral.robin@gmail.com"><i className="fa fa-google"></i></a></li> */}
                  <li className="list-inline-item"><a href="mailto:aviral.robin@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
                  <li className="list-inline-item"><a href="https://drive.google.com/drive/folders/1S-zEswKJyjGVqeJuERmHrxOtbSOHR2m4"><i className="fa fa-regular fa-file"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
