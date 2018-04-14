<?php

namespace App\Entity;


use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Fresh\DoctrineEnumBundle\Validator\Constraints as DoctrineAssert;

/**
 * @ApiResource(
 *      attributes={
 *          "access_control"="is_granted('ROLE_USER')"
 *      }
 * )
 *
 * @ORM\Entity
 */
class TimelineItem
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
     * @ORM\Column(type="date")
     *
     * @Groups({"owner"})
     */
    private $date;

    /**
     * @ORM\Column(type="TimelineItemStatus")
     * @DoctrineAssert\Enum(entity="App\DBAL\Types\TimelineItemStatus")
     *
     * @Groups({"owner"})
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="Project", inversedBy="timelineItems")
     * @ORM\JoinColumn(name="project_id", referencedColumnName="id")
     *
     * @Groups({"owner"})
     */
    private $project;

    public function __construct()
    {
        $this->date = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): TimelineItem
    {
        $this->title = $title;

        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): TimelineItem
    {
        $this->status = $status;

        return $this;
    }

    public function getDate(): \DateTime
    {
        return $this->date;
    }

    public function setEnd(\DateTime $date): TimelineItem
    {
        $this->date = $date;

        return $this;
    }
}