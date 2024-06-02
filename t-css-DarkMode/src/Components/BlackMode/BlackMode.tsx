import { useEffect, useRef, useState } from "react";

export const BlackMode = () => {
  const checkRef = useRef<HTMLInputElement>(null);

  const [isCheket, setIsCheket] = useState<boolean>(false);

  useEffect(() => {
    const elementoHtml = document.querySelector("#htmlRoot");
    if (isCheket) {
      elementoHtml?.classList.add("dark");
      return;
    }
    elementoHtml?.classList.remove("dark");
    return;
  }, [isCheket]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheket(e.target.checked);
  };

  return (
    <>
      <div className="ml-2 flex h-screen  justify-center items-center">
        <p className="mr-2 dark:text-white">Dark Mode</p>
        <input
          type="checkbox"
          ref={checkRef}
          checked={isCheket}
          onChange={handleCheck}
        />
      </div>
    </>
  );
};
