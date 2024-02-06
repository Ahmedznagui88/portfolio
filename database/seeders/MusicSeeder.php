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
                'title' => 'Gaza',
                'artist' => 'MedZnag',
                'cover' => '/img/red_ocean.avif',
                'duration' => '1:39',
                'file' => '/media/Nadine.mp3',
            ],
            
            [
                'title' => 'Res',
                'artist' => 'MedZnag',
                'cover' => '/img/reggio.JPG',
                'duration' => '1:57',
                'file' => '/media/Parigi.mp3',
            ],

            [

                'title' => 'Silence',
                'artist' => 'MedZnag',
                'cover' => '/img/silence.jpeg',
                'duration' => '1:39',
                'file' => '/media/Yez 1.mp3',
            ],

            [
                'title' => 'Free',
                'artist' => 'MedZnag',
                'cover' => '/img/insomnia.jpeg',
                'duration' => '1:17',
                'file' => '/media/Almeida.mp3',
            ],

            [
                'title' => 'Berlin',
                'artist' => 'MedZnag',
                'cover' => '/img/berlin.jpeg',
                'duration' => '2:17',
                'file' => '/media/My neck.mp3',
            ],
        ];
    
        DB::table('music')->insert($data);
    }
}
