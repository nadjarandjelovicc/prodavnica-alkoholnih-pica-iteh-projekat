<?php

namespace Database\Seeders;

use App\Models\Korpa;
use App\Models\Pice;
use App\Models\User;
use App\Models\Vrsta;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Vrsta::truncate();
        Korpa::truncate();
        Pice::truncate();


        $admin = new User();
        $admin->name="Admin";
        $admin->email="admin@gmail.com";
        $admin->password= Hash::make("admin");
        $admin->admin = 1;
        $admin->save();
        User::factory(10)->create();

        $vs = new VrstaSeeder(); 
        $vs->run();

        $ps = new PiceSeeder();
        $ps->run();
    }
}
