import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './home.scss';
import logo from '../../images/logo.png';
import {
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	Typography,
} from '@mui/material';
import { DoubleArrowTwoTone, LooksOne, LooksTwo, Looks3, Looks4, Looks5 } from '@mui/icons-material';
import { CHAT_PATH } from '../../utils/constants';

const Home: FunctionComponent = () => {
	const [openLoginResterDialog, setOpenLoginRegisterDialog] = useState(false);
	const onClose = () => setOpenLoginRegisterDialog(false);
	const onOpen = () => setOpenLoginRegisterDialog(true);
	return (
		<>
			<div className='landing-page-background'></div>
			<Container maxWidth='md'>
				<div className='landing-page'>
					<div className='landing-page-content'>
						<div className='landing-page-header'>
							<div className='logo'>
								<img src={logo} alt='logo' height={60} width={180} />
							</div>
						</div>
						<div className='landing-page-details'>
							<Grid container spacing={2} alignItems='center'>
								<Grid lg={8} item>
									<div className='app-details'>
										<Typography className='app-details-header' align='left' gutterBottom={true} variant='h5'>
											<ReactMarkdown className='markdown-string'>***Chat like a PRO***</ReactMarkdown>
										</Typography>
										<List dense={true}>
											<ListItem>
												<ListItemIcon>
													<LooksOne />
												</ListItemIcon>
												<ListItemText>
													<Typography align='left'>
														<ReactMarkdown className='markdown-string'>
															*Type in style* with **Markdown** support
														</ReactMarkdown>
													</Typography>
												</ListItemText>
											</ListItem>
											<ListItem>
												<ListItemIcon>
													<LooksTwo />
												</ListItemIcon>
												<ListItemText>
													<Typography align='left'>Forgot something! Schedule a message now and send later</Typography>
												</ListItemText>
											</ListItem>
											<ListItem>
												<ListItemIcon>
													<Looks3 />
												</ListItemIcon>
												<ListItemText>
													<Typography align='left'>
														Flooded conversations! Prioritize or group your conversations
													</Typography>
												</ListItemText>
											</ListItem>
											<ListItem>
												<ListItemIcon>
													<Looks4 />
												</ListItemIcon>
												<ListItemText>
													<Typography align='left'>
														Looks boring! Customize every conversation with your favorite photos as the background
													</Typography>
												</ListItemText>
											</ListItem>
											<ListItem>
												<ListItemIcon>
													<Looks5 />
												</ListItemIcon>
												<ListItemText>
													<Typography align='left'>Feeling bored! Start a fun conversation with our AI</Typography>
												</ListItemText>
											</ListItem>
										</List>
									</div>
								</Grid>
								<Grid item lg={4}>
									<Button variant='contained' size='large' onClick={onOpen} endIcon={<DoubleArrowTwoTone />}>
										Get started
									</Button>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
				<LoginRegisterDialog open={openLoginResterDialog} onClose={onClose} />
			</Container>
		</>
	);
};
export default Home;

interface LoginRegisterDialogProps {
	open: boolean;
	onClose: Function;
}
const LoginRegisterDialog: FunctionComponent<any> = (props: LoginRegisterDialogProps) => {
	const { open, onClose } = props;
	const [isRegister, setIsRegister] = useState(false);
	useEffect(() => {
		if (open) {
			setIsRegister(false);
		}
	}, [open]);
	const goTo = useNavigate();
	const LoginDialogContent = (
		<DialogContent className='dialog-content'>
			<TextField
				id='user_name'
				className='dialog-text-field'
				label='User id or Email'
				type='email'
				required
				size='medium'
				variant='filled'
				fullWidth
				color='info'
			/>
			<TextField
				id='password'
				className='dialog-text-field'
				label='Password'
				type='password'
				required
				size='medium'
				variant='filled'
				fullWidth
				color='info'
			/>
			<Button variant='outlined' color='info' onClick={() => setIsRegister(true)}>
				Don't have an account. Register now
			</Button>
		</DialogContent>
	);
	const RegisterDialogContent = (
		<DialogContent className='dialog-content'>
			<TextField
				id='full_name'
				className='dialog-text-field'
				label='Full name'
				type='text'
				required
				size='medium'
				variant='filled'
				fullWidth
				color='info'
			/>
			<TextField
				id='user_name'
				className='dialog-text-field'
				label='User id or Email'
				type='email'
				required
				size='medium'
				variant='filled'
				fullWidth
				color='info'
			/>
			<TextField
				id='password'
				className='dialog-text-field'
				label='Password'
				type='password'
				required
				size='medium'
				variant='filled'
				fullWidth
				color='info'
			/>
			<TextField
				id='confirm_password'
				className='dialog-text-field'
				label='Confirm password'
				type='password'
				required
				size='medium'
				variant='filled'
				fullWidth
				color='info'
			/>
			<Button variant='outlined' color='info' onClick={() => setIsRegister(false)}>
				Go back to login
			</Button>
		</DialogContent>
	);
	const LoginActions = (
		<DialogActions>
			<Button variant='contained' color='secondary' onClick={() => onClose()}>
				Cancel
			</Button>
			<Button variant='contained' onClick={() => goTo(CHAT_PATH)}>
				Submit
			</Button>
		</DialogActions>
	);
	const RegisterActions = (
		<DialogActions>
			<Button variant='contained' color='secondary' onClick={() => onClose()}>
				Cancel
			</Button>
			<Button variant='contained' onClick={() => setIsRegister(false)}>
				Submit
			</Button>
		</DialogActions>
	);
	return (
		<Dialog open={open} fullWidth>
			<DialogTitle>
				<Typography align='left' gutterBottom={true} variant='h5'>
					Login
				</Typography>
			</DialogTitle>
			{isRegister ? RegisterDialogContent : LoginDialogContent}
			{isRegister ? RegisterActions : LoginActions}
		</Dialog>
	);
};
