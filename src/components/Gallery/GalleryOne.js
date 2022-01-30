import React, {useState} from 'react';
import {ImageCard, ImagesWrapper, ProjectImageWrapper} from "./Gallery.styles";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {useGalleryQuery} from "../../hooks/queries/useGalleryQuery";
import ImageLightBox from "../ImageLightBox/ImageLightBox";
import styled from "styled-components";

const GalleryOne = () => {
    const {wpPage: { ACF_HomePage: data }} = useGalleryQuery();

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (image, index) => {
        setCurrentIndex(index);
        setClickedImg(image.image);
    };

    const handelRotationRight = () => {
        const totalLength = data.gallerySectionOne.galleryImages.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = getImage(data.gallerySectionOne.galleryImages[0].image.localFile);
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.gallerySectionOne.galleryImages.filter((image) => {
            return data.gallerySectionOne.galleryImages.indexOf(image) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = data.gallerySectionOne.galleryImages.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.gallerySectionOne.galleryImages[totalLength - 1].image.localFile;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.gallerySectionOne.galleryImages.filter((item) => {
            return data.gallerySectionOne.galleryImages.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };
    return (
        <div>
            {data.gallerySectionOne.galleryName ? ( <h4>{data.gallerySectionOne.galleryName}</h4>) : ''}
            {data.gallerySectionOne.galleryDescriptionTitle ? ( <GalleryDescription>{data.gallerySectionOne.galleryDescriptionTitle}</GalleryDescription>) : ''}

            <GalleryDescriptionList>
                {data.gallerySectionOne.galleryDescriptionList.length ? (
                    data.gallerySectionOne.galleryDescriptionList.map( (item, index) => (
                        <p key={index}>{item.galleryDescriptionListItem}</p>
                    ))) : ''}
            </GalleryDescriptionList>


            <ImagesWrapper>
                {data.gallerySectionOne.galleryImages.length ? (
                    data.gallerySectionOne.galleryImages.map( (image, index) => (
                        <ImageCard key={index}>
                            <ProjectImageWrapper>
                                <GatsbyImage alt={image.image.altText} image={getImage(image.image.localFile)} onClick={() => handleClick(image, index)}/>
                            </ProjectImageWrapper>
                        </ImageCard>
                    ))) : ''}
            </ImagesWrapper>

            <div>
                {clickedImg && (
                    <ImageLightBox
                        clickedImg={clickedImg}
                        handelRotationRight={handelRotationRight}
                        setClickedImg={setClickedImg}
                        handelRotationLeft={handelRotationLeft}
                    />
                )}
            </div>
        </div>
    );
};

export default GalleryOne;

const GalleryDescription = styled.p`
  max-width: 800px;
  margin-bottom: 1rem;
`;

const GalleryDescriptionList = styled.div`
  margin-bottom: 3rem;
  p{
    margin-bottom: 0;
  }
`;