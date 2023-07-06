/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Product } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, RatingProps, SelectFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCardCOverridesProps = {
    ItemCardC?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    Details?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    PriceFrame?: PrimitiveOverrideProps<FlexProps>;
    PriceLabel?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    InventoryFrame?: PrimitiveOverrideProps<FlexProps>;
    InventoryLabel?: PrimitiveOverrideProps<TextProps>;
    Inventory?: PrimitiveOverrideProps<TextProps>;
    Order?: PrimitiveOverrideProps<FlexProps>;
    Quantity?: PrimitiveOverrideProps<SelectFieldProps>;
    AddToCart?: PrimitiveOverrideProps<ButtonProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemCardCProps = React.PropsWithChildren<Partial<FlexProps> & {
    product?: Product;
} & {
    overrides?: ItemCardCOverridesProps | undefined | null;
}>;
export default function ItemCardC(props: ItemCardCProps): React.ReactElement;
