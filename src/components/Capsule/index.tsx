type CapsuleProps = {
    id: string,
}

const Capsule = ({ id } : CapsuleProps) => (
    <div className="absolute right-2 top-3">
        <span className="px-2 py-1 pt-1 text-white bg-black text-s rounded-xl">{`#${id}`}</span>
    </div>
)

export default Capsule;