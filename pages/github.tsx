import NavBar from "../components/NavBar";
import RepoDetails from "../components/RepoDetails";

export default function Home() {
    return (
        <div className="text-gray-900 text-sm">
            <NavBar></NavBar>
            <RepoDetails></RepoDetails>

            <div className="repo-nav border-b border-gray-400 flex items-center px-4 mt-4 space-x-6">
                <div className="font-semibold">
                    <a href="#" className="flex font-semibold items-center border-b-2 border-red-500 px-4 pb-3">
                        <svg className="w-4 mr-2" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
                        </svg>
                        <span>Code</span>
                    </a>
                </div>

                <div className="font-semibold">
                    <a href="#" className="flex font-semibold items-center border-b-2 border-red-500 px-4 pb-3">
                        <svg className="w-4 mr-2" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
                        </svg>
                        <span>Code</span>
                    </a>
                </div>

                <div className="font-semibold">
                    <a href="#" className="flex font-semibold items-center border-b-2 border-red-500 px-4 pb-3">
                        <svg className="w-4 mr-2" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
                        </svg>
                        <span>Code</span>
                    </a>
                </div>
            </div>
        </div>
    )
}