export function getHeaders(request: Request) {
  const cookies = request.headers.get("Cookie");

  return {
    Cookie: cookies || "",
  };
}
