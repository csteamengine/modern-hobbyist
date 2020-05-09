<?php

namespace App\Http\Composers;

use App\Models\Profile;
use Illuminate\View\View;

/**
 * Class GlobalComposer.
 */
class GlobalComposer
{
    /**
     * Bind data to the view.
     *
     * @param View $view
     */
    public function compose(View $view)
    {
        $active_profile = Profile::where('is_active', true)->first();

        $view->with(['logged_in_user' => auth()->user(), 'active_profile' => $active_profile]);
    }
}
