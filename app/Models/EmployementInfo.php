<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployementInfo extends Model
{
    use HasFactory;

    protected $table = "tbl_employee_info";

    protected $fillable = [
        "department",
        "position",
        "Monthly",
        "date_hired",
        "date_resigned",
    ];
}
