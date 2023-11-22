// const loadUser = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, name: "Juno" },
//                 { id: 2, name: "CooT" }
//             ]);
//         }, 3000);
//     });
// }
// const loadRepositories = async () =>  {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, name: "Repo 1" },
//                 { id: 2, name: "repo2 2" }
//             ]);
//         }, 3000);
//     });
// }
// const loadEvent = async () =>  {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Erro ao carregar os eventos!"));
//         }, 3000);
//     });
// }
// const loadAll = async () => {
//     try {
//         const result = await Promise.allSettled([
//         loadUser(),
//         loadRepositories(),
//         loadEvent() 
//         ]);

//         console.log(result);
//     } catch (error) {
//         console.log(error);

//     }
// };

// loadAll();