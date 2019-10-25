<?php

namespace App\Http\Requests\Backend\Job;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateJobRequest.
 */
class UpdateJobRequest extends FormRequest
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
        //TODO update the rules for this model
        return [
            'email' => ['required', 'email', 'max:191'],
            'first_name' => ['required', 'max:191'],
            'last_name' => ['required', 'max:191'],
            'roles' => ['required', 'array'],
        ];
    }
}
