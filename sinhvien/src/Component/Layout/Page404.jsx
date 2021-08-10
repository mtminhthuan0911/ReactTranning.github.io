import React, { Component } from 'react';

class Page404 extends Component {
    render() {
        return (
            <section className="Page404">
                <div className="container">
                    <div className="Title">
                        <h1 className="Title-header">4 0 4</h1>
                        <img className="Logo" src="./Z.svg" alt="" />
                        <p className="content">
                            Website chưa hỗ trợ trên mobile <i class="fas fa-sad-cry"></i>
                        </p>
                        <p class="contents">Làm Ơn Hãy Sự Dụng trên Desktop</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Page404;