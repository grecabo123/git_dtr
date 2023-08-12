<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblGovernmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_government', function (Blueprint $table) {
            $table->id();
            $table->string('SSS')->nullable();
            $table->string('Pagibig')->nullable();
            $table->string('TIN')->nullable();
            $table->unsignedBigInteger('government_user_fk');
            $table->foreign('government_user_fk')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_government');
    }
}
