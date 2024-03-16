const getServiceString = (serviceChooseState) => {
    const selectedServices = [];
    if (serviceChooseState.displaySelected === true) {
        selectedServices.push("Замена дисплея");
    }
    if (serviceChooseState.batterySelected ===true) {
        selectedServices.push("Замена аккумулятора");
    }
    if (serviceChooseState.diagnosticsSelected ===true) {
        selectedServices.push("Диагностика");
    }
    if (serviceChooseState.dataSelected ===true) {
        selectedServices.push("Перенос данных");
    }
    if (serviceChooseState.appInstallSelected ===true) {
        selectedServices.push("Установка приложений");
    }
    if (serviceChooseState.faceidSelected ===true) {
        selectedServices.push("Ремонт FaceID");
    }
    if (serviceChooseState.waterDiagSelected ===true) {
        selectedServices.push("Диагностика после попадания жидкости");
    }
    console.log(selectedServices);
    return selectedServices;
};

export default getServiceString;