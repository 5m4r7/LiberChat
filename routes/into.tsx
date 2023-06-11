export default function() {
  return <>
    <div className="mx-10">
      <div className="text-center text-2xl">
        ルームに入室しましょう！
      </div>
      <div class="mx-auto">
        <div className="my-5">
          <label>Name: </label>
          <input placeholder="name" className="border" />
        </div>
        <div className="my-5">
          <label>Room id: </label>
          <input placeholder="Room ID" className="border" />
        </div>
        <div>
          <button className="btn">入室</button>
        </div>
      </div>
    </div>

  </>
}
