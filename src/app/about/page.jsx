export default function page() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto p-2 text-center">
                <div>
                    <h1 className="text-3xl font-semibold my-3">
                        About Movie App
                    </h1>
                    <div className="text-md text-gray-500 flex flex-col gap-6">
                        <p>
                            This is a simple movie app built using Next.js and
                            Tailwind CSS. It allows users to search for movies
                            and view their details.
                        </p>
                        <p>
                            This app uses the{" "}
                            <a href="https://www.themoviedb.org/">
                                The Movie Database (TMDb) API
                            </a>{" "}
                            for fetching movie data.
                        </p>
                        <p>
                            This app is built by{" "}
                            <a href="https://github.com/Breanzy">
                                Brean Julius Carbonilla
                            </a>{" "}
                            and is open-source.
                        </p>
                        <p>
                            If you want to contribute, feel free to open an
                            issue or submit a pull request on GitHub.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
