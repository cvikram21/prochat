import { Badge, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledUserAvtarProps {
	isOnline: boolean;
	children: any;
	badgeVerticalPosition?: 'bottom' | 'top';
}
const StyledUserAvtar = (props: StyledUserAvtarProps) => {
	const { isOnline, children, badgeVerticalPosition = 'top' } = props;
	const StyledBadge = styled(Badge)(({ theme }) => ({
		'& .MuiBadge-badge': {
			'backgroundColor': '#44b700',
			'color': '#44b700',
			'boxShadow': `0 0 0 1px ${theme.palette.background.paper}`,
			'&::after': {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				borderRadius: '50%',
				// animation: 'ripple 1.2s infinite ease-in-out',
				border: '1px solid currentColor',
				content: '""',
			},
		},
	}));

	return (
		<StyledBadge
			overlap='circular'
			anchorOrigin={{ vertical: badgeVerticalPosition, horizontal: 'right' }}
			variant='dot'
			invisible={!isOnline}
		>
			<IconButton sx={{ padding: '0px' }}>{children}</IconButton>
		</StyledBadge>
	);
};

export default StyledUserAvtar;
