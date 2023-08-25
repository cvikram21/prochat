import { Box, Avatar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StyledUserAvtar from '../../../../components/styledUserAvtar';
import { PersonRounded } from '@mui/icons-material';
import { useMemo } from 'react';
import { amber, blue, blueGrey, green, grey, lime, orange, pink, purple, red } from '@mui/material/colors';

interface ChatDetailsBoxProps {
	index: number;
}
const ChatDetailsBox = (props: ChatDetailsBoxProps) => {
	const { index } = props;
	const theme = useTheme();
	const getRandomColorForUserAvatar = useMemo(() => {
		const isDarkTheme = theme.palette.mode === 'dark';
		const contrastColor = isDarkTheme ? grey[200] : blueGrey[800];

		const styles = ['darkOnLight', 'lightOnDark'];
		const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

		let colors = [];
		if (isDarkTheme) {
			colors = [red[600], blue[600], purple[600], green[600], orange[600]];
		} else {
			colors = [pink[300], blue[400], lime[400], amber[400], orange[400]];
		}
		const selectedColor = colors[Math.floor(Math.random() * colors.length)];

		if (selectedStyle === 'darkOnLight') {
			return { background: contrastColor, mainColor: selectedColor };
		} else {
			return { background: selectedColor, mainColor: contrastColor };
		}
	}, [theme.palette.mode]);
	return (
		<Box
			sx={{
				'marginRight': '4px',
				'&:hover': {
					backgroundColor: theme.palette.background.default,
					cursor: 'pointer',
				},
			}}
		>
			<div className='conversation-details-box'>
				<StyledUserAvtar isOnline={true}>
					<Avatar
						alt='profile pictire'
						sx={{
							width: '24px',
							height: '24px',
							borderRadius: '4px',
							backgroundColor: getRandomColorForUserAvatar.background,
						}}
						variant='square'
					>
						<PersonRounded sx={{ fill: getRandomColorForUserAvatar.mainColor }} />
					</Avatar>
				</StyledUserAvtar>
				<div className='conversation-content'>
					<div className='conversation-header'>
						<div className='conversation-contact-name'>
							<Typography variant='subtitle1'>{`Person ${index}`}</Typography>
						</div>
						<div className='conversation-time'>
							<Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
								{`7:2${index} PM`}
							</Typography>
						</div>
					</div>
					{/* <div className='conversation-text'>
						<Typography variant='body2' sx={{ color: theme.palette.text.secondary }} noWrap>
							{`This is the first line of text for person ${index} that can be too long most of the times`}
						</Typography>
					</div> */}
				</div>
			</div>
		</Box>
	);
};

export default ChatDetailsBox;
