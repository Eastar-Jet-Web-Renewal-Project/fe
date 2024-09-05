// src/utilities/routes/routePathGenerator.ts

type RouteParams = Record<string, string | number>;

export function getDynamicRoute(
  route: string,
  params: RouteParams = {},
): string {
  const dynamicPathRegex = /:(\w+)/g;

  return route.replace(dynamicPathRegex, (match, paramName) => {
    if (paramName in params) {
      return String(params[paramName]);
    }
    throw new Error(`Missing value for route parameter "${paramName}"`);
  });
}

export function getDynamicRouteWithQuery(
  route: string,
  params: RouteParams = {},
  query: RouteParams = {},
): string {
  const path = getDynamicRoute(route, params);
  const queryString = Object.entries(query)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");

  return queryString ? `${path}?${queryString}` : path;
}
