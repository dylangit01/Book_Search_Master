import React from 'react';
import styles from './Book.module.css'

const Book = ({ book }) => {

	return (
		<>
			<div className={styles.card}>
				<div className={styles.cardContent}>
					<div>
						<h3 className={styles.cardTitle}>Title: {book.title}</h3>
						<h3 className={styles.cardAuthor}>
							Author:
							{book.author_name &&
								book.author_name.map((name, i) => (
									<ul key={i}>
										<li>{name}</li>
									</ul>
								))}
						</h3>
						<span className={styles.pubDateLabel}>Publish Date: </span>
						<select className={styles.publish}>
							{book.publish_date &&
								book.publish_date.map((pubDate, i) => (
									<option key={i} value={pubDate}>
										{pubDate}
									</option>
								))}
						</select>
					</div>
					{book.cover_i ? (
						<img
							className={styles.bookImg}
							src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
							alt='img'
						/>
					) : (
						<img
							className={styles.bookImg}
							src='https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_640.png'
							alt='imgAlt'
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Book;