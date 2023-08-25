import Grid from '@mui/material/Unstable_Grid2';
import LeftNavTopBar from './LeftNavTopBar/leftNavTopBar';
import ConversationsList from './ConversationsList/conversationsList';

const ChatScreenLeftNav = () => {
	return (
		<Grid lg={3} md={3} xs={12}>
			<Grid container direction='column' wrap='nowrap'>
				<LeftNavTopBar />
				<ConversationsList />
			</Grid>
		</Grid>
	);
};

export default ChatScreenLeftNav;
