<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SitesNames extends Model
{
    use HasFactory;

    protected $table = "sites";
    protected $fillable = [
        'site_name',
    ];
}
