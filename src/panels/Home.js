import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	Group,
	PanelHeader,
	Root,
	View,
	PanelHeaderBack,
	Search,
	Spinner,
	Cell, FormItem,
} from '@vkontakte/vkui';

import Icon28UserOutline from "@vkontakte/icons/dist/28/user_outline";
import Icon28UsersOutline from "@vkontakte/icons/dist/28/users_outline";
import Icon28MusicOutline from "@vkontakte/icons/dist/28/music_outline";

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'panel1'
		}
	}

	render() {
		return (
			<>
				<PanelHeader>Словарь блатного жаргона</PanelHeader>
				<Group>
					<FormItem>
						<Search/>
					</FormItem>
				</Group>
			</>
		)
	}
};
