<?php

namespace App\Console\Commands;

use App\Reserve;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class StartReserveCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'startreserve:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ask all the reserves and change the satus to "en curso" for the ones that start the reserve that day';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $todayReserves = Reserve::where('status', 'ACEPTADA')->whereDate('arrival', Carbon::today())->get();

        foreach ($todayReserves as $reserve) {
            $reserve->update([
                'status' => 'EN_CURSO',
            ]);
        }
    }

}
