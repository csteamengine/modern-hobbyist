<?php

namespace App\Http\Requests\Backend\Project;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreProjectRequest.
 */
class StoreProjectRequest extends FormRequest
{
    /**
     * Determine if the project is authorized to make this request.
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
        //TODO update the rules of the request
        return [
            'first_name' => ['required', 'max:191'],
            'last_name' => ['required', 'max:191'],
            'email' => ['required', 'email', 'max:191', Rule::unique('projects')],
            'password' => ['required', 'min:6', 'confirmed'],
            'roles' => ['required', 'array'],
        ];
    }
}
