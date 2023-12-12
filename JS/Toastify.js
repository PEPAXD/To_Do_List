
// Toastify.js
export function showErrorToast(message) {
    Toastify({
        className: "my-toast",
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "#FF5233",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
        },
        onClick: function(){}
    }).showToast();
}

