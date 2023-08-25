import { styled } from '@mui/material/styles';
import { MenuProps, Menu, PopoverProps } from '@mui/material';

interface StyledMenuProps {
	id: string;
	anchorEl: PopoverProps['anchorEl'];
	open: boolean;
	onClose: PopoverProps['onClose'];
	children: any;
	menuDirection?: 'center' | 'right' | 'left';
}
const StyledMenu = (props: StyledMenuProps) => {
	const { id, anchorEl, open, onClose, children, menuDirection = 'right' } = props;
	const StyledMenuComponnent = styled((props: MenuProps) => (
		<Menu
			variant='menu'
			elevation={0}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: menuDirection,
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: menuDirection,
			}}
			{...props}
		/>
	))(({ theme }) => ({
		'& .MuiPaper-root': {
			'borderRadius': 6,
			'marginTop': 0,
			'minWidth': 180,
			'boxShadow': 'rgb(8 8 8 / 26%) 0px 0px 8px 5px, rgb(0 0 0 / 16%) 0px 0px 10px 2px',
			'& .MuiMenu-list': {
				padding: '0 0',
			},
			'& .MuiMenuItem-root': {
				'paddingTop': theme.spacing(1),
				'paddingBottom': theme.spacing(1),
				'& .MuiSvgIcon-root': {
					fontSize: 18,
					color: theme.palette.text.secondary,
					marginRight: theme.spacing(2),
				},
			},
		},
	}));
	return (
		<StyledMenuComponnent id={id} anchorEl={anchorEl} open={open} onClose={onClose}>
			{children}
		</StyledMenuComponnent>
	);
};

export default StyledMenu;
