import React from "react"
import {Container, ButtonScroll} from "../Layout/Layout.styles";
import {HeroSection, HeroWrapper, InformationWrapper, HeroBackgroundImage, BackgroundImage, HeroImage, BackgroundColor} from "./Hero.styles";
import {useHeroQuery} from "../../hooks/queries/useHeroQuery"
import {getImage} from "gatsby-plugin-image";
import {GatsbyImage} from "gatsby-plugin-image";

const Hero = () => {

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
                        <h1>{data.heading}</h1>
                        <p>{data.subHeading}</p>

                        {data.subHeadingTwo ? ( <p>{data.subHeadingTwo}</p>) : ''}


                        <ButtonScroll to={data.button.url} big="true">
                            {data.button.title}
                        </ButtonScroll>

                    </InformationWrapper>

                    <HeroImage>
                        <GatsbyImage alt={data.heroImage.altText} image={imageData}/>
                    </HeroImage>

                </HeroWrapper>
            </Container>
        </HeroSection>
    )
};

export default Hero
