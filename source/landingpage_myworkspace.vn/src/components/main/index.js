import { h } from 'preact';

import style from './style.css';

const Main = () => (
<main id="main" class={style.main}>

{/* <!--==========================
  Featured Services Section
============================--> */}
<section id="featured-services">
  <div class="container">
    <div class="row">

      <div class="col-lg-4 box">
        <i class="ion-ios-bookmarks-outline"> </i>
        <h4 class="title"><a href="">Học tập là để gầy dựng tài sản!</a></h4>
        <p class="description">Chúng tôi luôn nỗ lực làm việc và học tập để phục vụ bạn.</p>
      </div>

      <div class="col-lg-4 box box-bg">
        <i class="ion-ios-stopwatch-outline"> </i>
        <h4 class="title"><a href="">Tối ưu</a></h4>
        <p class="description">Mang tới giải pháp tối ưu, tiết kiệm thời gian và chi phí cho bạn là mục tiêu của chúng tôi.</p>
      </div>

      <div class="col-lg-4 box">
        <i class="ion-ios-heart-outline"> </i>
        <h4 class="title"><a href="">Chia sẻ</a></h4>
        <p class="description">Sự trải nghiệm và chia sẻ năng lực về cộng nghệ để giúp cuộc sống tốt hơn, hạnh phúc hơn là đích đến của chúng tôi.</p>
      </div>

    </div>
  </div>
</section>{/* <!-- #featured-services --> */}

{/* <!--==========================
  About Us Section
============================--> */}
<section id="about">
  <div class="container">

    <header class="section-header">
      <h3>Tự giới thiệu</h3>
      <p>Đội ngũ chúng tôi gồm nhiều bạn trẻ ham mê công nghệ. Luôn mong muốn mang công nghệ vào cuộc sống, công việc để giúp cho đối tác làm việc, học tập thuận tiện hơn, hạnh phúc hơn.</p>
    </header>

    <div class="row about-cols">

      <div class="col-md-4 wow fadeInUp">
        <div class="about-col">
          <div class="img">
            <img src='./assets/img/about-mission.jpg' alt="" class="img-fluid" />
            <div class="icon"><i class="ion-ios-speedometer-outline"> </i></div>
          </div>
          <h2 class="title"><a href="#">Sứ mệnh</a></h2>
          <p>
            Chia sẻ Kiến thức, Kinh nghiệm, Sản phẩm về Công nghệ thông tin đến với mọi người.
          </p>
        </div>
      </div>

      <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
        <div class="about-col">
          <div class="img">
            <img src="../../assets/img/about-plan.jpg" alt="" class="img-fluid" />
            <div class="icon"><i class="ion-ios-list-outline"> </i></div>
          </div>
          <h2 class="title"><a href="#">Kế hoạch</a></h2>
          <p>
            Tiếp tục hoàn hiện và phát triển các sản phẩm sau:<br/>
            1) xLMS Portal: Cung cấp nền tảng hỗ trợ đào tạo.<br/>
            2) xLMS TOEIC: Triển khai giải pháp thi tiếng Anh chuẩn TOEIC.<br/>
            3) Chia sẻ eBook "Chạm tới AI trong 10 ngày".<br/>
            4) Chia sẻ eBook và Khóa học "Lập trình với GOLANG trong 10 ngày"
          </p>
        </div>
      </div>

      <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
        <div class="about-col">
          <div class="img">
            <img src="../../assets/img/about-vision.jpg" alt="" class="img-fluid" />
            <div class="icon"><i class="ion-ios-eye-outline"> </i></div>
          </div>
          <h2 class="title"><a href="#">Tầm nhìn</a></h2>
          <p>
            Mang các giải pháp Công nghệ thông tin nói chung; Lập trình, Khoa học dữ liệu, Trí tuệ nhân tạo đến với mọi người để cuộc sống thú vị hơn, hạnh phúc hơn nữa!
          </p>
        </div>
      </div>

    </div>

  </div>
</section>{/* <!-- #about --> */}

{/* <!--==========================
  Services Section
============================--> */}
<section id="services">
  <div class="container">

    <header class="section-header wow fadeInUp">
      <h3>Dịch vụ và Sản phẩm</h3>
      <p>Triển khai hệ thống hỗ trợ đào tạo xLMS Portal cùng mô đun thi tiếng anh chuẩn TOEIC. Thời gian triển khai: 2 ngày.</p>
    </header>

    <div class="row">

      <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
        <div class="icon"><i class="ion-ios-analytics-outline"> </i></div>
        <h4 class="title"><a href="https://xlms.myworkspace.vn/portal" target="_blank">xLMS Portal</a></h4>
        <p class="description">Nền tảng hỗ trợ đào tạo cho Doanh nghiệp.</p>
      </div>
      <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
        <div class="icon"><i class="ion-ios-bookmarks-outline"> </i></div>
        <h4 class="title"><a href="https://xlms.myworkspace.vn/portal" target="_blank">xLMS TOEIC</a></h4>
        <p class="description">Hệ thống luyện thi và thi tiếng Anh theo chuẩn TOEIC cho Doanh nghiệp, Trung tâm đào tạo tiếng Anh.</p>
      </div>
      <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
        <div class="icon"><i class="ion-ios-paper-outline"> </i></div>
        <h4 class="title"><a href="">Phát triển ứng dụng</a></h4>
        <p class="description">Nhận đặt hàng phát triển thêm ứng dụng trên nền tảng xLMS Portal với chi phí hợp lý.</p>
      </div>
      <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div class="icon"><i class="ion-ios-speedometer-outline"> </i></div>
        <h4 class="title"><a href="https://thachln.github.io/ebooks/cham-toi-ai-trong-10-ngay.html" target="_blank">eBook</a></h4>
        <p class="description">Cung cấp sách về lĩnh vực Phân tích dữ liệu, Trí tuệ nhân tạo: Chạm tới AI trong 10 ngày</p>
      </div>
      <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div class="icon"><i class="ion-ios-barcode-outline"> </i></div>
        <h4 class="title"><a href="https://thachln.github.io/courses/go1" target="_blank">Khóa học</a></h4>
        <p class="description">Nhận dạy lập trình với ngôn ngữ GOLANG. Tặng kèm eBook "Chạm tới GOLANG trong 10 ngày".</p>
      </div>
      <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div class="icon"><i class="ion-ios-people-outline"> </i></div>
        <h4 class="title"><a href="#">Tư vấn và hỗ trợ Sinh viên</a></h4>
        <p class="description">Nhận tư vấn, hỗ trợ sinh viên phát triển nghề nghiệp miễn phí!</p>
      </div>

    </div>

  </div>
</section>{/* <!-- #services --> */}

{/* <!--==========================
  Call To Action Section
============================--> */}
<section id="call-to-action" class="wow fadeIn">
  <div class="container text-center">
    <h3>Gọi ngay</h3>
    <p> Hãy kết nối với chúng tôi ngay để nhận ưu đãi về sản phẩm và dịch vụ ở trên.</p>
    <a class="cta-btn" href="tel:+084 977548348">+84 977548348</a>
  </div>
</section>{/* <!-- #call-to-action --> */}

{/* <!--==========================
  Skills Section
============================--> */}
<section id="skills">
  <div class="container">

    <header class="section-header">
      <h3>Kỹ năng và kinh nghiệm</h3>
      <p>Đội ngũ chúng tôi có hơn 20 năm kinh nghiệm trong lĩnh vực phát triển Phần mềm. Mong muốn mang lại các giải pháp với công nghệ hiện đại, tối ưu cho khách hàng.</p>
    </header>

    <div class="skills-content">

      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
          <span class="skill">Công nghệ Java<i class="val">100% </i></span>
        </div>
      </div>

      <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
          <span class="skill">Phân tích dữ liệu, Trí Tuệ Nhân Tạo<i class="val">90% </i></span>
        </div>
      </div>

      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <span class="skill">Blockchain<i class="val">75% </i></span>
        </div>
      </div>

      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
          <span class="skill">C/C++ & GOLANG<i class="val">55% </i></span>
        </div>
      </div>

    </div>

  </div>
</section>

{/* <!--==========================
  Facts Section
============================--> */}
{/* <section id="facts"  class="wow fadeIn">
  <div class="container">

    <header class="section-header">
      <h3>SỐ LIỆU</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
    </header>

    <div class="row counters">

              <div class="col-lg-3 col-6 text-center">
        <span data-toggle="counter-up">274</span>
        <p>Clients</p>
              </div>

      <div class="col-lg-3 col-6 text-center">
        <span data-toggle="counter-up">421</span>
        <p>Projects</p>
              </div>

      <div class="col-lg-3 col-6 text-center">
        <span data-toggle="counter-up">1,364</span>
        <p>Hours Of Support</p>
              </div>

      <div class="col-lg-3 col-6 text-center">
        <span data-toggle="counter-up">18</span>
        <p>Hard Workers</p>
              </div>

          </div>

    <div class="facts-img">
      <img src='./assets/img/facts-img.png' alt="" class="img-fluid" />
    </div>

  </div>
</section>{/* <!-- #facts --> */}

{/* <!--==========================
  Portfolio Section
============================--> */}
{/* <section id="portfolio"  class="section-bg" >
  <div class="container">

    <header class="section-header">
      <h3 class="section-title">Minh họa</h3>
    </header>

    <div class="row">
      <div class="col-lg-12">
        <ul id="portfolio-flters">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>

    <div class="row portfolio-container">

      <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/app1.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/app1.jpg'} data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"> </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"> </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">App 1</a></h4>
            <p>App</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/web3.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/web3.jpg'} class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"> </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"> </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">Web 3</a></h4>
            <p>Web</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/app2.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/app2.jpg'} class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"> </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"> </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">App 2</a></h4>
            <p>App</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
        <div class="portfolio-wrap">
          <figure>
            <img src='./assets/img/portfolio/card2.jpg' class="img-fluid" alt="" />
            <a href='../../assets/img/portfolio/card2.jpg' class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"> </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"> </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">Card 2</a></h4>
            <p>Card</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/web2.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/web2.jpg'} class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye">  </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open">  </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">Web 2</a></h4>
            <p>Web</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/app3.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/app3.jpg'} class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye">  </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open">  </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">App 3</a></h4>
            <p>App</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/card1.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/card1.jpg'} class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye">  </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open">  </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">Card 1</a></h4>
            <p>Card</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/card3.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/card3.jpg'} class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye">  </i></a>
            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open">  </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">Card 3</a></h4>
            <p>Card</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
        <div class="portfolio-wrap">
          <figure>
            <img src={'../../assets/img/portfolio/web1.jpg'} class="img-fluid" alt="" />
            <a href={'../../assets/img/portfolio/web1.jpg'} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye">  </i></a>
            <a href="#" class="link-details" title="More Details"> <i class="ion ion-android-open">  </i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="#">Web 1</a></h4>
            <p>Web</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section> */}
{/* <!-- #portfolio --> */}

{/* <!--==========================
  Clients Section
============================--> */}
{/* <section id="clients" class="wow fadeInUp">
  <div class="container">

    <header class="section-header">
      <h3>Our Clients</h3>
    </header>

    <div class="owl-carousel clients-carousel">
      <img src='./assets/img/clients/client-1.png' alt="" />
      <img src='./assets/img/clients/client-2.png' alt="" />
      <img src='./assets/img/clients/client-3.png' alt="" />
      <img src='./assets/img/clients/client-4.png' alt="" />
      <img src='./assets/img/clients/client-5.png' alt="" />
      <img src='./assets/img/clients/client-6.png' alt="" />
      <img src='./assets/img/clients/client-7.png' alt="" />
      <img src='./assets/img/clients/client-8.png' alt="" />
    </div>

  </div>
</section> */}
{/* <!-- #clients --> */}

{/* <!--==========================
  Clients Section
============================--> */}
{/* <section id="testimonials" class="section-bg wow fadeInUp">
  <div class="container">

    <header class="section-header">
      <h3>Testimonials</h3>
    </header>

    <div class="owl-carousel testimonials-carousel">

      <div class="testimonial-item">
        <img src='./assets/img/testimonial-1.jpg' class="testimonial-img" alt="" />
        <h3>Saul Goodman</h3>
        <h4>Ceo &amp; Founder</h4>
        <p>
          <img src="../../assets/img/quote-sign-left.png" class="quote-sign-left" alt="" />
          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
          <img src="../../assets/img/quote-sign-right.png" class="quote-sign-right" alt="" />
        </p>
      </div>

      <div class="testimonial-item">
        <img src="../../assets/img/testimonial-2.jpg" class="testimonial-img" alt="" />
        <h3>Sara Wilsson</h3>
        <h4>Designer</h4>
        <p>
          <img src="../../assets/img/quote-sign-left.png" class="quote-sign-left" alt="" />
          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
          <img src="../../assets/img/quote-sign-right.png" class="quote-sign-right" alt="" />
        </p>
      </div>

      <div class="testimonial-item">
        <img src="../../assets/img/testimonial-3.jpg" class="testimonial-img" alt="" />
        <h3>Jena Karlis</h3>
        <h4>Store Owner</h4>
        <p>
          <img src="../../assets/img/quote-sign-left.png" class="quote-sign-left" alt="" />
          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
          <img src="../../assets/img/quote-sign-right.png" class="quote-sign-right" alt="" />
        </p>
      </div>

      <div class="testimonial-item">
        <img src="../../assets/img/testimonial-4.jpg" class="testimonial-img" alt="" />
        <h3>Matt Brandon</h3>
        <h4>Freelancer</h4>
        <p>
          <img src="../../assets/img/quote-sign-left.png" class="quote-sign-left" alt="" />
          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
          <img src="../../assets/img/quote-sign-right.png" class="quote-sign-right" alt="" />
        </p>
      </div>

      <div class="testimonial-item">
        <img src="../../assets/img/testimonial-5.jpg" class="testimonial-img" alt="" />
        <h3>John Larson</h3>
        <h4>Entrepreneur</h4>
        <p>
          <img src="../../assets/img/quote-sign-left.png" class="quote-sign-left" alt="" />
          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
          <img src="../../assets/img/quote-sign-right.png" class="quote-sign-right" alt="" />
        </p>
      </div>

    </div>

  </div>
</section> */}
{/* <!-- #testimonials --> */}

{/* <!--==========================
  Team Section
============================--> */}
{/* <section id="team">
  <div class="container">
    <div class="section-header wow fadeInUp">
      <h3>Team</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
    </div>

    <div class="row">

      <div class="col-lg-3 col-md-6 wow fadeInUp">
        <div class="member">
          <img src="../../assets/img/team-1.jpg" class="img-fluid" alt="" />
          <div class="member-info">
            <div class="member-info-content">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter">  </i></a>
                <a href=""><i class="fa fa-facebook">  </i></a>
                <a href=""><i class="fa fa-google-plus">  </i></a>
                <a href=""><i class="fa fa-linkedin">  </i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="member">
          <img src="../../assets/img/team-2.jpg" class="img-fluid" alt="" />
          <div class="member-info">
            <div class="member-info-content">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter">  </i></a>
                <a href=""><i class="fa fa-facebook">  </i></a>
                <a href=""><i class="fa fa-google-plus">  </i></a>
                <a href=""><i class="fa fa-linkedin">  </i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
        <div class="member">
          <img src="../../assets/img/team-3.jpg" class="img-fluid" alt="" />
          <div class="member-info">
            <div class="member-info-content">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter">  </i></a>
                <a href=""><i class="fa fa-facebook">  </i></a>
                <a href=""><i class="fa fa-google-plus">  </i></a>
                <a href=""><i class="fa fa-linkedin">  </i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div class="member">
          <img src="../../assets/img/team-4.jpg" class="img-fluid" alt="" />
          <div class="member-info">
            <div class="member-info-content">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter">  </i></a>
                <a href=""><i class="fa fa-facebook">  </i></a>
                <a href=""><i class="fa fa-google-plus">  </i></a>
                <a href=""><i class="fa fa-linkedin">  </i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section> */}
{/* <!-- #team --> */}

{/* <!--==========================
  Contact Section
============================--> */}
<section id="contact" class="section-bg wow fadeInUp">
  <div class="container">

    <div class="section-header">
      <h3>Liên lạc</h3>
      <p>Rất hân hạnh nhận email hoặc cuộc gọi của bạn!</p>
    </div>

    <div class="row contact-info">

      <div class="col-md-4">
        <div class="contact-address">
          <i class="ion-ios-location-outline">  </i>
          <h3>ĐỊA CHỈ</h3>
          <address>10A, Đường 182, Phường Tăng Nhơn Phú A, Q.9, TPHCM</address>
        </div>
      </div>

      <div class="col-md-4">
        <div class="contact-phone">
          <i class="ion-ios-telephone-outline">  </i>
          <h3>Số điện thoại</h3>
          <p><a href="tel:+084 977548348">+084 977 548 348</a></p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="contact-email">
          <i class="ion-ios-email-outline">  </i>
          <h3>Email</h3>
          <p><a href="mailto:ThachLN@mks.com.vn">ThachLN@mks.com.vn</a></p>
        </div>
      </div>

    </div>

    {/* <div class="form">
      <div id="sendmessage">Thông tin đã được gởi. Cám ơn!</div>
      <div id="errormessage" />
      <form action="" method="post" role="form" class="contactForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <input type="text" name="name" class="form-control" id="name" placeholder="Họ và Tên" data-rule="minlen:2" data-msg="Ít nhất 1 kí tự" />
            <div class="validation" />
          </div>
          <div class="form-group col-md-6">
            <input type="email" class="form-control" name="email" id="email" placeholder="Địa chỉ Email" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validation" />
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Chủ đề" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div class="validation" />
        </div>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Hãy ghi rõ mong muốn của bạn" placeholder="Yêu cầu chi tiết"> </textarea>
          <div class="validation"> </div>
        </div>
        <div class="text-center"><button type="submit">Gởi</button></div>
      </form>
    </div> */}

  </div>
</section>{/* <!-- #contact --> */}

</main>
);

export default Main;
