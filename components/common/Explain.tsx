export const Explain = ({ description }: { description: string }) => {
  return (
    <div className="max-w-500 flex flex-wrap pb-8 mt-4 ">
      <p className="break-all">
        <span className="font-bold mr-2">해설:</span>
        {description}
      </p>
    </div>
  );
};
