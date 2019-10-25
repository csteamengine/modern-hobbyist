<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use SoftDeletes;

    public function delete() {
//        TODO add all related tables to be deleted as well
        parent::delete();
    }
}
