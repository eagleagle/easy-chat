import axios from 'axios';
import api  from '../../configs/api';

//获取当期用户所有的好友
export function fetchFriends() {
    return function (dispatch){
        axios
            .get(api.friends)
            .then((res) => dispatch({
                type: 'FETCH_FRIENDS_FULFILLED',
                payload: res.data
            }))
            .catch((err) =>
                dispatch({
                    type: 'FETCH_FRIENDS_REJECTED',
                    payload: err
                })
            );
    }; 
}

//查询某个用户信息
export function queryFriend(userId) {
    return function (dispatch) {
        axios
            .get(`${api.friends}/${userId}`)
            .then((res) =>  {     
                if (res.status = 'ok') {
                    dispatch({
                        type: 'QUERY_FRIEND_FULFILLED',
                        payload: res.data
                    });
                } else {
                    dispatch({
                        type: 'QUERY_FRIEND_REJECTED',
                        payload: res.data
                    });
                }
            })
            .catch((err) => dispatch({
                type: 'ADD_FRIEND_REJECTED',
                payload: err
            }));
    };
}

//添加好友
export function addFriend(userId) {
    return function (dispatch) {
        axios
            .post(`${api.friends}/${userId}`)
            .then((res) =>  {     
                if (res.status = 'ok') {
                    dispatch({
                        type: 'ADD_FRIEND_FULFILLED',
                        payload: res.data
                    });
                } else {
                    dispatch({
                        type: 'ADD_FRIEND_REJECTED',
                        payload: err
                    });
                }
            })
            .catch((err) => dispatch({
                type: 'ADD_FRIEND_REJECTED',
                payload: err
            }));
    };
}

//更新信息好友
export function updateFriend(userId, data) {
    return function (dispatch) {
        axios
            .put(`${api.friends}/${userId}`,{
                data
            })
            .then((res) => {
                if (res.status = 'ok') {
                    dispatch({
                        type: 'UPDATE_FRIEND_FULFILLED',
                        payload: res.data
                    });
                } else {
                    dispatch({
                        type: 'UPDATE_FRIEND_REJECTED',
                        payload: 'fail'
                    });                   
                }
            })
            .catch((err) => dispatch({
                type: 'UPDATE_FRIEND_REJECTED',
                payload: err
            }));
    };
}

//删除好友
export function deleteFriend(userId) {
    return function (dispatch) {
        axios
            .delete(`${api.friends}/${userId}`)
            .then((res) => {
                if (res.status = 'ok') {
                    dispatch({
                        type: 'DELETE_FRIEND_FULFILLED',
                        payload: 'ok'
                    });
                } else {
                    dispatch({
                        type: 'DELETE_FRIEND_REJECTED',
                        payload: 'fail'
                    });    
                }
               
            })
            .catch((err) => dispatch({
                type: 'DELETE_FRIEND_REJECTED',
                payload: err
            }));
    };
}


