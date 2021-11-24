import React from "react";
import {cleanup, fireEvent, render} from '@testing-library/react';
import AreYouReadyCheckBox from '../../src/components/AreYouReadyCheckBox';

afterEach(cleanup)

describe('AreYouReadyCheckBox', () => {
	const { container } = render(
		<AreYouReadyCheckBox />,
	);

	const label = container.querySelector('label') as Element

	describe('label 요소에 click 이벤트가 발생하면',  () => {
		fireEvent.click(label)

		const content = document.querySelector('.happy-hacking')

		test('.happy-hacking 콘텐츠가 출력된다.', () => {
			expect(content).toBeTruthy();
		});
	})

	describe('label 요소에 click 다시한번 발생하면', () => {
		fireEvent.click(label)

		const content = document.querySelector('.happy-hacking')

		test('.happy-hacking 콘텐츠가 null 이 된다.', () => {
			expect(content).toBeNull();
		});
	})
});

