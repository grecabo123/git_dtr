<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUser extends Model
{
    use HasFactory;

    protected $table = "tbl_contact";

    protected $fillable = [
        "current_adr",
        "perma_adr",
        "contact_number",
    ];
}
