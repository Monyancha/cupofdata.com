import React, { Fragment } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { Title } from '../components/Typography'
import Link from 'gatsby-link'

const Iframe = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border: none;
`
const GotoHome = Title.extend`
	position: absolute;
	left: 85%;
	top: 20px;
	color: #ffffff;
	transform: translateX(-50%);
`
const Onboarding = () => (
	<Fragment>
		<Iframe width="100%" height="100%" frameborder="0" src="https://landbot.io/u/H-25231-G88YW0YD97JZI1KT/index.html"></Iframe>
		<Link to='/'><GotoHome>Home</GotoHome></Link>
	</Fragment>
)
export default Onboarding