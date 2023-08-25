import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import ChatDetailsBox from './chatDetailsBox';

interface ChatListProps {
	isEnclosingGroupExpanded?: boolean;
}
const ChatList = (props: ChatListProps) => {
	const { isEnclosingGroupExpanded = true } = props;
	const theme = useTheme();
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
				<Box sx={{ display: isEnclosingGroupExpanded ? 'block' : 'none' }}>
					{[...Array(10)].map((x, i) => (
						<ChatDetailsBox index={i} />
					))}
				</Box>
			</Box>
		</Grid>
	);
};

export default ChatList;
