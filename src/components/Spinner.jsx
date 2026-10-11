export default function Spinner({ size = "h-10 w-10" }) {
    return (
        <div className="flex justify-center items-center h-64">
            <div className={`${size} animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500`}
            role="status" aria-label="Loading"
            />
        </div>
    );
}