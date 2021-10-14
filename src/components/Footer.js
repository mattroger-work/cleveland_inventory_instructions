import foot_img from '../Footer-TekXlerate.png'

function Footer() {
  return (
    <footer className="footer">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-6">
                        <div className="footer-left-sec text-sm-left text-center">
                            <p>©2021 TekSynap; all rights reserved. <a href="/">(Corporate Proprietary)</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="footer-right-sec text-sm-right text-center">
                            <p>Powered by: <a href="/"><img src={foot_img} alt=".." /></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="bottom-border"></span>
        </footer>
  );
}

export default Footer;
