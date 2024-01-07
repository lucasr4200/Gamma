export default async function casePatcher(caseId, action) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        caseId: caseId.toString(),
        action: action,
    });

    var requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    const response = await fetch(
        "http://174.3.244.48:8000/api/cases",

        requestOptions,
    );
    const resData = await response.text();

    return resData;
}
