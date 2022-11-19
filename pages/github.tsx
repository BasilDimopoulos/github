import NavBar from "../components/NavBar";
import RepoDetails from "../components/RepoDetails";

export default function Home() {
    return (
        <div className="text-gray-900 text-sm">
            <NavBar></NavBar>
            <RepoDetails></RepoDetails>
        </div>
    )
}