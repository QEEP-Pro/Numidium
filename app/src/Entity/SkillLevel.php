<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/** @ORM\Entity */
class SkillLevel
{
    /**
     * @Groups({"skill"})
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Skill", inversedBy="levels")
     * @ORM\JoinColumn(name="skill_id", referencedColumnName="id")
     */
    private $skill;

    /**
     * @Groups({"skill"})
     *
     * @ORM\Column(type="integer")
     */
    private $position = 0;

    /**
     * @Groups({"skill"})
     *
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @Groups({"skill"})
     *
     * @ORM\Column(type="text")
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): SkillLevel
    {
        $this->id = $id;

        return $this;
    }

    public function getSkill(): Skill
    {
        return $this->skill;
    }

    public function setSkill(Skill $skill): SkillLevel
    {
        $this->skill = $skill;

        return $this;
    }

    public function getPosition(): int
    {
        return $this->position;
    }

    public function setPosition(int $position): SkillLevel
    {
        $this->position = $position;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): SkillLevel
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): SkillLevel
    {
        $this->description = $description;

        return $this;
    }
}