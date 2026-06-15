import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}));

describe('Home Page', () => {
  it('renders the landing page', () => {
    render(<Home />);
    expect(screen.getByText(/Financial/i)).toBeInTheDocument();
  });

  it('has login and signup links', () => {
    render(<Home />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
