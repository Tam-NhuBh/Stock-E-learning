import React, { useEffect, useState } from 'react'
import './header.css'

function Header(/* { cart, setMessage } */) {
    // useEffect(() => {
    //     $('.language').change(function () {
    //         $('#formChangeLanguage').submit();
    //     });
    // }, []);
    return (
        // <div className="js-group-menu clearfix" style={{ width: '100%', zIndex: 16, top: 0 }}>
        //     <div className='unica-home-menutop hidden-xs' style={{}}>
        //         <div className='container'>
        //             <div className='row col-width-lg'>
        //                 <div className='col-lg-2 col-md-2 col-sm-3 cate-md'>
        //                     <span className="hidden-sm pd-new-home" style={{ position: 'absolute' }}>

        //                         <a href="/"><h1>Học Online: 2.000+ Khóa học trực tuyến cho người đi làm </h1></a>
        //                     </span>
        //                     <div className='hidden-lg hidden-md hidden-xs'>
        //                         <a className='unica-logo' href='/'>
        //                             <img className="img-responsive" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flamwebdebanhang.wordpress.com%2F&psig=AOvVaw1jhUOyh78lpyyaTcPcyO0t&ust=1708533234923000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCurbWsuoQDFQAAAAAdAAAAABAE" alt="" loading="lazy" />

        //                         </a>
        //                         <div className='unica-menu-cate'>
        //                             <i className="fa fa-th" aria-hidden="true"></i>
        //                             <nav id="mysidebarmenu" className="amazonmenu">
        //                                 <ul>
        //                                     <li className="hassub"><a title="Khóa học Ngoại Ngữ trực tuyến nhiều người học" href="/course/ngoai-ngu"><i className="fa fa fa-language" aria-hidden="true"></i> Ngoại ngữ</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/ngoai-ngu">Tất cả Ngoại ngữ.</a></li>
        //                                             <li><a href="/tag/tieng-han">Tiếng Hàn</a></li>
        //                                             <li><a href="/tag/tieng-duc">Tiếng Đức</a></li>
        //                                             <li><a href="/tag/tieng-trung">Tiếng Trung</a></li>
        //                                             <li><a href="/tag/tieng-nhat">Tiếng Nhật</a></li>
        //                                             <li><a href="/tag/tieng-anh">Tiếng Anh</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa Học Marketing Từ Case Study Thực Chiến" href="/course/marketing"><i className="fa fa fa-line-chart" aria-hidden="true"></i> Marketing</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/marketing">Tất cả Marketing.</a></li>
        //                                             <li><a href="/tag/facebook-marketing">Facebook Marketing</a></li>
        //                                             <li><a href="/tag/zalo-marketing">Zalo Marketing</a></li>
        //                                             <li><a href="/tag/email-marketing">Email Marketing</a></li>
        //                                             <li><a href="/tag/google-ads">Google Ads</a></li>
        //                                             <li><a href="/tag/seo">Seo</a></li>
        //                                             <li><a href="/tag/youtube-marketing">Youtube Marketing</a></li>
        //                                             <li><a href="/tag/content-marketing">Content Marketing</a></li>
        //                                             <li><a href="/tag/video-marketing">Video marketing</a></li>
        //                                             <li><a href="/tag/affiliate-marketing">Affiliate Marketing</a></li>
        //                                             <li><a href="/tag/marketing-online">Marketing Online</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học tin học văn phòng từ cơ bản đến nâng cao" href="/course/tin-hoc-van-phong"><i className="fa fa fa-desktop" aria-hidden="true"></i> Tin học văn phòng</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/tin-hoc-van-phong">Tất cả Tin học văn phòng.</a></li>
        //                                             <li><a href="/tag/excel">Excel</a></li>
        //                                             <li><a href="/tag/word">Word</a></li>
        //                                             <li><a href="/tag/ic3">IC3</a></li>
        //                                             <li><a href="/tag/google-sheets">Google Sheets </a></li>
        //                                             <li><a href="/tag/powerpoint">PowerPoint</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học kinh doanh, khởi nghiệp thực chiến" href="/course/kinh-doanh-va-khoi-nghiep"><i className="fa fa fa-rocket" aria-hidden="true"></i> Kinh doanh và khởi nghiệp</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/kinh-doanh-va-khoi-nghiep">Tất cả Kinh doanh và khởi nghiệp.</a></li>
        //                                             <li><a href="/tag/quan-tri-doanh-nghiep">Quản trị doanh nghiệp</a></li>
        //                                             <li><a href="/tag/kinh-doanh-online">Kinh doanh Online</a></li>
        //                                             <li><a href="/tag/startup">Startup</a></li>
        //                                             <li><a href="/tag/hanh-chinh-nhan-su">Hành chính nhân sự</a></li>
        //                                             <li><a href="/tag/bat-dong-san">Bất động sản</a></li>
        //                                             <li><a href="/tag/dropshipping">Dropshipping</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Tài chính &amp; Kế toán" href="/course/tai-chinh-ke-toan"><i className="fa fa fa-money" aria-hidden="true"></i> Tài chính &amp; Kế toán</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/tai-chinh-ke-toan">Tất cả Tài chính &amp; Kế toán.</a></li>
        //                                             <li><a href="/tag/ke-toan">Kế Toán</a></li>
        //                                             <li><a href="/tag/tai-chinh">Tài chính</a></li>
        //                                             <li><a href="/tag/chung-khoan">Chứng khoán</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học Sales, bán hàng thực chiến từ A - Z" href="/course/sales-ban-hang"><i className="fa fa fa-shopping-cart" aria-hidden="true"></i> Sales Bán hàng</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/sales-ban-hang">Tất cả Sales Bán hàng.</a></li>
        //                                             <li><a href="/tag/ban-hang-online">Bán hàng Online</a></li>
        //                                             <li><a href="/tag/telesales">Telesales</a></li>
        //                                             <li><a href="/tag/ban-hang-livestream">Bán hàng livestream</a></li>
        //                                             <li><a href="/tag/cham-soc-khach-hang">Chăm sóc khách hàng</a></li>
        //                                             <li><a href="/tag/chien-luoc-ban-hang">Chiến lược bán hàng</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học thiết kế từ cơ bản đến nâng cao" href="/course/thiet-ke-xay-dung"><i className="fa fa fa-paint-brush" aria-hidden="true"></i> Thiết kế &amp; Xây dựng</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/thiet-ke-xay-dung">Tất cả Thiết kế &amp; Xây dựng.</a></li>
        //                                             <li><a href="/tag/thiet-ke-quang-cao">Thiết kế quảng cáo</a></li>
        //                                             <li><a href="/tag/thiet-ke-web">Thiết kế Web</a></li>
        //                                             <li><a href="/tag/photoshop">Photoshop</a></li>
        //                                             <li><a href="/tag/autocad">Autocad</a></li>
        //                                             <li><a href="/tag/3dsmax">3DSMax</a></li>
        //                                             <li><a href="/tag/du-an-xay-dung">Dự án - Xây dựng</a></li>
        //                                             <li><a href="/tag/kien-truc-noi-that">Kiến Trúc, Nội Thất</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học kỹ năng mềm giúp phát triển bản thân tốt hơn" href="/course/ky-nang"><i className="fa fa fa-lightbulb-o" aria-hidden="true"></i> Kỹ năng</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/ky-nang">Tất cả Kỹ năng.</a></li>
        //                                             <li><a href="/tag/ky-nang-lanh-dao">Kỹ năng lãnh đạo</a></li>
        //                                             <li><a href="/tag/ky-nang-mem">Kỹ năng mềm</a></li>
        //                                             <li><a href="/tag/phat-trien-ban-than">Phát triển bản thân</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học công nghệ thông tin, khoa học công nghệ Online hàng đầu" href="/course/cong-nghe"><i className="fa fa fa-code" aria-hidden="true"></i> Công nghệ</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/cong-nghe">Tất cả Công nghệ.</a></li>
        //                                             <li><a href="/tag/du-lieu">Dữ liệu</a></li>
        //                                             <li><a href="/tag/cong-nghe-thong-tin">Công nghệ thông tin</a></li>
        //                                             <li><a href="/tag/sua-chua-che-tao">Sửa chữa, chế tạo</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học sức khỏe, làm đẹp" href="/course/suc-khoe-lam-dep"><i className="fa fa fa-heartbeat" aria-hidden="true"></i> Sức khoẻ &amp; Làm đẹp</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/suc-khoe-lam-dep">Tất cả Sức khoẻ &amp; Làm đẹp.</a></li>
        //                                             <li><a href="/tag/giam-can">Giảm cân</a></li>
        //                                             <li><a href="/tag/yoga-thien">Yoga - Thiền</a></li>
        //                                             <li><a href="/tag/giam-stress">Giảm stress</a></li>
        //                                             <li><a href="/tag/massage-tri-lieu">Massage - Trị liệu</a></li>
        //                                             <li><a href="/tag/fitness-gym">Fitness - Gym</a></li>
        //                                             <li><a href="/tag/khi-cong">Khí công</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học phong cách sống hay" href="/course/phong-cach-song"><i className="fa fa fa-cutlery" aria-hidden="true"></i> Phong cách sống</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/phong-cach-song">Tất cả Phong cách sống.</a></li>
        //                                             <li><a href="/tag/pha-che">Pha chế</a></li>
        //                                             <li><a href="/tag/lam-banh">Làm bánh</a></li>
        //                                             <li><a href="/tag/handmade">Handmade</a></li>
        //                                             <li><a href="/tag/tu-vi">Tử vi</a></li>
        //                                             <li><a href="/tag/ao-thuat">Ảo thuật</a></li>
        //                                             <li><a href="/tag/am-nhac">Âm nhạc</a></li>
        //                                             <li><a href="/tag/am-thuc-nau-an">Ẩm thực - Nấu ăn</a></li>
        //                                             <li><a href="/tag/nhay">Nhảy</a></li>
        //                                             <li><a href="/tag/hoi-hoa">Hội hoạ</a></li>
        //                                             <li><a href="/tag/the-thao">Thể thao</a></li>
        //                                             <li><a href="/tag/nhiep-anh-dung-phim">Nhiếp ảnh, dựng phim</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="hassub"><a title="Khóa học hôn nhân gia đình hàng đầu cùng chuyên gia " href="/course/tinh-yeu-hon-nhan-gia-dinh"><i className="fa fa fa-group" aria-hidden="true"></i> Tình yêu - Hôn nhân &amp; gia đình</a>
        //                                         <ul className="issub" style={{ zIndex: 1002, display: 'none' }}>
        //                                             <li><a href="/course/tinh-yeu-hon-nhan-gia-dinh">Tất cả Tình yêu - Hôn nhân &amp; gia đình.</a></li>
        //                                             <li><a href="/tag/nuoi-day-con">Nuôi dạy con</a></li>
        //                                             <li><a href="/tag/mang-thai">Mang Thai</a></li>
        //                                             <li><a href="/tag/cham-soc-tre">Chăm sóc trẻ </a></li>
        //                                             <li><a href="/tag/tinh-yeu">Tình yêu</a></li>
        //                                             <li><a href="/tag/hanh-phuc-gia-dinh">Hạnh phúc gia đình</a></li>
        //                                             <li><a href="/tag/doi-song-vo-chong">Đời sống vợ chồng</a></li>
        //                                         </ul>
        //                                     </li>
        //                                 </ul>
        //                             </nav>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-4 col-md-4 col-sm-4 cate-sm">
        //                     <form className="unica-search-boxtop navbar-form form-inline" method="GET" action="/search">
        //                         <input autoComplete="off" name="key" id="text_search" value="" type="text" className="form-control unica-form ui-autocomplete-input" placeholder="Tìm khóa học, giảng viên" required />
        //                         <button type="submit" className="btn unica-btn-search"><i className="fa fa-search" aria-hidden="true"></i></button>
        //                         <div className="autocomplete-search" style={{}}>
        //                         </div>
        //                     </form>
        //                 </div>
        //                 <div className="col-lg-6 col-md-6 col-sm-5 cate-sm">
        //                     <a href="/kichhoat" className="unica-active-course">
        //                         <p className="hidden-xs hidden-sm" style={{ marginRight: '8px' }}>Kích hoạt khóa học</p>
        //                         <i className="fa fa-unlock-alt" aria-hidden="true"></i>
        //                     </a>
        //                     <a className="db-item-learn-group hidden-xs" href="/group/member">
        //                         <i className="fa fa-users" aria-hidden="true"></i> Hội viên
        //                     </a>
        //                     <a href="/gio-hang" className="unica-cart">
        //                         <i className="fa fa-shopping-cart" aria-hidden="true" style={{ color: '#999' }}></i>
        //                         <span className="unica-sl-cart" style={{ border: 'none' }}></span>
        //                     </a>

        //                     <ul className="unica-acc-zone">
        //                         <li className="btn-group mgtOp mt-0" style={{ paddingLeft: '5px' }}>
        //                             <a className="dropdown-toggle" data-toggle="dropdown" href="#">
        //                                 <img width="20" height="auto" src="/icon/language/vi.png" alt="vi_VN" loading="lazy" />
        //                             </a>
        //                             <ul className="dropdown-menu db-drop">
        //                                 <li data-value="vi">
        //                                     <a href="?lang=vi_VN">
        //                                         <img width="30" height="auto" src="/icon/language/vi.png" alt="vi" loading="lazy" /> Tiếng Việt
        //                                     </a>
        //                                 </li>
        //                                 <li data-value="en">
        //                                     <a href="?lang=en_US">
        //                                         <img width="30" height="auto" src="/icon/language/en.png" alt="en" loading="lazy" /> English
        //                                     </a>
        //                                 </li>
        //                             </ul>
        //                         </li>
        //                         {/* Script không thể viết trực tiếp trong JSX */}
        //                         <li><a className="unica-reg-acc uppercase" href="/login">Đăng nhập</a></li>
        //                         <li><a className="unica-log-acc uppercase hidden-md" href="/register">Đăng ký</a></li>
        //                     </ul>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <header className='header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu px-0 slideIn animated' style={{ zIndex: 1000, position: 'fixed', top: 0, marginLeft: 0, width: '100%', left: 0 }}>
            {/* Nội dung của header */}
            <div className='container-fluid'>
                <nav className='primary-menu'>
                    <a className='navbar_brand float-left dn-smd' href='/'>
                        <img className="zvn-logo logo1 img-fluid" src="https://zendvn.com/upload/1/log-zendvn-detail.png" alt="logo.png" />
                        <img className="zvn-logo logo2 img-fluid" src="https://zendvn.com/upload/1/log-zendvn-detail.png" alt="logo.png"/>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
