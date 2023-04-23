import React from "react";

const Lesson1Page = (props) => {
    const {id, title, lessonTitle, youtubeLink, description, fullDescriptionText} = props.itemLessonsData;

    return (
        <div class="container">
            <div className="single__course__item">
                {/*<div className="course__img">*/}
                {/*    <img src={imgUrl} alt="" className="w-100"/>*/}
                {/*</div>*/}

                <div className="course__details">
                    <div className="title_style">
                        <h6 className="course__title mb-4">{title}</h6>
                    </div>
                    <div className="container">
                        {youtubeLink}
                    </div>
                    <div className="container">
                        {fullDescriptionText}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Lesson1Page;