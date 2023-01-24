import Sentry from '@sentry/browser';

Sentry.init({
    Vue,
    dsn: 'https://35deba0c02594e539a55c10ab0fe3719@o4504559479160832.ingest.sentry.io/4504559496724480'
});

export function captureError(error){
    Sentry.captureException(error)
}
