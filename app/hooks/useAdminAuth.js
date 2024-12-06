import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAdminAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);
}
