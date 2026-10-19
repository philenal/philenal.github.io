import React from 'react';
import { ArtGlassCard, CardContainer } from './styles';
import Image from 'next/image';

export default function ImageCard(props) {
    const { image } = props;
    return (
        <>
        <CardContainer>
            <ArtGlassCard>
                <Image src={image} alt="" width={640} height={800} style={{ width: '100%', height: 'auto' }}/>
            </ArtGlassCard>
        </CardContainer>
        </>
    )
}