<?php

 $image_link_array = get_field('image_link_array');
 $contentTop = get_field('content_top');
 $items = $image_link_array['items'];
 $contentArray = [];
 $itemsCount = count($items);
 $rows = ceil($itemsCount/3);
 $lr = $itemsCount%3;
 $lrc = $lr;
 $cell = 0;

?>

<div class="image-link-array <?php if($contentTop): ?> content-top<?php endif; ?>">
    <div class="container">
        <?php foreach($image_link_array['items'] as $item){ 

            $content = '<div class="item-wrapper"><a href="' . $item['link']['url'] . '"" target="' . $item['link']['target'] . '"><img src="' . $item['image']['url'] . '" alt="' . $item['alt_text'] . '"/></a></div>';

            array_push($contentArray, $content);
                
        } ?>


        <?php 

        while ($itemsCount > 0) {        // while still have items
                $cell = 0;
                $x = 0;
                if ($rows > 1) {        // if not last row...
                    echo '<div class="row">'.PHP_EOL;
                    while ($cell < 3) {     // iterate with 3x4 cols
                        echo '<div class="col-md-4">' . $contentArray[$x] . '</div>'.PHP_EOL;
                        $cell++;
                        $x++;
                    }
                    echo "</div>".PHP_EOL;
                $rows--;        // end a row
                } elseif ($rows == 1 && $lr > 0) {      // if last row and still has items
                    echo '<div class="row">'.PHP_EOL;
                    while ($lrc > 0) {      // iterate over qnt of remaining items
                        $lr == 2 ?      // is it two?
                            print('<div class="col-md-6">' . $contentArray[$x] . '</div>'.PHP_EOL) :  // makes 2x6 row
                            print('<div class="col-md-12">' . $contentArray[$x] . '</div>'.PHP_EOL); // makes 1x12 row
                        $lrc--;
                        $x++;
                        
                    } 
                    echo "</div>".PHP_EOL;
                    break;
                } else {        // if round qnt of items (exact multiple of 3)
                    echo '<div class="row">'.PHP_EOL;
                    while ($cell < 3) {     // iterate as usual
                        echo '<div class="col-md-4">' . $contentArray[$x] . '</div>'.PHP_EOL;
                        $cell++;
                        $x++;
                    }
                    echo "</div>".PHP_EOL;
                    break;
                }
                $items--;       // decrement items until it's over or it breaks
            }

        ?>

    </div>
</div>