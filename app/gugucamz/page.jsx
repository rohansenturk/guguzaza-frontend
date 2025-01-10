const gifs = [
    '/twerk.gif',
    '/sex.gif',
]

export default function Clicker() {
    return (
        <>
            <div
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    height: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <span>ЧТО ЯВЛЯЕТСЯ СЛЕДУЮЩИМ ШАГОМ ОПЕРАЦИИ?</span>
            </div>
            {gifs.map((gif, index) => {
                return (
                    <img key={index} src={gif} />
                )
            })}
            <video src="/locked-in.mp4" controls loop />
        </>
    )
}