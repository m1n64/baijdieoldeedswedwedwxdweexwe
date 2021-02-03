import React from "react";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Icon28MessageOutline from "@vkontakte/icons/dist/28/message_outline";
import {FormItem, Group, Search} from "@vkontakte/vkui";
import {Icon24MessageReplyOutline} from "@vkontakte/icons";

export default class Translate extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Group>
                {/*<Placeholder icon={*/}
                {/*this.props.activeState === "feed" ? <Icon28MessageOutline width={56} height={56} /> : <Icon24MessageReplyOutline width={56} height={56} />*/}
                {/*} />*/}
                <FormItem>
                    <Search/>
                </FormItem>
            </Group>
        )
    }
}