import React from "react";
import { FooterContainer } from "./Footer.styles";
import { useTranslate } from "../../hooks/useTranslate";

const Footer: React.FC = () => {
  const translate = useTranslate();
  return (
		<FooterContainer>
			<div className='info'>
				<div className='info__card'>
					<h3 className='info__card__header'>
						{translate.FOOTER.CONTACT.TITLE}
					</h3>
					<p className='info__card__text'>+351 220137052</p>
				</div>
				<div className='info__card'>
					<h3 className='info__card__header'>
						{translate.FOOTER.LOCATION.TITLE}
					</h3>
					<p className='info__card__text'>
						{translate.FOOTER.LOCATION.ADDRESS}
					</p>
				</div>
				<div className='info__card'>
					<h3 className='info__card__header'>
						{translate.FOOTER.SCHEDULE.TITLE}
					</h3>
					<p className='info__card__text'>
						{translate.FOOTER.SCHEDULE.DAYS.PART1} ……{" "}
						{translate.FOOTER.SCHEDULE.TIME.PART1}
					</p>
					<p className='info__card__text'>
						{translate.FOOTER.SCHEDULE.DAYS.PART2} ……{" "}
						{translate.FOOTER.SCHEDULE.TIME.PART2}{" "}
					</p>
				</div>
			</div>
		</FooterContainer>
	);
};

export default Footer;
