import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import styles from './Home.css';
import { t } from '../../Components/Languages';
import ReactModal from 'react-modal';

function Home({ match }) {
	const { lang } = match.params;
	return (
		<div>
			<Head title="React SSR Boilerplate • Home" />
			<div className={styles.intro}>
				<h1 className={styles.title}>React Boilerplate</h1>
				<p className={styles.desc}>{t(lang, 'language.title')}</p>
				<ReactModal
					isOpen={true}
					contentLabel="Minimal Modal Example"
				>
			 		content from react modal
		 		</ReactModal>
			</div>
		</div>
	);
}

export default Home;
