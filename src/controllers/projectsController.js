import projectsService from '#src/services/projectsService'

const exposeController = {
    allProjects:async (req,res)=>{
        const {query} = req
        const allProjects = await projectsService.findAllProjects(query)
        return res.json(allProjects)
    },
    oneProject:async (req,res)=>{
        const {params:{id}} = req
        const onePro = await projectsService.findOneProject({id})
        if(!onePro) return res.sendStatus(404)
        return res.json(onePro)
    },
    createProject:async (req,res)=>{
        const {body} = req
        try {
            const newPro = await projectsService.createProject(body)     
            return res.status(201).json(newPro)
        } catch (error) {
            return res.sendStatus(400)
        }
    },
    updateProject:async (req,res)=>{
        const {body} = req
        const {id} = req.params
        try {
            const toUpdate = await projectsService.updateProject({id,body})     
            return res.json(toUpdate)
        } catch (error) {
           return res.sendStatus(400)
        }
    },
    deleteProject:async (req,res)=>{
        const {body} = req
        const {id} = req.params
        try {
            const toDelete = await projectsService.deleteProject({id,body})         
            return res.json(toDelete)
        } catch (error) {
           return res.sendStatus(400)
        }
    }
}

export default exposeController