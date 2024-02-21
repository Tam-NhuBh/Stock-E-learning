
import './home.module.css'
export default function Home() {
    return (
        <section className="top-courses pb30 courses-online custom-padding-section zvn-course-online-section" id="section-course-online">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2'>
                        <div className='main-title text-center'>
                            <h3 className="mt0">Các khóa học lập trình trực tuyến</h3>
                            <p className='d-none d-sm-block'>
                                Các khóa học lập trình trực tuyến tại HCMUTE luôn được đội ngũ training nỗ lực xây dựng giáo trình và nội dung chi tiết trong từng video để cho ra đời các khóa học chất lượng và thực tế nhất
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div id="options" className='alpha-pag full'>
                            <div className='option-isotop'>
                                <ul id="filter" className='option-set' data-option-key="filter">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}