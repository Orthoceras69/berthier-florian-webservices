import Project from "#src/models/Projects";
import queryBuilder from "#src/utils/mongoQueryBuilder";

const exposeServices = {

    findOneProject: async ({id:_id})=>{
        try {
            const   onePro = await Project.findOne({_id})
            return  onePro
        } catch (error) {
            throw new Error(error)
        }
    },
    findAllProjects: async (query)=>{
        const {
            filter,
            projection,
            options
        } = queryBuilder.getFindOptions({query})
        
        try {
            const   allPro = await Project.find(filter,projection,options)
            return  allPro
        } catch (error) {
            throw new Error(error)
        }
    },
    createProject: async (rawData)=>{

        try {
            const   creaToSave  = new Project(rawData)
            const   newPro      = creaToSave.save()   
            return  newPro
        } catch (error) {
            throw new Error(error)
        }
    },
    updateProject: async ({id,body})=>{

        try {
            const   updatedPro  = await Project.findOneAndUpdate(
                {_id:id},
                body,
                {new:true}
            ) 
            return  updatedPro
        } catch (error) {
            throw new Error(error)
        }
    },

}



export default exposeServices