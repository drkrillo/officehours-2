import { engine, type Entity } from '@dcl/sdk/ecs'
import { GameController } from './controllers/game.controller'
import './uis/ui.registry'
import { EntityNames } from '../assets/scene/entity-names'
export * from './controllers/ui.controller'

export type TeamHubOptions = {
  ignoreModels?: boolean
}
export class TeamHub {
  gameController = new GameController()
  constructor(options: TeamHubOptions = {}) {
    this.gameController.start(options)
  }
}

export function getTeamHubEntity(): Entity {
  const entity = engine.getEntityOrNullByName(EntityNames.teamhub)

  if (entity == null) {
    throw new Error('[getTeamHubEntity] EntityNames.teamhub not found')
  }

  return entity
}
