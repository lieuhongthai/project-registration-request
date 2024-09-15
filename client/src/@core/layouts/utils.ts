// ** Types
import { NavGroup, NavLink } from "../types/mui/type";

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
export const handleURLQueries = (
  _router: any,
  _path: string | undefined
): boolean => {
  return false;
  // if (Object.keys(query).length && path) {
  //   const arr = Object.keys(query);

  //   return (
  //     asPath.includes(path) &&
  //     asPath.includes(query[arr[0]] as string) &&
  //     path !== "/"
  //   );
  // }

  // return false;
};

/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentURL
 */
export const hasActiveChild = (item: NavGroup, currentURL: string): boolean => {
  const { children } = item;

  if (!children) {
    return false;
  }

  for (const child of children) {
    if ((child as NavGroup).children) {
      if (hasActiveChild(child, currentURL)) {
        return true;
      }
    }
    const childPath = (child as NavLink).path;

    // Check if the child has a link and is active
    if (
      child &&
      childPath &&
      currentURL &&
      (childPath === currentURL ||
        (currentURL.includes(childPath) && childPath !== "/"))
    ) {
      return true;
    }
  }

  return false;
};

/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */
export const removeChildren = (
  children: NavLink[],
  openGroup: string[],
  currentActiveGroup: string[]
) => {
  children.forEach((child: NavLink) => {
    if (!currentActiveGroup.includes(child.title)) {
      const index = openGroup.indexOf(child.title);
      if (index > -1) openGroup.splice(index, 1);

      // @ts-ignore
      if (child.children)
        removeChildren(child.children, openGroup, currentActiveGroup);
    }
  });
};
