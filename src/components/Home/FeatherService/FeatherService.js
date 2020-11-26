import React from 'react';
import featerService from '../../../images/feather_service.png';

const FeatherService = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <img src={featerService} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <h1 style={{color: '#3A4256'}}>Exceptional Detal <br/> Care, On Your Terms</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima rerum itaque autem assumenda quia fuga tempora voluptates, aliquam quis dignissimos impedit natus eaque placeat culpa eum doloribus, numquam ut explicabo? At numquam, maiores enim ipsum iste, veniam tempora nesciunt nam minima modi sequi! Sint, exercitationem tenetur. Qui at delectus rem adipisci illum modi dolor harum. Eligendi, voluptate quasi. Deleniti odio tempore laborum debitis illum, corporis eum cupiditate</p>
                        <p style={{color: '#3A4256'}}>voluptate, illo officia aliquam, a asperiores. Eveniet sapiente est sit molestias. Sit, non! Laboriosam, corrupti. Cupiditate perferendis culpa at voluptas harum. Dolorem architecto aliquid eligendi consequuntur at quaerat excepturi, illo enim, iusto expedita provident fuga vel suscipit placeat nesciunt ut blanditiis voluptatibus labore omnis impedit? Quisquam dignissimos nisi architecto, distinctio labore vero quos ullam ex a numquam sed dicta! Deserunt quod quisquam deleniti repellat voluptas delectus praesentium dicta mollitia similique magnam facilis molestiae reiciendis saepe!</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatherService;