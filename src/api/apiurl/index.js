const transportApiBaseUrl = 'transport/api/v1';
const monitorBaseUrl = `monitor/api/v1`;
const authBaseUrl = 'auth/api/v1';

export const authApiUrl = {
    login: `${authBaseUrl}/token/`,
    loggedin_user: ({ userId }) => `${authBaseUrl}/users/${userId}/`,
}

export const dashboardApiUrl = {
    get_summary: `${monitorBaseUrl}/trips-stats/`
}

export const driverApiUrl = {
    get_risky_driver: `${transportApiBaseUrl}/drivers/`,
    get_drivers: `${transportApiBaseUrl}/drivers/`
}
export const tripApiUrl = {
    get_trips: `${monitorBaseUrl}/trips/`
}
export const usersApiUrl = {
    get_users: `${authBaseUrl}/users/`
}
export const vehicleApiUrl = {
    get_vehicles: `${transportApiBaseUrl}/vehicles/`
}

export const alertsApiUrl = {
    get_alerts: `${monitorBaseUrl}/alerts/`
}

export const geofenceApiUrl = {
    get_geofences: `${transportApiBaseUrl}/geofences/`,
    get_geofence_trips: `${monitorBaseUrl}/geofence-trips/`,
}

export const inspectionApiUrl = {
    get_inspections: `${transportApiBaseUrl}/vehicle-inspections/`,
}

export const deviceApiUrl = {
    get_devices: `${transportApiBaseUrl}/devices/`,
}

