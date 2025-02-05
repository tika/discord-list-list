import {Card} from "../components/card";
import {useInputFilter} from "use-input-filter";
import data from "../data.json";

const categories = Object.entries(data.categories);
const all = Object.values(data.categories).flat();

export default function Home() {
	const {state, setState, filtered} = useInputFilter((item, state) => {
		return (item.name + item.description).toLowerCase().includes(state.toLowerCase().trim());
	}, all);

	return (
		<>
			<div className="shadow-md bg-gray-100 dark:bg-gray-800">
				<div className="max-w-4xl mx-3 md:mx-auto pt-5">
					<img
						src="https://static.vecteezy.com/system/resources/previews/001/191/986/non_2x/circle-logo-png.png"
						className="monotonize-image"
						alt="Discord"
						height={64}
						width={64}
					/>
				</div>

				<div className="mx-3 content-center py-24 max-w-4xl md:mx-auto md:space-y-4">
					<h1 className="mb-5 text-center font-bold text-4xl md:text-left dark:text-white">
						Discord List List
					</h1>

					<input
						type="text"
						placeholder="Search"
						className="bg-gray-900 placeholder-gray-200 dark:placeholder-gray-600 bg-opacity-30 px-4 py-2 rounded-md w-full md:w-1/2 outline-none focus:outline-none focus:ring ring-gray-300"
						onChange={(e) => setState(e.target.value)}
						value={state}
					/>

					<p className="my-3 text-sm md:text-md text-justify opacity-50 md:w-1/2 dark:text-white">
						If you dont use Discord List List to find the best Discord list, then how do you know that you
						have the best discord list from the potential Discord lists to find the best Discord? Look no
						more, for here is Discord List List.
					</p>

					<a
						href="https://www.producthunt.com/posts/discord-list-list?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-discord-list-list"
						target="_blank"
						className="flex justify-center mt-10 md:block"
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291721&theme=light"
							alt="Discord List List - The ultimate list for finding the perfect Discord list. | Product Hunt"
							width="200"
							height="54"
						/>
					</a>
				</div>
			</div>

			<div className="max-w-4xl mx-3 mt-8 md:mx-auto">
				{state === "" ? (
					<>
						{categories.map((entry) => {
							const [category, items] = entry;
							return (
								<div key={category}>
									<h2 className="text-center text-4xl font-bold mb-4 mt-10 md:text-left">
										{category}
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										{items.map((item) => {
											return (
												<Card
													key={item.link + item.name}
													name={item.name}
													link={item.link}
													description={item.description}
												/>
											);
										})}
									</div>
								</div>
							);
						})}
					</>
				) : (
					<div className="max-w-4xl mx-auto mt-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{filtered.map((item) => {
								return (
									<Card
										key={item.link + item.name}
										name={item.name}
										link={item.link}
										description={item.description}
									/>
								);
							})}
						</div>
						{!filtered.length && <p className="text-center">No results :(</p>}
					</div>
				)}
				<br />
				<p className={"text-center text-gray-600"}>Not affiliated with Discord</p>
				<br />
			</div>
		</>
	);
}
