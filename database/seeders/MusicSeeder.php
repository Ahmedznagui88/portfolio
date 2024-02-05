<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MusicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('music')->insert([
            'title' => 'Nadine',
            'artist' => 'MedZnag',
            'cover' => '/Users/tesla/Desktop/Aulab/myPortfolio/portfolio/public/img/red_ocean.avif',
            'duration' => '1.39',
            'file' => '/Users/tesla/Desktop/Aulab/myPortfolio/portfolio/public/media/Nadine.mp3',
        ]);
    }
}
