<?php

 $events = get_field('event_list')['events'];
 $eventCount = count($events);
 $ec = 1;
?>

<div class="container">
	<ul class="events-list">

		<?php foreach($events as $event): 
			$date_time = $event['date_time'];
			$event_name = $event['event_name'];
			$link = $event['link'];
		?>
			<li class="event">
				<?php if($link):?>
				   <a href="<?php echo $link['url']?>" target="<?php echo $link['target']?>">
				<?php endif; ?>

					<div class="event-info">
						<?php echo $date_time . ' | ' . $event_name; ?>
					</div>

				<?php if($link):?>
				  </a>
				<?php endif; ?>
			</li>
			<?php if($ec < $eventCount):?>
				<hr/>
			<?php endif; ?>
			<?php $ec++; ?>
		<?php endforeach;?>

	</ul>

	

</div>