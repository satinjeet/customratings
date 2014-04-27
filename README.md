Custom Rating Module for your web pages.
=============

Just a little plugin to add a custom rating system .. away with the stars and dropdowns and other old system :).

<h2><a href="http://satinjeet.github.io/ratings/">View Demo</a></h2>
<h2>Using Rating Plugin</h2>

It is really very simple. Just add the following to the code:

```
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="{path_to_js}/src/rating.min.js"></script>

<div class="ratings">
    <div class="inner">
    </div>
</div>
```

</pre>

and you can make it "Visible" So , by adding this

```
<script>
    $(".ratings").rating();
</script>
```

. and Done...

wanna make it horizontal ??
```
<script>
    $(".ratings").rating({
        direction: "h"
    });
</script>
```

and Done...

More Updates coming soon. Just a preview of idea i had in mind.


