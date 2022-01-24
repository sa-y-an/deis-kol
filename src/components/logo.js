/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" >
      <img src="/logo.png" alt="banner" height="50%" width="50%"/>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
