/**
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import ParagraphMenuBarRadioGroup, {
    IMenuBarRadioButton,
} from "@rich-editor/menuBar/paragraph/items/ParagraphMenuBarRadioGroup";
import { t } from "@library/utility/appUtils";
import classNames from "classnames";
import { richEditorClasses } from "@rich-editor/editor/richEditorClasses";

interface IProps {
    items: IMenuBarRadioButton[];
    closeMenuAndSetCursor: () => void;
    className?: string;
}

/**
 * Implemented contents of heading menu
 */
export default class ParagraphMenuHeadingsTabContent extends React.Component<IProps> {
    public render() {
        const classes = richEditorClasses(false);
        const handleClick = (data: IMenuBarRadioButton, index: number) => {
            this.props.items[index].formatFunction();
            this.props.closeMenuAndSetCursor();
        };
        return (
            <ParagraphMenuBarRadioGroup
                className={classNames(classes.paragraphMenuPanel, this.props.className)}
                handleClick={handleClick}
                label={t("Headings")}
                items={this.props.items}
            />
        );
    }
}
