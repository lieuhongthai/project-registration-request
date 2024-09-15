// ** Type Imports
import { LayoutProps, NavGroup, NavLink, NavSectionTitle } from 'src/@core/types/mui/type';

// ** Custom Menu Components
import VerticalNavLink from './VerticalNavLink';
import VerticalNavGroup from './VerticalNavGroup';
import VerticalNavSectionTitle from './VerticalNavSectionTitle';

interface Props {
  parent?: NavGroup;
  navHover?: boolean;
  navVisible?: boolean;
  groupActive: string[];
  isSubToSub?: NavGroup;
  currentActiveGroup: string[];
  navigationBorderWidth: number;
  settings: LayoutProps['settings'];
  setGroupActive: (value: string[]) => void;
  setCurrentActiveGroup: (item: string[]) => void;
  verticalNavItems?: any;
}

const resolveNavItemComponent = (item: NavGroup | NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle;
  if ((item as NavGroup).children) return VerticalNavGroup;

  return VerticalNavLink;
};

const VerticalNavItems = (props: Props) => {
  // ** Props
  const { verticalNavItems } = props;

  const RenderMenuItems = verticalNavItems?.map((item: NavGroup | NavLink | NavSectionTitle, index: number) => {
    const TagName: any = resolveNavItemComponent(item);

    return <TagName {...props} key={index} item={item} />;
  });

  return <>{RenderMenuItems}</>;
};

export default VerticalNavItems;
