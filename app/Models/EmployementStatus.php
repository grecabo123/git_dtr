<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployementStatus extends Model
{
    use HasFactory;
    protected $table = "employment_statuses";

    protected $fillable = [
        "employment_status_name",
        "isRegular",
    ];
}
