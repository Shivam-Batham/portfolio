import { useEffect, useState } from "react";

export default function GithubContribImage({ username = "Shivam-Batham" }) {
  const [imgKey, setImgKey] = useState(0);

  useEffect(() => {
    const obs = new MutationObserver(() => setImgKey((k) => k + 1));
    obs.observe(document.documentElement, { attributes: true }); // listens for class changes like `dark`
    return () => obs.disconnect();
  }, []);

  return (
    <div className="max-w-4xl mx-auto rounded-lg p-4 border border-dashed dark:border-neutral-700 bg-white dark:bg-[#000] transition-colors">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white font-Cal">
        GitHub Activity
      </h3>

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          key={imgKey} // forces reload when imgKey changes
          src={`https://github.com/users/${username}/contributions`}
          alt={`${username} GitHub contributions`}
          className="w-full h-auto rounded-md mt-4"
          style={{ imageRendering: "pixelated" }}
        />
      </a>
    </div>
  );
}
