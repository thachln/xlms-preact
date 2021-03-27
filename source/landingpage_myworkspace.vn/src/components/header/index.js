import { h } from 'preact';

import style from './style.css';

const Header = () => (
	<header id="header" class={style.header}>
	<div class="container-fluid">

<div id="logo" class="pull-left">
  <h1><a href="#intro" class="scrollto">MyWorkspace</a></h1>

</div>

<nav id="nav-menu-container">
  <ul class="nav-menu">
	<li class="menu-active"><a href="#intro">Trang chủ</a></li>
	<li><a href="#about">Tự giới thiệu</a></li>
	<li><a href="#services">Sản phẩm</a></li>
	{/* <li><a href="#portfolio">Sản phẩm</a></li> */}
	{/* <li><a href="#team">Đội ngũ</a></li> */}
	{/* <li class="menu-has-children"><a href="">Download</a>
	  <ul>
		<li><a href="#">xLMS Portal</a></li>
		<li><a href="#">eBook "Chạm tới AI trong 10 ngày</a></li>
		<li><a href="#">eBook "Chạm tới GOLANG trong 10 ngày</a></li>
	  </ul>
	</li> */}
	<li><a href="#contact">Liên lạc</a></li>
  </ul>
</nav>
</div>
	</header>
);

export default Header;
