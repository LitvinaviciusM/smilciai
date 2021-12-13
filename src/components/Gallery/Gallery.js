import React from "react"
import {Container, Section, SectionWrapper} from "../Layout/Layout.styles";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {useGalleryQuery} from "../../hooks/queries/useGalleryQuery";
import {GalleryWrapper, ImagesWrapper, ImageCard, ProjectImageWrapper} from "./Gallery.styles";

const Contacts = () => {

    const {wpPage: { ACF_HomePage: {gallerySection: {galleryImages: data}} }} = useGalleryQuery();

    return (
        <Section id="/galerija/">
            <Container>
                <SectionWrapper>
                    <GalleryWrapper>
                        <h2>Galerija</h2>

                        <ImagesWrapper>
                            {data.length ? (
                                data.map( (image, index) => (
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