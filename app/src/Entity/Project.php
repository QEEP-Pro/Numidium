<?php

namespace App\Entity;


use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      attributes={
 *          "access_control"="is_granted('ROLE_USER')",
 *          "normalization_context"={"groups"={"owner"}},
 *          "denormalization_context"={"groups"={"owner"}}
 *      }
 * )
 *
 * @ORM\Entity
 */
class Project
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     * @Groups({"owner"})
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     *
     * @Groups({"owner"})
     */
    private $title;

    /**
     * @ORM\OneToMany(
     *     targetEntity="TimelineItem",
     *     mappedBy="project",
     *     cascade={"persist", "remove"},
     *     orphanRemoval=true
     * )
     *
     * @Groups({"owner"})
     */
    private $timelineItems;

    public function __construct()
    {
    }

    public function getTimelineItems(): Collection
    {
        return $this->timelineItems;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): Project
    {
        $this->title = $title;

        return $this;
    }

}