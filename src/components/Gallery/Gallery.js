import React from "react"
import {Container, Section, SectionWrapper} from "../Layout/Layout.styles";

import {GalleryWrapper} from "./Gallery.styles";
import GalleryOne from "./GalleryOne";
import GalleryTwo from "./GalleryTwo";


const Gallery = () => {

    return (
        <Section id="/galerija/">
            <Container>
                <SectionWrapper>
                    <GalleryWrapper>
                        <h2>Galerija</h2>
                        <GalleryOne/>
                        <GalleryTwo/>
                    </GalleryWrapper>
                </SectionWrapper>

            </Container>
        </Section>
    )
}

export default Gallery;

