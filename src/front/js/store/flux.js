const getState = ({ getStore, setStore }) => {
	return {
		store: {
		  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		},
		actions: {
		  addToFavorites: (item, type) => {
			const store = getStore();
			const favorites = store.favorites;
	  
			// Create a unique identifier for the favorite item
			const uniqueId = `${item.uid}-${type}`;
	  
			// Check if the item is already a favorite
			const isAlreadyFavorite = favorites.some(favorite => favorite.uniqueId === uniqueId);
	  
			// If it's already a favorite, remove it; otherwise, add it
			const newFavorites = isAlreadyFavorite 
			  ? favorites.filter(favorite => favorite.uniqueId !== uniqueId)
			  : [...favorites, { ...item, type, uniqueId }];
	  
			// Update the store and persist the favorites to localStorage
			setStore({ favorites: newFavorites });
			localStorage.setItem("favorites", JSON.stringify(newFavorites));
		  },
	  
		  // Function to initialize the favorites from localStorage
		  getFavorites: () => {
			try {
			  const storedFavorites = localStorage.getItem("favorites");
			  if (storedFavorites) {
				setStore({ favorites: JSON.parse(storedFavorites) });
			  }
			} catch (error) {
			  console.log("Error getting favorites", error);
				}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		},
	};
};

export default getState;
