<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblEmployeeInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_employee_info', function (Blueprint $table) {
            $table->id();
            $table->string('department');
            $table->string('position');
            $table->double('Monthly',10,2);
            $table->tinyInteger('status')->default(0);
            $table->string('date_hired');
            $table->string('date_resigned');
            $table->unsignedBigInteger('employee_info_fk');
            $table->foreign('employee_info_fk')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('tbl_employee_info');
    }
}
