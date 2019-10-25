<?php

namespace App\Http\Requests\Backend\Job;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreJobRequest.
 */
class StoreJobRequest extends FormRequest
{
    /**
     * Determine if the job is authorized to make this request.
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
            'email' => ['required', 'email', 'max:191', Rule::unique('jobs')],
            'password' => ['required', 'min:6', 'confirmed'],
            'roles' => ['required', 'array'],
        ];
    }
}
