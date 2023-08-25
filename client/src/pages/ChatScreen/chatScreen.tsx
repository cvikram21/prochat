import { Container, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import './chatScreen.scss';
import ChatScreenLeftNav from './ChatScreenLeftNav/chatScreenLeftNav';

const ChatScreen = () => {
	return (
		<div className='chat-screen'>
			<Grid container>
				<ChatScreenLeftNav />
				<Divider orientation='vertical' flexItem />
				<Grid lg={9} md={9} sx={{ display: { xs: 'none' } }}>
					<Container fixed />
				</Grid>
			</Grid>
		</div>
	);
};

export default ChatScreen;
