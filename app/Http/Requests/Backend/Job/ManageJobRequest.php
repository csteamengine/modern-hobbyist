<?php

namespace App\Http\Requests\Backend\Job;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ManageJobRequest.
 */
class ManageJobRequest extends FormRequest
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
        return [
            //
        ];
    }
}
