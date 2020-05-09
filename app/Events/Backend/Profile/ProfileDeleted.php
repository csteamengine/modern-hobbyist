<?php

namespace App\Events\Backend\Profile;

use Illuminate\Queue\SerializesModels;

/**
 * Class ProfileDeleted.
 */
class ProfileDeleted
{
    use SerializesModels;

    /**
     * @var
     */
    public $profile;

    /**
     * @param $profile
     */
    public function __construct($profile)
    {
        $this->profile = $profile;
    }
}
