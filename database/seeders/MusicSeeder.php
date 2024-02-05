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
        /* $title = [
            'Nadine',
        ];

        $artist = [
            'MedZnag',
        ];

        $cover = [
            '/public/img/red_ocean.avif'
        ];

        $duration = [
            '1.39',
        ];

        $file = [
            '/public/media/Nadine.mp3'
        ];

        DB::table('music')->insert([
            'title' => $title,
            'artist' => $artist ,
            'cover' => $cover ,
            'duration' => $duration ,
            'file' => $file,
        ]); */

        $data = [
            [
                'title' => 'Nadine',
                'artist' => 'MedZnag',
                'cover' => '/img/red_ocean.avif',
                'duration' => '1:39',
                'file' => '/media/Nadine.mp3',
            ],
            
            [
                'title' => 'Parigi',
                'artist' => 'MedZnag',
                'cover' => '/img/reggio.JPG',
                'duration' => '1:57',
                'file' => '/media/Parigi.mp3',
            ]
        ];
    
        DB::table('music')->insert($data);
    }
}
