import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  // mock데이터를 가지고온다
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  // 새로운 타이틀
  const [title, setTitle] = useState("");
  // 새로운 가수
  const [signer, setSinger] = useState("");

  // 새로운 노래추가함수
  const handleAdd = () => {
    const newsong = { title, signer };
    setPlayList((pervList) => [...pervList, newsong]);
    setTitle("");
    setSinger("");
  };

  // 노래 삭제함수
  const handleDelete = (i) => {
    setPlayList(playList.filter((_, idx) => idx !== i));
  };

  console.log(PlayListMock.playlist);

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {playList.map((list, i) => (
          <li key={i}>
            <h3>{list.title}</h3>
            <p>{list.signer}</p>
            <button onClick={() => handleDelete(i)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 :{" "}
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          가수/작곡 :{" "}
          <input value={signer} onChange={(e) => setSinger(e.target.value)} />
        </p>
        <p>
          <button onClick={handleAdd}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
/* 
문제 1.

  state를 다루기 위한 기초 문제입니다.
  음악 목록 10가지의 mock data가 있습니다.
  
  아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
  삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
*/

/* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
