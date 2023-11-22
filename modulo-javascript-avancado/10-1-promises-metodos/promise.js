const loadUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
        throw new Error(`GitHub API Returned  status code ${response.status}`);
    }

    const user = await response.json();

    return user;
}
const loadRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!response.ok) {
        throw new Error(`Github API returne status code ${response.status}`);
    }

    const repositories = await response.json();
    return repositories.map((repo) => ({ id: repo.id, name: repo.name }));
};

const loadEvent = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/events`);

    if(!response.ok) {
        throw new Erro(`GitHub API returned status code ${response.status}`);
    }

    const events = await response.json();
    return events.map((event) => ({ id: event.id, name: event.type}));
};


const loadAll = async () => {
    try {
        const results = await Promise.all([
            loadUser("SrCooT"),
            loadRepositories("SrCooT"),
            loadEvent("SrCooT")
        ])
        console.log(results);
    } catch (error) {
        console.log(error);
        
    }
};


loadAll()