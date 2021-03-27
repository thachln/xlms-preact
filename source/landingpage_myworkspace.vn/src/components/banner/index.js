import { h } from 'preact';
import style from './style.css';
import img1 from '../../assets/img/intro-carousel/1.jpg';
import img2 from '../../assets/img/intro-carousel/2.jpg';
import img3 from '../../assets/img/intro-carousel/3.jpg';
import img4 from '../../assets/img/intro-carousel/4.jpg';
import img5 from '../../assets/img/intro-carousel/5.jpg';

const Banner = () => (
	<div class={style.banner}>
		<section id="intro">
			<div class="intro-container">
				<div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">
					<ol class="carousel-indicators" />

					<div class="carousel-inner" role="listbox">
						<div class="carousel-item active">
							<div class="carousel-background">
								<img src={img1} alt="" />
							</div>
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>xLMS TOEIC: Hệ thống thi tiếng Anh TOEIC chuyên nghiệp</h2>
									<p>
										Hỗ trợ đề thi theo chuẩn Test of English for International Communication, gồm 2 kỹ năng Listening và Reading. Đề thi được tổ chức trong 7 phần.
									</p>
									<a href="https://xlms.myworkspace.vn/portal" target="_blank" class="btn-get-started scrollto">
										Trải nghiệm ngay
									</a>
								</div>
							</div>
						</div>

						<div class="carousel-item">
							<div class="carousel-background">
								<img src={img2} alt="" />
							</div>
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>Tại sao dùng xLMS TOEIC</h2>
									<p>
										Hệ thống ổn định.<br/>Triển khai nhanh chóng.<br/>Chi phí hợp lý.
									</p>
									<a href="https://xlms.myworkspace.vn/portal" target="_blank" class="btn-get-started scrollto">
										Trải nghiệm ngay
									</a>
								</div>
							</div>
						</div>

						<div class="carousel-item">
							<div class="carousel-background">
								<img src={img3} alt="" />
							</div>
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>eBook "Chạm tới AI trong 10 ngày"</h2>
									<p>
										Sách dạng file PDF cung cấp cho các bạn kiến thức, kỹ năng về:<br/>Phân tích dữ liệu,<br/>Khoa học dữ liệu.
									</p>
									<a href="https://thachln.github.io/ebooks/cham-toi-ai-trong-10-ngay.html" target="_blank" class="btn-get-started scrollto">
										Đọc thử ngay
									</a>
								</div>
							</div>
						</div>

						<div class="carousel-item">
							<div class="carousel-background">
								<img src={img4} alt="" />
							</div>
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>Tại sao nên đọc eBook "Chạm tới AI trong 10 ngày"</h2>
									<p>
										Vừa học lý thuyết vừa thực hành.<br/>
										Kiến thức nền tảng vừa đủ để hiểu và áp dụng vào thực tế.<br/>
										Chi phí sách rất hợp lý.<br/>
									</p>
									<a href="https://thachln.github.io/ebooks/cham-toi-ai-trong-10-ngay.html" target="_blank" class="btn-get-started scrollto">
									Đọc thử ngay
									</a>
								</div>
							</div>
						</div>

						<div class="carousel-item">
							<div class="carousel-background">
								<img src={img5} alt="" style={{width:"100%"}} />
							</div>
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>Nhập môn lập trình với ngôn ngữ GOLANG</h2>
									<p>
									CHƯƠNG TRÌNH ĐÀO TẠO THỰC TẾ.<br/>
									THIẾT KẾ BỞI CHUYÊN GIA NHIỀU KINH NGHIỆM.<br/>
									ĐƯỢC HỌC VÀ ĐƯỢC CHIA SẺ KINH NGHIỆM THỰC TẾ.<br/>
									HỌC VÀ LÀM ĐƯỢC NGAY.<br/>
									LINH ĐỘNG THỜI GIAN, HỌC TRỰC TIẾP, HỖ TRỢ thêm TRỰC TUYẾN (Online, E-learning).<br/>

									</p>
									<a href="https://thachln.github.io/courses/go1/" target="_blank" class="btn-get-started scrollto">
										Đăng ký ngay
									</a>
								</div>
							</div>
						</div>
					</div>

					<a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true" />
						<span class="sr-only">Previous</span>
					</a>

					<a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
						<span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true" />
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</section>
	</div>
);

export default Banner;
