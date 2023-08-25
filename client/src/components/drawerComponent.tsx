import { ArrowBackTwoTone, CheckTwoTone, EditTwoTone, ShieldTwoTone } from '@mui/icons-material';
import {
	Drawer,
	Box,
	Typography,
	Avatar,
	TextField,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	List,
	Divider,
} from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import profilePhoto from '../images/profile_photo.jpg';
import { useTheme } from '@mui/material/styles';
import PrimaryColoredLabel from './primaryColoredLabel';
import { useState } from 'react';

interface DrawerComponentProps {
	isOpen: boolean;
	closeDrawer: Function;
	userId: string;
	drawerName: 'Profile' | 'Settings';
}
const DrawerComponent = (props: DrawerComponentProps) => {
	const { isOpen, closeDrawer, drawerName } = props;
	const theme = useTheme();
	const [editName, setEditName] = useState(false);
	const [editStatus, setEditStatus] = useState(false);
	const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
	const handleCloseProfileDrawer = () => {
		console.log('right call');
		setIsProfileDrawerOpen(false);
	};
	const drawerSX = {
		'& .MuiDrawer-paper': {
			boxShadow: 'none',
			width: '360px',
		},
	};
	const DrawerHeader = (
		<Box sx={{ height: '98px', backgroundColor: theme.palette.mode === 'dark' ? blueGrey[800] : grey[200] }}>
			<Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '24px', paddingTop: '60px' }}>
				<ArrowBackTwoTone sx={{ marginRight: '24px', cursor: 'pointer' }} onClick={() => closeDrawer()} />
				<Typography variant='h6' sx={{ fontWeight: '500' }}>
					{drawerName}
				</Typography>
			</Box>
		</Box>
	);
	return (
		<Drawer open={isOpen} hideBackdrop sx={drawerSX} id={drawerName} key={drawerName}>
			<Box>
				{DrawerHeader}
				<Box
					sx={{
						backgroundColor: theme.palette.background.paper,
						maxHeight: 'calc(100vh - 98px)',
						height: 'calc(100vh - 98px)',
						overflowY: 'scroll',
					}}
				>
					{drawerName === 'Profile' ? (
						<>
							<Box sx={{ display: 'grid', justifyContent: 'center', marginTop: '24px' }}>
								<Avatar sx={{ width: '180px', height: '180px' }} alt='profile photo' src={profilePhoto} />
							</Box>
							<Box sx={{ marginRight: '24px', marginLeft: '24px', marginTop: '48px' }}>
								<PrimaryColoredLabel variant='body1' text='Your name' />
								<Box sx={{ marginTop: '8px' }}>
									{editName ? (
										<Box sx={{ position: 'relative' }}>
											<TextField
												id='full_name'
												defaultValue='Vikram Chava'
												type='text'
												required
												size='medium'
												variant='standard'
												fullWidth
												color='primary'
												autoFocus
											/>
											<CheckTwoTone
												sx={{ position: 'absolute', bottom: '4px', right: '4px', cursor: 'pointer' }}
												onClick={() => setEditName(false)}
												fontSize='small'
											/>
										</Box>
									) : (
										<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
											<Typography variant='subtitle1'>Vikram Chava</Typography>
											<EditTwoTone fontSize='small' sx={{ cursor: 'pointer' }} onClick={() => setEditName(true)} />
										</Box>
									)}
								</Box>
								<Box sx={{ marginTop: '24px' }}>
									<Typography variant='body2'>
										This is not your user name that you use to login. This is visible to other users.
									</Typography>
								</Box>
								<Box sx={{ marginTop: '48px' }}>
									<PrimaryColoredLabel variant='body1' text='Status' />
									<Box sx={{ marginTop: '8px' }}>
										{editStatus ? (
											<Box sx={{ position: 'relative' }}>
												<TextField
													id='status'
													defaultValue='Busy'
													type='text'
													required
													size='medium'
													variant='standard'
													fullWidth
													color='primary'
													autoFocus
												/>
												<CheckTwoTone
													sx={{ position: 'absolute', bottom: '4px', right: '4px', cursor: 'pointer' }}
													onClick={() => setEditStatus(false)}
													fontSize='small'
												/>
											</Box>
										) : (
											<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Typography variant='subtitle1'>Busy</Typography>
												<EditTwoTone fontSize='small' sx={{ cursor: 'pointer' }} onClick={() => setEditStatus(true)} />
											</Box>
										)}
									</Box>
								</Box>
							</Box>
						</>
					) : (
						<Box sx={{ marginTop: '16px' }}>
							<Box
								sx={{
									'paddingLeft': '24px',
									'display': 'flex',
									'alignItems': 'center',
									'cursor': 'pointer',
									'paddingTop': '8px',
									'paddingBottom': '8px',
									'&:hover': {
										backgroundColor: theme.palette.background.default,
									},
								}}
								onClick={() => setIsProfileDrawerOpen(true)}
							>
								<Avatar alt='Profile phot' src={profilePhoto} sx={{ width: '72px', height: '72px' }} />
								<Box sx={{ marginLeft: '24px', display: 'flex', flexDirection: 'column' }}>
									<Typography variant='h6'>Vikram Chava</Typography>
									<Typography variant='body1' sx={{ color: theme.palette.mode === 'dark' ? grey[400] : grey[800] }}>
										Busy
									</Typography>
								</Box>
								<DrawerComponent
									isOpen={isProfileDrawerOpen}
									closeDrawer={handleCloseProfileDrawer}
									drawerName='Profile'
									userId=''
								/>
							</Box>
							<Box sx={{ marginTop: '16px' }}>
								{['Privacy', 'Security', 'Request account info', 'Help', 'Logout'].map((settingName: string) => {
									return (
										<>
											<List sx={{ paddingBottom: '0', paddingTop: '0' }}>
												<ListItemButton>
													<ListItemIcon>
														<ShieldTwoTone fontSize='small' />
													</ListItemIcon>
													<ListItemText>
														<Typography variant='h6' sx={{ fontWeight: '400' }}>
															{settingName}
														</Typography>
													</ListItemText>
												</ListItemButton>
											</List>
											<Divider flexItem />
										</>
									);
								})}
								{/* <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '24px', paddingTop }}>
									<LockPersonTwoTone fontSize='small' sx={{ marginRight: '24px' }} />
									<Typography variant='h6'>Privacy</Typography>
									<Divider />
								</Box> */}
							</Box>
						</Box>
					)}
				</Box>
			</Box>
		</Drawer>
	);
};

export default DrawerComponent;
