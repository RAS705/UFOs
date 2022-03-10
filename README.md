# UFOs

## Introduction

Dana's goal is to create an interactive webpage that allows readers to parse the data around UFO sightings. So, she essentially needs to build two things: the webpage that will allow users to view the data (HTML) and a dynamic table that will present it (JavaScript).

Dana wants to storyboard her website to have an idea of what her readers will see when they view the final product. 

<img src="static\images\storyboard-of-the-website.png">

The storyboard that Dana puts together is incredibly useful in determining the layout of the webpage she wants to build. It's important to complete this step early in order to save time later. It's like building a house. You need to know how it's all going to fit together before you start building!

Once the template has been created, Dana can begin to figure out how to include the data and dynamic table for data analysis.

## HTML Layout

Dana starts by laying out her webpage in the format she designed in the storyboard.

The first component Dana adds to the webpage is the title. She decides to make the a Jumbotron from bootstrap.



	<div class="jumbotron">
	   <h1>The Truth Is Out There</h1>
	</div>



The next section she builds is the section just below the title, which has two parts:
<ul>
<li>The first a title, UFO Sightings</li>
<li>The second, a paragraph of information about UFOs</li>
</ul>


	<div class="container-fluid">
		<div class="row">
		<div class="col-md-4">
			<h3>UFO Sightings: Fact of Fancy?</h3>
			<small>Ufologists Weigh In</small>
		</div>
		<div class="col-md-8">
		</div>
		</div>
	</div>

The last thing Dana builds in her webpage is the spot for the dynamic table.

	<div class="col-md-9">
		<table class="table table-striped">
		<thead>
			<tr>
				<th></th>
			</tr>
		</thead>
		<tbody></tbody>
		</table>
	</div>

## Adding the data

Dana got a sample of UFO sightings to include in the table of her webpage.

The data is in the format of a list:

<pre>
var data = [
  {
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  }, 
</pre>

Each entry will make up a row of the dynamic table that Dana wants to include on the webpage.

The last piece Dana needs to build her table is to include some javascript to read the data and dynamically build the rows of the table.

<pre>
function buildTable(data) {
// First, clear out any existing data
tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
    );
    });
}
</pre>

With this in place Dana could look at her webpage

<img src="static\images\table-with-ufo-sightings-data.png">

Dana loves the webpage, it functions the way she wants, but it doesn't have the final look she wants.

Dana wants to customize her page by adding specific CSS components to the stylesheet, such as applying a background color to the page and adding an image to the jumbotron. Although it's neat and tidy in its current form, it's not very attention-grabbing.

These last few steps are all she needs to wrap up her research and publish it, so she's looking forward to adding that last bit of professional polish.

By adding a few entries to the stylesheet and the HTML Dana was able to produce a working UFO webpage which looks exactly like she wants.

<img src="static\images\ufo-website.png">
