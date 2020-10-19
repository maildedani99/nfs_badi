<?php

namespace App\Console\Commands;

use App\Reserve;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class FinishReserveCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'finishreserve:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $todayReserves = Reserve::where('status', 'EN_CURSO')->whereDate('departure', Carbon::today())->get();

        foreach ($todayReserves as $reserve) {
            $reserve->update([
                'status' => 'COMPLETADA',
            ]);
        }
    }
}
