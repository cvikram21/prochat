import { Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChatDetailsBox from '../ChatList/chatDetailsBox';
import ConversationGroup from '../ConversationGroup/conversationGroup';

const ConversationsList = () => {
	const theme = useTheme();
	const conversations = ['Group 1', 'Group 2', 'Group 3'];
	return (
		<Grid flexWrap='nowrap'>
			<Box
				sx={{
					background: theme.palette.background.paper,
					maxHeight: 'calc(100vh - 64px)',
					height: 'calc(100vh - 64px)',
					overflowY: 'scroll',
				}}
			>
				{conversations.map((name: string) => (
					<ConversationGroup conversations={4} name={name} />
				))}
				<Box sx={{ marginTop: '12px' }}>
					{[...Array(10)].map((x, i) => (
						<ChatDetailsBox index={i} />
					))}
				</Box>
			</Box>
		</Grid>
	);
};

export default ConversationsList;
