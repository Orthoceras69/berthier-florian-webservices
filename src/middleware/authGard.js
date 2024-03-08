import {verifyJwt}    from '#src/utils/jwtoken'


const exposeMiddleware = {

    protect:async (req,res,next)=>{
        const accessToken  = req.headers['authorization'];

        if (!accessToken) {
            return res.status(401).send('Unauthorized');
        }
        if(accessToken.startsWith('Bearer ')) {
            // Remove Bearer from string
            const cleanAccess = accessToken.slice(7, accessToken.length);
            try {
                const verify = verifyJwt(cleanAccess)
                return next()
            } catch (error) {
                console.log(error.message)
                return res.status(401).send('Unauthorized')
            }
        }
        return res.sendStatus(400)
        
    },

    adminProtect:async (req,res,next)=>{
        const accessToken  = req.headers['authorization'];

        if (!accessToken) {
            return res.status(401).send('Unauthorized');
        }
        if(accessToken.startsWith('Bearer ')) {
            // Remove Bearer from string
            const cleanAccess = accessToken.slice(7, accessToken.length);
            try {
                const user = verifyJwt(cleanAccess);
                // Vérifier le rôle de l'utilisateur
                if (user.role !== 1) {
                    return res.status(403).send('Forbidden');
                }
                // Si l'utilisateur a le rôle "admin", passer à l'étape suivante
                return next();
            } catch (error) {
                console.log(error.message);
                return res.status(401).send('Unauthorized');
            }
        }
        return res.sendStatus(400)
        
    }
}

export default exposeMiddleware