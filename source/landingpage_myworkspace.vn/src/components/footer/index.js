import { h } from 'preact';

import style from './style.css';


const Footer = () => (

    <footer id="footer" class={style.footer}>
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-info">
                        <h3>MKSGroup</h3>
                        <p>MyWorkspace là một sản phẩm của MKSGroup.<br/>Cung cấp công cụ hỗ trợ học tập và làm việc sáng tạo cho mọi người.</p>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Liên kết</h4>
                        <ul>
                            <li><i class="ion-ios-arrow-right"> </i> <a href="#">Trang chủ</a></li>
                            <li><i class="ion-ios-arrow-right"> </i> <a href="#">Tự giới thiệu</a></li>
                            <li><i class="ion-ios-arrow-right"> </i> <a href="#">Dịch vụ</a></li>
                            <li><i class="ion-ios-arrow-right"> </i> <a href="#">Điều khoản dịch vụ</a></li>
                            <li><i class="ion-ios-arrow-right"> </i> <a href="#">Chính sách bảo mật</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h4>Liên lạc</h4>
                        <p>
                            10A Đường 182 <br />
              Phường Tăng Nhơn Phú A<br />
              Quận 9, TPHCM <br />
                            <strong>Phone:</strong> +084 977 548345<br />
                            <strong>Email:</strong> ThachLN@mks.com.vn<br />
                        </p>

                        <div class="social-links">
                            <a href="#" class="twitter"><i class="fa fa-twitter"> </i></a>
                            <a href="#" class="facebook"><i class="fa fa-facebook"> </i></a>
                            <a href="#" class="instagram"><i class="fa fa-instagram"> </i></a>
                            <a href="#" class="google-plus"><i class="fa fa-google-plus"> </i></a>
                            <a href="#" class="linkedin"><i class="fa fa-linkedin"> </i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-newsletter">
                        <h4>Thông điệp</h4>
                        <p>Học tập là gầy dựng tài sản cho chính bạn.</p>
                        <form action="" method="post">
                            <input type="email" name="email" /><input type="submit" value="Đăng ký" />
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; Bản quyền thuộc <strong>MKSGroup</strong>.
      </div>
            <div class="credits">
                {/* <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
        --> */}
        Hỗ trợ bởi <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
        </div>
    </footer>

);
export default Footer;
