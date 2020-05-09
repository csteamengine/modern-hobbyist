<?php

namespace App\Http\Requests\Backend\Profile;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreProfileRequest.
 */
class StoreProfileRequest extends FormRequest
{
    /**
     * Determine if the profile is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //TODO update required fields
        return [
            'title' => ['required', 'max:191'],
        ];
    }
}
