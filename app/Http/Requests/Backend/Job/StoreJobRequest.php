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
        return [
            'title' => ['required', 'max:191'],
            'company' => ['required', 'max:191'],
            'company_url' => ['required', 'max:191'],
            'started_at' => ['required', 'date'],
            'finished_at' => ['required', 'date'],
        ];
    }
}
