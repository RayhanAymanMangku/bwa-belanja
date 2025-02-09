export async function resolveParams<T>(params: T | Promise<T>): Promise<T> {
  if (params instanceof Promise) {
    return await params;
  }
  return params;
}