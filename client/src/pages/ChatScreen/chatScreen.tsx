import { GroupAddTwoTone, MenuTwoTone, MessageTwoTone } from '@mui/icons-material';
import { AppBar, Avatar, Box, Container, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FunctionComponent } from 'react';
import profilePhoto from '../../images/profile_photo.jpg';
import './chatScreen.scss';

const ChatScreen: FunctionComponent = () => {
	const theme = useTheme();
	return (
		<div className='chat-screen'>
			<Grid container>
				<Grid item lg={4}>
					<Grid container direction='column'>
						<Grid item>
							<AppBar className='app-bar' position='sticky' color='transparent' enableColorOnDark>
								<Toolbar className='toolbar'>
									<div className='toolbar-right'>
										<Avatar alt='profile pictire' src={profilePhoto} />
									</div>
									<div className='toolbar-left'>
										<IconButton aria-label='Creat chat groups' size='large'>
											<GroupAddTwoTone />
										</IconButton>
										<IconButton aria-label='New message' size='large'>
											<MessageTwoTone />
										</IconButton>
										<IconButton aria-label='Menu' size='large'>
											<MenuTwoTone />
										</IconButton>
									</div>
								</Toolbar>
							</AppBar>
						</Grid>
						<Grid item>
							<Container
								fixed
								disableGutters
								sx={{ background: theme.palette.background.paper, maxHeight: 'calc(100vh - 64px)', overflow: 'scroll' }}
							>
								{[...Array(20)].map((x, i) => (
									<Box
										sx={{
											'height': '84px',
											'marginRight': '4px',
											'&:hover': {
												backgroundColor: theme.palette.background.default,
												cursor: 'pointer',
											},
										}}
									>
										<div className='conversation-details-box'>
											<Avatar alt='profile pictire' sx={{ width: '48px', height: '48px' }}>
												{(i + 10).toString(36).toUpperCase()}
											</Avatar>
											<div className='conversation-content'>
												<div className='conversation-header'>
													<div className='conversation-contact-name'>
														<Typography variant='h6' sx={{ fontWeight: 'bold' }}>{`Person ${i}`}</Typography>
													</div>
													<div className='conversation-time'>
														<Typography
															variant='body2'
															sx={{ color: theme.palette.text.secondary }}
														>{`7:2${i} PM`}</Typography>
													</div>
												</div>
												<div className='conversation-text'>
													<Typography variant='body2' sx={{ color: theme.palette.text.secondary }} noWrap>
														{`This is the first line of text for person ${i} that can be too long most of the times`}
													</Typography>
												</div>
											</div>
										</div>
										<Divider flexItem />
									</Box>
								))}
							</Container>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={8}>
					<Container fixed />
				</Grid>
			</Grid>
		</div>
	);
};

export default ChatScreen;
