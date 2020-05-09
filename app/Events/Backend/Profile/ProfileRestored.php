<?php

namespace App\Events\Backend\Profile;

use Illuminate\Queue\SerializesModels;

/**
 * Class ProfileRestored.
 */
class ProfileRestored
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
