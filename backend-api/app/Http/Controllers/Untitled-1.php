// ProductController.php
<?php
namespace App\Http\Controllers;
use App\Category;
use App\Product;
use Illuminate\Http\Request;
class ProductController extends Controller
{
    public function create(Request $request)
    {
        $product = new Product;
        $product->name = 'God of War';
        $product->price = 40;
        $product->save();
        for
        $feature = Feature::find([3, 4]);
        $product->categories()->attach($feature);
    }
}