export const constants ={
    MAILJS_SERVICE_ID: "YOUR_MAILJS_SERVICE_ID",
    MAILJS_TEMPLATE_ID: "YOUR_MAILJS_TEMPLATE_ID",
    MAILJS_PUBLIC_KEY: "YOUR_MAILJS_PUBLLIC_KEY",
    ADMIN_PASSWORD: "YOUR_ADMIN_PASSWORD"
}

export function createurl(path){
    return 'http://localhost:9999/api' + path;
}

export function log(message){
    console.log(message);
}