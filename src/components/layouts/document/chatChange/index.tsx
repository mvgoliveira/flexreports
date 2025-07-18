import { Typography } from "@/components/features/typography";
import { useDocumentContext } from "@/context/documentContext";
import { AiChange } from "@/repositories/changesApi";
import { Theme } from "@/themes";
import { ReactElement } from "react";
import { MdDoneAll } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
    ColorContainer,
    Content,
    Root,
    StyledBadge,
    StyledCheckBox,
    StyledSmlButton,
} from "./styles";
import { CHANGES_BADGE_VARIANTS, CHANGES_TEXT_VARIANTS } from "./variants";

interface IChatChangeProps {
    metadata: AiChange;
}

export const ChatChange = ({ metadata }: IChatChangeProps): ReactElement => {
    const { updateSelectedChange, selectedChanges } = useDocumentContext();

    const handleSelectChange = () => {
        if (metadata.status === "pending") {
            updateSelectedChange(metadata);
        }
    };

    return (
        <Root
            variant={metadata.type}
            active={selectedChanges.some(change => change.id === metadata.id)}
            onClick={handleSelectChange}
            status={metadata.status}
        >
            <ColorContainer variant={metadata.type} status={metadata.status} />

            <Content>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <StyledBadge variant={metadata.type} status={metadata.status}>
                            <Typography
                                tag="p"
                                fontSize={{ xs: "fs25" }}
                                color={CHANGES_BADGE_VARIANTS[metadata.type].textColor}
                                fontWeight="bold"
                                textAlign="center"
                            >
                                {CHANGES_TEXT_VARIANTS[metadata.type]}
                            </Typography>
                        </StyledBadge>

                        <StyledCheckBox
                            variant={metadata.type}
                            active={selectedChanges.some(change => change.id === metadata.id)}
                            status={metadata.status}
                        />
                    </div>

                    <Typography
                        tag="p"
                        fontSize={{ xs: "fs75" }}
                        color="black"
                        fontWeight="medium"
                        textAlign="left"
                    >
                        {metadata.text}
                    </Typography>
                </div>

                {metadata.status !== "pending" && (
                    <div style={{ display: "flex", width: "100%", height: 5 }}></div>
                )}
                <div
                    style={{
                        display: metadata.status === "pending" ? "flex" : "none",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <StyledSmlButton>
                        <MdDoneAll
                            size={14}
                            color={Theme.colors.black}
                            onClick={e => e.stopPropagation()}
                        />
                    </StyledSmlButton>

                    <StyledSmlButton>
                        <RiDeleteBin6Line
                            size={12}
                            color={Theme.colors.black}
                            onClick={e => e.stopPropagation()}
                        />
                    </StyledSmlButton>
                </div>
            </Content>
        </Root>
    );
};
