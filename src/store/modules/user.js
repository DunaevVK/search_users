export default {
    state: {
        users: [],
        isNew: true,
        isNothing: false,
        isLoading: false,
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        isNewQuery(state) {
            return state.isNew
        },
        isNothingValue(state) {
            return state.isNothing
        },
        getIsLoading(state) {
            return state.isLoading
        }
    },
    mutations: {
        updateUsers(state, payload) {
            state.users = payload
        },
        showIsNew(state) {
            state.isNew = true
        },
        hideIsNew(state) {
            state.isNew = false
        },
        showIsNothing(state) {
            state.isNothing = true
        },
        hideIsNothing(state) {
            state.isNothing = false
        },
        showIsLoading(state) {
            state.isLoading = true
        },
        hideIsLoading(state) {
            state.isLoading = false
        },
    },
    actions: {
        async getMoreUsersId(context, id) {
            let resp = null;
            let searchId = '';
            let searchSurname = '';
            context.commit('showIsLoading');
            id.map((element, index) => {
                if (String(element).match(/\d/)) {

                    index + 1 == id.length ? searchId += `id=${element.trim()}` : searchId += `id=${element.trim()}&`
                    return searchId;
                } else {
                    element.trim()
                    if (element) { let newElement = element[0].toUpperCase() + element.slice(1) }
                    index + 1 == id.length ? searchSurname += `username=${newElement}` : searchSurname += `username=${newElement}&`
                    return searchSurname;
                }
            });
            try {
                searchId.length > 0 ? resp = await fetch("https://jsonplaceholder.typicode.com/users?" + searchId) : resp = await fetch("https://jsonplaceholder.typicode.com/users?" + searchSurname)
                if (resp.status != 200) {
                    throw new Error(resp.status)
                }
            } catch (error) {
                let err = new Error("Ого, ошибка! Неверный запрос или ошибка сервера. Статус ответа с сервера  " + error);
                alert(err)
            }
            const users = await resp.json();
            if (users.length == 0) {
                context.commit('showIsNothing')
                context.commit('hideIsNew')

            }
            if (users.length > 0) {
                context.commit('hideIsNew')
                context.commit('hideIsNothing')

            }

            context.commit('hideIsLoading');
            context.commit('updateUsers', users);
        }
    },
}