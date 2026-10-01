import { SCENE_IDS } from '../../config/experience'
import { SceneDarkEnvironment } from './SceneDarkEnvironment'
import { SceneWeddingGate } from './SceneWeddingGate'
import { SceneGateActivation } from './SceneGateActivation'
import { SceneGateOpening } from './SceneGateOpening'
import { SceneThroughTheGate } from './SceneThroughTheGate'
import { SceneGlowingMandala } from './SceneGlowingMandala'
import { SceneWeddingMandap } from './SceneWeddingMandap'
import { SceneCoupleNames } from './SceneCoupleNames'
import { SceneWeddingRing } from './SceneWeddingRing'
import { SceneInvitation } from './SceneInvitation'
import { SceneInvitationOpen } from './SceneInvitationOpen'
import { SceneRsvp } from './SceneRsvp'

export const sceneComponents = {
  [SCENE_IDS.DARK_ENVIRONMENT]: SceneDarkEnvironment,
  [SCENE_IDS.WEDDING_GATE]: SceneWeddingGate,
  [SCENE_IDS.GATE_ACTIVATION]: SceneGateActivation,
  [SCENE_IDS.GATE_OPENING]: SceneGateOpening,
  [SCENE_IDS.THROUGH_THE_GATE]: SceneThroughTheGate,
  [SCENE_IDS.GLOWING_MANDALA]: SceneGlowingMandala,
  [SCENE_IDS.WEDDING_MANDAP]: SceneWeddingMandap,
  [SCENE_IDS.COUPLE_NAMES]: SceneCoupleNames,
  [SCENE_IDS.INVITATION]: SceneInvitation,
  [SCENE_IDS.WEDDING_RING]: SceneWeddingRing,
  [SCENE_IDS.INVITATION_OPEN]: SceneInvitationOpen,
  [SCENE_IDS.RSVP]: SceneRsvp,
}

export { SceneDarkEnvironment }
