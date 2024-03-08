import Skill from "#src/models/Skills";
import queryBuilder from "#src/utils/mongoQueryBuilder";

const exposeServices = {

    findOneSkill: async ({id:_id})=>{
        try {
            const   oneSki = await Skill.findOne({_id})
            return  oneSki
        } catch (error) {
            throw new Error(error)
        }
    },
    findAllSkills: async (query)=>{
        const {
            filter,
            projection,
            options
        } = queryBuilder.getFindOptions({query})
        
        try {
            const   allSki = await Skill.find(filter,projection,options)
            return  allSki
        } catch (error) {
            throw new Error(error)
        }
    },
    createSkill: async (rawData)=>{

        try {
            const   creaToSave  = new Skill(rawData)
            const   newSki      = creaToSave.save()   
            return  newSki
        } catch (error) {
            throw new Error(error)
        }
    },
    updateSkill: async ({id,body})=>{

        try {
            const   updatedSki  = await Skill.findOneAndUpdate(
                {_id:id},
                body,
                {new:true}
            ) 
            return  updatedSki
        } catch (error) {
            throw new Error(error)
        }
    },

}



export default exposeServices