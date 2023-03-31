import { useRouter } from "next/router";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const PreviousCards = ({ titleSets, setTitleSets, setCurrTitle }) => {
  const router = useRouter();

  function goToFlashcardSet(title) {
    setCurrTitle(title);
    localStorage.setItem("currTitle", title);
    router.push("/flashcard");
  }

  function deleteFlashcardSet(titleSet) {
    setTitleSets(
      titleSets.filter(
        (title) => (title.id && title.title) !== (titleSet.id && titleSet.title)
      )
    );

    localStorage.setItem("titleSets", JSON.stringify(titleSets));
  }

  function editFlashcardSet(title) {
    localStorage.setItem("currTitle", title);

    router.push("/edit");
  }

  return (
    <>
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-4 mb-2">Previous Flashcards</h1>
        {titleSets &&
          titleSets.map((titleSet) => (
            <div
              className="flex items-center w-[70%] h-10 pr-1 rounded border-[1px] border-[#d4d4d4] mb-2 lg:w-[30vw] hover:border-[2px]"
              key={titleSet.id}>
              <div
                className="cursor-pointer flex items-center pl-4 rounded text-lg w-[90%] h-full hover:text-[#954ca0] hover:font-bold transition-all duration-100"
                onClick={() => {
                  goToFlashcardSet(titleSet.title);
                }}>
                <p>{titleSet.title}</p>
              </div>

              {/* <button
                className="question-list-btn"
                type="button"
                onClick={() => editFlashcardSet(title)}>
                <AiFillEdit />
              </button> */}

              <button
                className="question-list-btn"
                type="button"
                onClick={() => {
                  deleteFlashcardSet(titleSet);
                }}>
                <BsFillTrashFill />
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default PreviousCards;
