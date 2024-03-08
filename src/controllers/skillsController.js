import skillsService from '#src/services/skillssService'


const exposeController = {

    allSkills:async (req,res)=>{
        const {query} = req
        const allSkills = await skillsService.findAllSkills(query)
        return res.json(allSkills)
    },
    oneSkill:async (req,res)=>{
        const {params:{id}} = req
        const oneSki = await skillsService.findOneSkill({id})
        if(!oneSki) return res.sendStatus(404)
        return res.json(oneSki)
    },
    createSkill:async (req,res)=>{
        const {body}  = req
        try {
                const newSki = await skillsService.createSkill(body)     
                return res.status(201).json(newSki)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
    },
    updateSkill:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toUpdate = await skillsService.updateSkill({id,body})     
                
                return res.json(toUpdate)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }
}

export default exposeController