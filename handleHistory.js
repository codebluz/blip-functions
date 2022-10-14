// Code for external testing

const exampleHistory = {
    "type": "application/vnd.lime.collection+json",
    "resource": {
        "total": 7,
        "itemType": "application/vnd.iris.thread-message+json",
        "items": [
            {
                "id": "e7115d7f-b9f1-4c86-9d54-0183d3062efd",
                "direction": "received",
                "type": "application/vnd.iris.ticket+json",
                "content": {
                    "id": "e7115d7f-b9f1-4c86-9d54-0183d3062efd",
                    "sequentialId": 381,
                    "ownerIdentity": "testebruno16@msging.net",
                    "customerIdentity": "51f3d69e-61e1-4de8-a574-3272e97a77ea.testebruno16@0mn.io",
                    "customerDomain": "0mn.io",
                    "provider": "Lime",
                    "status": "Waiting",
                    "storageDate": "2022-10-13T20:25:41.373Z",
                    "externalId": "e7115d7f-b9f1-4c86-9d54-0183d3062efd",
                    "rating": 0,
                    "unreadMessages": 0,
                    "closed": false,
                    "customerInput": {
                        "type": "text/plain",
                        "value": "oi"
                    },
                    "priority": 0
                },
                "date": "2022-10-13T20:25:41.399Z"
            },
            {
                "id": "225cb33c-bdde-4a13-8b59-fe7205bb9aff",
                "direction": "received",
                "type": "text/plain",
                "content": "Mensagem1 - Cliente",
                "date": "2022-10-13T20:26:00.044Z",
                "status": "consumed",
                "metadata": {
                    "#uniqueId": "c237bc18-b0e6-4188-9982-45ff86ea6c6e",
                    "date_created": "1665692759826",
                    "uber-trace-id": "6214e85e2d1e67b0%3A6214e85e2d1e67b0%3A0%3A1",
                    "$internalId": "c237bc18-b0e6-4188-9982-45ff86ea6c6e",
                    "$originatorSessionRemoteNode": "postmaster@0mn.io/#iris-hosted-7",
                    "$elapsedTimeToStorage": "00:00:00.1778839"
                }
            },
            {
                "id": "6b6977e9-63ba-4232-98fb-0f2c94dcb918",
                "direction": "received",
                "type": "text/plain",
                "content": "Mensagem2 - Cliente",
                "date": "2022-10-13T20:26:15.474Z",
                "status": "consumed",
                "metadata": {
                    "#uniqueId": "c2f8943e-bae6-48b1-a7c2-94c7ded5569a",
                    "date_created": "1665692775213",
                    "uber-trace-id": "bd96db77e29f9c3a%3Abd96db77e29f9c3a%3A0%3A1",
                    "$internalId": "c2f8943e-bae6-48b1-a7c2-94c7ded5569a",
                    "$originatorSessionRemoteNode": "postmaster@0mn.io/#iris-hosted-7",
                    "$elapsedTimeToStorage": "00:00:00.2049725"
                }
            },
            {
                "id": "8057948b-3d2e-4771-8246-351971e51c86",
                "direction": "received",
                "type": "application/vnd.lime.media-link+json",
                "content": {
                    "type": "image/png",
                    "size": 48336,
                    "uri": "https://blipmediastore.blob.core.windows.net/secure-medias/Media_b34a1052-6707-439d-8b99-46052f27f895?sv=2019-07-07&st=2022-10-13T20%3A11%3A21Z&se=2022-10-13T20%3A41%3A21Z&sr=b&sp=r&sig=Qrfc6VQ3I2VgoKzfdZRmjk1nA1IIHO7e3zDXCo0UtkY%3D&secure=true",
                    "title": ""
                },
                "date": "2022-10-13T20:26:22.193Z",
                "status": "consumed",
                "metadata": {
                    "#uniqueId": "5ad460ea-86ef-4807-a4f8-6d8d7f934d0f",
                    "date_created": "1665692781960",
                    "uber-trace-id": "d7dccf26cdc38ba6%3Ad7dccf26cdc38ba6%3A0%3A1",
                    "$internalId": "5ad460ea-86ef-4807-a4f8-6d8d7f934d0f",
                    "$originatorSessionRemoteNode": "postmaster@0mn.io/#iris-hosted-7",
                    "$elapsedTimeToStorage": "00:00:00.1892651"
                }
            },
            {
                "id": "fwd:fwd:3c5bafe1-1509-4078-ab8a-ca7b1266f9e5",
                "direction": "sent",
                "type": "text/plain",
                "content": "Msg1 - Atendente",
                "date": "2022-10-13T20:26:33.405Z",
                "status": "consumed",
                "metadata": {
                    "#messageEmitter": "Human",
                    "uber-trace-id": "4accefaeb4c0dd7b%3A8d43f43bc7386ebc%3Aab80597e465c5c35%3A1",
                    "#uniqueId": "9e3fd0d3-1189-4b10-b9de-82654efdbd80",
                    "date_created": "1665692793127",
                    "$originator": "testebruno16@msging.net",
                    "$claims": "Node=testebruno16@msging.net/iris-hosted-3;Identity=testebruno16@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "9e3fd0d3-1189-4b10-b9de-82654efdbd80",
                    "$originatorSessionRemoteNode": "business.builder.hosting@msging.net/#iris-hosted-3",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.2460897"
                }
            },
            {
                "id": "fwd:fwd:4b757d0a-153d-45d2-ab02-073b1ab2552f",
                "direction": "sent",
                "type": "text/plain",
                "content": "Msg2 - Atendente",
                "date": "2022-10-13T20:26:37.210Z",
                "status": "consumed",
                "metadata": {
                    "#messageEmitter": "Human",
                    "uber-trace-id": "4ec945d7339d1d2e%3Ad5ecd86d86508205%3Ab6338029e952c11c%3A1",
                    "#uniqueId": "98a041f9-85e2-4add-ade1-0de20a723030",
                    "date_created": "1665692797038",
                    "$originator": "testebruno16@msging.net",
                    "$claims": "Node=testebruno16@msging.net/iris-hosted-3;Identity=testebruno16@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "98a041f9-85e2-4add-ade1-0de20a723030",
                    "$originatorSessionRemoteNode": "business.builder.hosting@msging.net/#iris-hosted-3",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.1415960"
                }
            },
            {
                "id": "fwd:fwd:12cce01a-b911-48ca-8dcc-8a698385a3fd",
                "direction": "sent",
                "type": "application/vnd.lime.media-link+json",
                "content": {
                    "type": "image/jpeg",
                    "size": 618940,
                    "uri": "https://blipmediastore.blob.core.windows.net/secure-medias/Media_906343cd-4ab2-4726-82f9-e762e9652055IMG_9636%20-%20Copia.jpg?sv=2019-07-07&st=2022-10-13T20%3A11%3A46Z&se=2022-10-13T20%3A41%3A46Z&sr=b&sp=r&sig=%2BpVi014%2FEoU6MXdjtvINaTkxhTFylhe77dzhDmCDPmo%3D&secure=true",
                    "previewUri": "https://blipmediastore.blob.core.windows.net/secure-medias/Media_906343cd-4ab2-4726-82f9-e762e9652055IMG_9636%20-%20Copia.jpg?sv=2019-07-07&st=2022-10-13T20%3A11%3A46Z&se=2022-10-13T20%3A41%3A46Z&sr=b&sp=r&sig=%2BpVi014%2FEoU6MXdjtvINaTkxhTFylhe77dzhDmCDPmo%3D&secure=true",
                    "previewType": "image/jpeg",
                    "title": "IMG_9636 - Copia.jpg",
                    "text": ""
                },
                "date": "2022-10-13T20:26:47.297Z",
                "status": "consumed",
                "metadata": {
                    "#messageEmitter": "Human",
                    "uber-trace-id": "373363f274697908%3Ad8e804cfb27fe8b8%3Aa60aecd7ddc0c134%3A1",
                    "#uniqueId": "8562858e-164a-4aec-b037-cd9b04454f2f",
                    "date_created": "1665692807110",
                    "$originator": "testebruno16@msging.net",
                    "$claims": "Node=testebruno16@msging.net/iris-hosted-3;Identity=testebruno16@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "8562858e-164a-4aec-b037-cd9b04454f2f",
                    "$originatorSessionRemoteNode": "business.builder.hosting@msging.net/#iris-hosted-3",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.1565965"
                }
            }
        ]
    },
    "method": "get",
    "status": "success",
    "id": "e8a54a24-5bd6-4553-82b6-a601de533c6a",
    "from": "postmaster@desk.msging.net/!iris-hosted-7",
    "to": "testebruno16@msging.net/!iris-hosted-7-p3vbjraq",
    "metadata": {
        "#command.uri": "lime://testebruno16@msging.net/tickets/e7115d7f-b9f1-4c86-9d54-0183d3062efd/messages?attendanceTranscriptionOnly=true",
        "uber-trace-id": "1796d1a07c97777f%3A1c2b9489bb00216e%3A1796d1a07c97777f%3A1"
    }
}

const history = exampleHistory.resource.items;


function handleHistory(history) {
    try {
        let auxHistory = '';
        history.forEach((item, index) => {
            if (index != 0) {
                auxHistory += `[${messageTime(item)}][${verifyOrigin(item)}] - ${verifyContent(item)}\n`
            }
        })
        console.log(auxHistory)
    } catch (error) {
        console.log(`Error on process history - ${error}`)
    }
};

const verifyOrigin = item => (item.direction === 'received') ? 'Cliente' : 'Atendente';
const verifyContent = item => (item.type === 'text/plain') ? item.content : `Tipo: ${item.content.type} | Link ${item.content.uri}`
const messageTime = item => timeoOfInteraction = new Date(item.date).toLocaleString('pt-BR');


handleHistory(history)

// Code adapted for the blip
/*
function run(responseHistory) {
    responseHistory = JSON.parse(responseHistory)
    return handleHistory(responseHistory.resource.items);
}

function handleHistory(history) {
    try {
        let auxHistory = '';
        history.forEach((item, index) => {
            if (index != 0) {
                auxHistory += `[${messageTime(item)}][${verifyOrigin(item)}] - ${verifyContent(item)}\n`
            }
        })
        return auxHistory;
    } catch (error) {
        return `Error on process history - ${error}`
    }

};

const verifyOrigin = item => (item.direction === 'received') ? 'Cliente' : 'Atendente';
const verifyContent = item => (item.type === 'text/plain') ? item.content : `Tipo: ${item.content.type} | Link ${item.content.uri}`
const messageTime = item => timeoOfInteraction = new Date(item.date).toLocaleString('pt-BR');
*/



