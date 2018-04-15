<?php

namespace App\Doctrine;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use App\Entity\Skill;
use Doctrine\ORM\QueryBuilder;

class FirstLevelSkillExtension implements QueryCollectionExtensionInterface
{
    // Hide all, except First-Level (parent === null)
    public function applyToCollection(
        QueryBuilder $queryBuilder,
        QueryNameGeneratorInterface $queryNameGenerator,
        string $resourceClass,
        string $operationName = null
    ) {
        $this->addWhere($queryBuilder, $resourceClass);
    }

    private function addWhere(QueryBuilder $qb, string $resourceClass)
    {
        if (Skill::class === $resourceClass) {
            $alias = $qb->getRootAliases()[0];

            $qb->andWhere(sprintf('%s.parent IS NULL', $alias));
        }
    }
}
