import { Typography, TypographyOwnProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface PrimaryColoredLabelProps {
	variant: TypographyOwnProps['variant'];
	text: string;
}
const PrimaryColoredLabel = (props: PrimaryColoredLabelProps) => {
	const { variant, text } = props;
	const theme = useTheme();
	return (
		<Typography sx={{ color: theme.palette.primary.main }} variant={variant}>
			{text}
		</Typography>
	);
};

export default PrimaryColoredLabel;
