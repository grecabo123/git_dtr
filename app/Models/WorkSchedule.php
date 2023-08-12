<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkSchedule extends Model
{
    use HasFactory;

    protected $table ="tbl_workschedule";

    protected $fillable= [
        "start_shift",
        "end_shift",
        "hours_rendered",
    ];
}
