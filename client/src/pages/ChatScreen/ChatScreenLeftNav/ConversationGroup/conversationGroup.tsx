import { useState } from 'react';
import { ArrowDropDownTwoTone, ArrowDropUpTwoTone, Groups2TwoTone, KeyboardArrowDown } from '@mui/icons-material';
import { Box, Divider, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChatDetailsBox from '../ChatList/chatDetailsBox';
import StyledMenu from '../../../../components/styledMenu';

interface ConversationGroupProps {
	conversations: number;
	name: string;
}
const ConversationGroup = (props: ConversationGroupProps) => {
	const { conversations, name } = props;

	const theme = useTheme();
	const groupNameBoxSX = {
		'paddingLeft': '8px',
		'paddingRight': '4px',
		'display': 'flex',
		'alignItems': 'center',
		'cursor': 'pointer',
		'&:hover': {
			backgroundColor: theme.palette.background.default,
		},
	};
	const groupHeaderBoxSX = {
		'display': 'flex',
		'justifyContent': 'space-between',
		'alignItems': 'center',
		'marginBottom': '8px',
		'& .group-options-icon': {
			display: 'none',
		},
		'&:hover': {
			'& .group-options-icon': {
				display: 'block',
			},
		},
	};
	const menuItemSX = { backgroundColor: theme.palette.background.default };

	const [isExpanded, setIsExpanded] = useState(true);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isGroupMenuOpen = Boolean(anchorEl);
	const handleGroupMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleGroupMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ marginTop: '12px', marginBottom: '12px' }}>
			<Box sx={groupHeaderBoxSX}>
				<Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '12px' }}>
					<Groups2TwoTone fontSize='small' sx={{ marginRight: '8px' }} />
					<Box
						sx={groupNameBoxSX}
						onClick={(e: any) => {
							handleGroupMenuClick(e);
						}}
					>
						<Typography variant='h6' sx={{ fontWeight: '400' }}>
							{name}
						</Typography>
						<KeyboardArrowDown fontSize='small' className='group-options-icon' sx={{ marginLeft: '2px' }} />
					</Box>
				</Box>
				<Box sx={{ paddingRight: '8px' }}>
					{isExpanded ? (
						<ArrowDropDownTwoTone onClick={() => setIsExpanded(false)} sx={{ cursor: 'pointer' }} />
					) : (
						<ArrowDropUpTwoTone onClick={() => setIsExpanded(true)} sx={{ cursor: 'pointer' }} />
					)}
				</Box>
			</Box>
			<Box sx={{ display: isExpanded ? 'block' : 'none', marginTop: '12px' }}>
				{[...Array(conversations)].map((x, i) => (
					<ChatDetailsBox index={i} />
				))}
			</Box>
			<Divider flexItem />
			<StyledMenu
				id='demo-customized-menu'
				anchorEl={anchorEl}
				open={isGroupMenuOpen}
				onClose={handleGroupMenuClose}
				menuDirection='left'
			>
				<MenuItem sx={menuItemSX}>Add conversations to group</MenuItem>
				<MenuItem sx={menuItemSX}>Delete group</MenuItem>
			</StyledMenu>
		</Box>
	);
};

export default ConversationGroup;
