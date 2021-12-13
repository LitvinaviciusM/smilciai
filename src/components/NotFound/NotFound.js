import React from "react"
import {Container, ButtonLink} from "../Layout/Layout.styles";
import {HeroSection, HeroWrapper, InformationWrapper, HeroBackgroundImage, BackgroundImage, HeroImage, BackgroundColor} from "./NotFound.styles";
import {useHeroQuery} from "../../hooks/queries/useHeroQuery"
import {getImage} from "gatsby-plugin-image";
import {GatsbyImage} from "gatsby-plugin-image";

const NotFound = () => {

    const {wpPage: { ACF_HomePage: {heroSection : data} }} = useHeroQuery();

    const imageData = getImage(data.heroImage.localFile);

    return (
        <HeroSection id="/">
            <BackgroundImage>
                <BackgroundColor/>
                <HeroBackgroundImage image={imageData} alt={data.heroImage.altText}/>
            </BackgroundImage>

            <Container>
                <HeroWrapper>
                    <InformationWrapper>
                        <h1>Šis puslapis nerastas</h1>
                        <p>Paklydote! Deja, tokio puslapio neturime. Grįškite į pagrindinį puslapį paspaudę žemiau esantį mygtuką</p>

                        <ButtonLink to="/" big="true">
                            Į pagrindinį puslapį
                        </ButtonLink>

                    </InformationWrapper>

                    <HeroImage>
                        <GatsbyImage alt={data.heroImage.altText} image={imageData}/>
                    </HeroImage>

                </HeroWrapper>
            </Container>
        </HeroSection>
    )
};

export default NotFound
