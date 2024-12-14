import React from "react";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, isAsyncThunkAction } from "@reduxjs/toolkit";
import postList from "./postList";

const mockStore = configureStore([]);

describe('postList', () => {
    it('renders posts correctly', () => {
        const store = mockStore({
            posts: {
                posts: [{ data: { id: '1', title: 'Test Post', selftext: 'Test Content'} }],
                searchTerm: '',
            },
        });

        render(
            <Provider store={store}>
                <postList />
            </Provider>
        );

        expect(screen.getByText(/Test Post/i)).toBeInTheDocument();
    });
});