import {fireStore} from "./firebase";

//todo migrate reflist2 -> reflist1
async function getReferenceList() {
    return new Promise(function (resolve) {
        fireStore.collection('reference_list2').onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                resolve(doc.data())
            });
        });
    })
}

async function getSortingOrder() {
    return new Promise(function (resolve) {
        fireStore.collection('sort_order').onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                resolve(doc.data())
            });
        });
    })
}
export async function ReadFromFireStore(path) {
    return new Promise(function (resolve) {
        fireStore.collection(path).onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                resolve(doc.data())
            });
        });
    })
}