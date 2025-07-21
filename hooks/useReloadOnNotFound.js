import { useEffect } from "react";

export function useReloadOnNotFound(data) {
  useEffect(() => {
    if (data && data.notFound) {
      if (!window.__justReloaded) {
        window.__justReloaded = true;
        window.location.reload();
      }
    }
  }, [data]);
}