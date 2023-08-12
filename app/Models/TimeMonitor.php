<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeMonitor extends Model
{
    use HasFactory;

    protected $table = "tbl__time_monitor";

    protected $fillable =[
        "TimeIN",
        "TimeOut",
        "hours_render",
        "minutes_render",
        "time_user_fk",
    ];
}
