import React from 'react'
import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';

export interface InfScrollProps {
    threshold: string
    infinite?: (e: CustomEvent<void>) => void
}

export default class InfiniteScroll extends React.Component<InfScrollProps> {
    public render() {
        const {threshold, infinite} = this.props;
        return (
            <IonInfiniteScroll threshold={threshold} onIonInfinite={infinite}>
                <IonInfiniteScrollContent loadingText="Loading...">
                </IonInfiniteScrollContent>
            </IonInfiniteScroll>
        );
    }
}