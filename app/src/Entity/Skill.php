<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      attributes={
 *          "access_control"="is_granted('ROLE_USER')",
 *          "normalization_context"={"groups"={"skill"}},
 *          "denormalization_context"={"groups"={"skill"}}
 *      }
 * )
 *
 * @ORM\Entity
 */
class Skill
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
     * @Groups({"skill"})
     *
     * @ORM\OneToMany(targetEntity="Skill", mappedBy="parent")
     */
    private $children;

    /**
     * @ORM\ManyToOne(targetEntity="Skill", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     */
    private $parent;

    /**
     * @Groups({"skill"})
     *
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @Groups({"skill"})
     *
     * @ORM\OneToMany(targetEntity="SkillLevel", mappedBy="skill", orphanRemoval=true)
     */
    private $levels;

    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->levels   = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): Skill
    {
        $this->id = $id;

        return $this;
    }

    public function getChildren(): Collection
    {
        return $this->children;
    }

    public function addChild(Skill $skill): Skill
    {
        $this->children->add($skill);

        $skill->setParent($this);

        return $this;
    }

    public function removeChild(Skill $skill): Skill
    {
        $this->children->removeElement($skill);

        $skill->setParent(null);

        return $this;
    }

    public function getParent(): ?Skill
    {
        return $this->parent;
    }

    public function setParent(?Skill $parent): Skill
    {
        $this->parent = $parent;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): Skill
    {
        $this->title = $title;

        return $this;
    }

    public function getLevels(): Collection
    {
        return $this->levels;
    }

    public function addLevel(SkillLevel $level): Skill
    {
        $this->levels->add($level);

        $level->setSkill($this);

        return $this;
    }

    public function removeLevel(SkillLevel $level): Skill
    {
        $this->levels->removeElement($level);

        return $this;
    }
}
