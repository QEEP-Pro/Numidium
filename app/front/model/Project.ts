import {TimelineItem} from '../components/projects/widgets/Timeline'

import Entity from './Entity'

interface Project extends Entity {
    title: string,
    timelineItems: TimelineItem[]
}

export default Project
