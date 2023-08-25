import { useState } from 'react';
import { Groups2TwoTone, MessageTwoTone, MoreVertTwoTone } from '@mui/icons-material';
import {
	AppBar,
	Toolbar,
	Avatar,
	IconButton,
	Dialog,
	DialogTitle,
	Typography,
	DialogContent,
	TextField,
	Button,
	DialogActions,
	MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import profilePhoto from '../../../../images/profile_photo.jpg';
import React from 'react';
import StyledMenu from '../../../../components/styledMenu';
import StyledUserAvtar from '../../../../components/styledUserAvtar';
import DrawerComponent from '../../../../components/drawerComponent';

const LeftNavTopBar = () => {
	const theme = useTheme();

	const [isAddGroupDialogOpen, setIsAddGroupDialogOpen] = useState(false);
	const closeAddGroupDialog = () => setIsAddGroupDialogOpen(false);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleAccountMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleAccountMenuClose = () => {
		setAnchorEl(null);
	};

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const handleDrawerOpen = () => {
		handleAccountMenuClose();
		setIsDrawerOpen(true);
	};
	const handleDrawerClose = () => setIsDrawerOpen(false);
	const [isProfileDrawerOpen, setIsProfileDraweOpen] = useState(false);
	const closeProfileDrawer = () => setIsProfileDraweOpen(false);

	return (
		<Grid>
			<AppBar className='app-bar' position='sticky' enableColorOnDark sx={{ boxShadow: 'none' }}>
				<Toolbar className='toolbar'>
					<div className='toolbar-right'>
						<StyledUserAvtar isOnline={true} badgeVerticalPosition='bottom'>
							<Avatar alt='profile pictire' src={profilePhoto} onClick={() => setIsProfileDraweOpen(true)} />
						</StyledUserAvtar>
					</div>
					<div className='toolbar-left'>
						<IconButton
							aria-label='Creat conversation group'
							size='large'
							onClick={() => setIsAddGroupDialogOpen(true)}
						>
							<Groups2TwoTone />
						</IconButton>
						<IconButton aria-label='New message' size='large'>
							<MessageTwoTone />
						</IconButton>
						<IconButton aria-label='Menu' size='large' onClick={(e: any) => handleAccountMenuClick(e)}>
							<MoreVertTwoTone />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Dialog open={isAddGroupDialogOpen} fullWidth>
				<DialogTitle>
					<Typography align='left' gutterBottom={true} variant='h5'>
						Create new conversation group
					</Typography>
				</DialogTitle>
				<DialogContent className='dialog-content'>
					<TextField
						id='conversation_group_name'
						className='dialog-text-field'
						label='Conversation group name'
						type='text'
						required
						size='medium'
						variant='filled'
						fullWidth
						color='info'
					/>
				</DialogContent>
				<DialogActions>
					<Button variant='contained' color='secondary' onClick={() => closeAddGroupDialog()}>
						Cancel
					</Button>
					<Button variant='contained' onClick={() => closeAddGroupDialog()}>
						Create
					</Button>
				</DialogActions>
			</Dialog>
			<StyledMenu id='demo-customized-menu' anchorEl={anchorEl} open={open} onClose={handleAccountMenuClose}>
				<MenuItem sx={{ backgroundColor: theme.palette.background.default }}>Theme</MenuItem>
				<MenuItem sx={{ backgroundColor: theme.palette.background.default }} onClick={() => handleDrawerOpen()}>
					Settings
				</MenuItem>
			</StyledMenu>
			<DrawerComponent isOpen={isDrawerOpen} closeDrawer={handleDrawerClose} drawerName='Settings' userId='' />
			<DrawerComponent isOpen={isProfileDrawerOpen} closeDrawer={closeProfileDrawer} drawerName='Profile' userId='' />
		</Grid>
	);
};

export default LeftNavTopBar;
