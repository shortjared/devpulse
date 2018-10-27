import { get } from '@serverless/utils'


const DEPLOY = 'deploy'
const REPLACE = 'replace'

const FaunaDB = (SuperClass) =>
    class extends SuperClass {
        async construct(inputs, context) {
            await super.construct(inputs, context)
        }

        shouldDeploy(prevInstance) {
            if (!prevInstance) {
                return DEPLOY
            }
        }

        async deploy(prevInstance, context) {
            
        }
    }

export default FaunaDB
