import React, {useState} from 'react';
import {ImageCard, ImagesWrapper, ProjectImageWrapper} from "./Gallery.styles";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {useGalleryQuery} from "../../hooks/queries/useGalleryQuery";
import ImageLightBox from "../ImageLightBox/ImageLightBox";
import styled from "styled-components";

const GalleryTwo = () => {
    const {wpPage: { ACF_HomePage: data }} = useGalleryQuery();

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (image, index) => {
        setCurrentIndex(index);
        setClickedImg(image.image);
    };

    const handelRotationRight = () => {
        const totalLength = data.gallerySectionTwo.galleryImages.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = getImage(data.gallerySectionTwo.galleryImages[0].image.localFile);
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.gallerySectionTwo.galleryImages.filter((image) => {
            return data.gallerySectionTwo.galleryImages.indexOf(image) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = data.gallerySectionTwo.galleryImages.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.gallerySectionTwo.galleryImages[totalLength - 1].image.localFile;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.gallerySectionTwo.galleryImages.filter((item) => {
            return data.gallerySectionTwo.galleryImages.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };
    return (
        <div>
            {data.gallerySectionTwo.galleryName ? ( <h4>{data.gallerySectionTwo.galleryName}</h4>) : ''}
            {data.gallerySectionTwo.galleryDescriptionTitle ? ( <GalleryDescription>{data.gallerySectionTwo.galleryDescriptionTitle}</GalleryDescription>) : ''}

            <GalleryDescriptionList>
                {data.gallerySectionTwo.galleryDescriptionList.length ? (
                    data.gallerySectionTwo.galleryDescriptionList.map( (item, index) => (
                        <p key={index}>{item.galleryDescriptionListItem}</p>
                    ))) : ''}
            </GalleryDescriptionList>


            <ImagesWrapper>
                {data.gallerySectionTwo.galleryImages.length ? (
                    data.gallerySectionTwo.galleryImages.map( (image, index) => (
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

export default GalleryTwo;

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