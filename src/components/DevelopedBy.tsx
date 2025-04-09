// TODO : update developer

const DevelopedBy = () => {
  return (
    <div className="mb-8 font-mono text-neutral-10 text-xs text-center">
      <span>
        Made With 🫶 by{" "}
        <a
          href="https://dispo.social"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          DISPO.SOCIAL
        </a>
      </span>
    </div>
  );
};

export default DevelopedBy;
