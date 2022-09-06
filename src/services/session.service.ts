 class SessionService<T> {

    static LoadSession<T>() {
        let t_rawsession = localStorage.getItem('session');
        
        if (t_rawsession) {
            return <T> JSON.parse(t_rawsession)
        } else {
            return null;
        }
    }
    
    static ResumeSession<T>() : Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                let t_session = <T> this.LoadSession<T>();
                if (t_session) {
                    resolve(<T>t_session);
                } else {
                    reject();
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    static NewSession<T>(type: (new () => T)) {
        return new type();
    }

    static DestroySession() {
        localStorage.clear();
    }

    static SaveSession<T>(sessiondata: T) {
        let t_rawsession = JSON.stringify(sessiondata);
        localStorage.setItem('session', t_rawsession);
    }
 }
 export default SessionService;