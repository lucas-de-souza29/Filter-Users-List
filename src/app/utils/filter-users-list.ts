import { InterfaceFilterOption } from "../interfaces/filter-options.interface";
import { InterfaceUser } from "../interfaces/user/user.interface";
import { isWithinInterval } from 'date-fns';

const filterUsersListByName = (name: string | undefined, usersList: InterfaceUser[]): InterfaceUser[] => {
    const NAME_NOT_TYPED = name === undefined;

    if(NAME_NOT_TYPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: InterfaceUser[]): InterfaceUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);
    
    return filteredList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: InterfaceUser[]): InterfaceUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATES_NOT_SELECTED) {
        return usersList;
    }
    
    const checkDateInterval = (user: InterfaceUser) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
    });
    
    const listFiltered = usersList.filter(checkDateInterval);

    return listFiltered;
}

const filterUsersList = (filterOptions: InterfaceFilterOption, usersList: InterfaceUser[]): InterfaceUser[] => {
    let filteredList: InterfaceUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}

export { filterUsersList };