<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblTimeMonitorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl__time_monitor', function (Blueprint $table) {
            $table->id();
            $table->dateTime('TimeIn')->useCurrent();
            $table->dateTime('TimeOut')->useCurrent();
            $table->tinyInteger('isBreak')->default(0);
            $table->tinyInteger('isLeave')->default(0);
            $table->tinyInteger('isAbsent')->default(0);
            $table->bigInteger('hours_render');
            $table->bigInteger('minutes_render');
            $table->unsignedBigInteger('time_user_fk');
            $table->foreign('time_user_fk')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('tbl__time_monitor');
    }
}
