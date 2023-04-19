import { Dispatch, SetStateAction } from "react";

type ImportQuestionsProps = {
  setImportQuestions: Dispatch<SetStateAction<string>>;
};

const ImportQuestions: React.FC<ImportQuestionsProps> = ({
  setImportQuestions,
}) => {
  return (
    <div className="w-[65%] md:w-[50%] lg:w-[30%]">
      <div
        className="edit-form"
        role="textbox"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) =>
          setImportQuestions(e.currentTarget.textContent || "")
        }></div>
    </div>
  );
};

export default ImportQuestions;
