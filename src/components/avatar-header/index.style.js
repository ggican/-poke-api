import styled from "styled-components";

const AvatarHeaderStyle = styled.div`
    display: block;
    .avatar {
        &__header {
            padding-top: 10px;
            display: flex;
            width: 100%;
            &__left {
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            &__title {
                display: flex;
                font-size: 24px;
                font-weight: bold;
                color: #4a4a4a;
                text-transform: uppercase;
                padding: 10px;
                > span {
                    display: flex;
                    width: 100%;
                }
            }
            .top {
                align-items: center;
            }
            &__avatar {
                position: relative;
                width: 70px;
                height: 70px;
                border: 1px solid #ddd;
                background: #fff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2px;
                > img {
                    width: 100%;
                    display: flex;
                }
            }
        }
    }
`;
export default AvatarHeaderStyle;
