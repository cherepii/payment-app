import type { NextPage } from 'next'
import Meta from 'utils/meta/Meta'

import HomePage from '@screens/home/HomePage'

const Home: NextPage = () => {
	return (
		<Meta title="Main page">
			<HomePage />
		</Meta>
	)
}

export default Home
