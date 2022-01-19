import React from "react"
import {Container, Section, SectionWrapper} from "../Layout/Layout.styles";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {useGalleryQuery} from "../../hooks/queries/useGalleryQuery";
import {GalleryWrapper, ImagesWrapper, ImageCard, ProjectImageWrapper} from "./Gallery.styles";
import styled from "styled-components";

const Contacts = () => {

    // const {wpPage: { ACF_HomePage: {gallerySectionOne: {galleryImages: data}} }} = useGalleryQuery();
    const {wpPage: { ACF_HomePage: data }} = useGalleryQuery();

    return (
        <Section id="/galerija/">
            <Container>
                <SectionWrapper>
                    <GalleryWrapper>
                        <h2>Galerija</h2>

                        {data.gallerySectionOne.galleryName ? ( <h4>{data.gallerySectionOne.galleryName}</h4>) : ''}
                        {data.gallerySectionOne.galleryDescription ? ( <GalleryDescription>{data.gallerySectionOne.galleryDescription}</GalleryDescription>) : ''}
                        <ImagesWrapper>
                            {data.gallerySectionOne.galleryImages.length ? (
                                data.gallerySectionOne.galleryImages.map( (image, index) => (
                                    <ImageCard key={index}>
                                        <ProjectImageWrapper>
                                            <GatsbyImage alt={image.image.altText} image={getImage(image.image.localFile)}/>
                                        </ProjectImageWrapper>
                                    </ImageCard>
                                ))) : ''}
                        </ImagesWrapper>


                        {data.gallerySectionTwo.galleryName ? ( <h4>{data.gallerySectionTwo.galleryName}</h4>) : ''}
                        {data.gallerySectionTwo.galleryDescription ? ( <GalleryDescription>{data.gallerySectionTwo.galleryDescription}</GalleryDescription>) : ''}
                        <ImagesWrapper>
                            {data.gallerySectionTwo.galleryImages.length ? (
                                data.gallerySectionTwo.galleryImages.map( (image, index) => (
                                    <ImageCard key={index}>
                                        <ProjectImageWrapper>
                                            <GatsbyImage alt={image.image.altText} image={getImage(image.image.localFile)}/>
                                        </ProjectImageWrapper>
                                    </ImageCard>
                                ))) : ''}
                        </ImagesWrapper>

                    </GalleryWrapper>
                </SectionWrapper>
            </Container>
        </Section>
    )
}

export default Contacts;

const GalleryDescription = styled.p`
  max-width: 800px;
`;