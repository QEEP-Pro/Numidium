<?php

namespace App\DBAL\Types;

use Fresh\DoctrineEnumBundle\DBAL\Types\AbstractEnumType;

final class TimelineItemStatus extends AbstractEnumType
{
    public const DONE = 'done';
    public const IN_PROGRESS = 'in_progress';
    public const PENDING = 'pending';

    protected static $choices = [
        self::DONE => 'Done',
        self::IN_PROGRESS => 'InProgress',
        self::PENDING => 'Pending',
    ];
}