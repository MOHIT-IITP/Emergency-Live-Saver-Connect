// import dietPlan from "data.json";

function showDietPlan() {
  var gender = document.getElementById("gender").value;
  var ageGroup = document.getElementById("age-group").value;
  var option = document.getElementById("option").value;
  //var name = document.getElementById("name").value;
  var dietPlan = getDietPlan(gender, option, ageGroup);
  console.log(ageGroup);



  //  tips
  var dietPlanHtml = `<p class = "name-user">Diet Plan for (Week 1-4) </p> `;
  dietPlanHtml += `<hr class='hr-seperator'>`;
  dietPlanHtml += "<br>";
  dietPlanHtml += `<h2>Your Diet Plan for ${option}</h2>`;
  dietPlanHtml += "<br>";
  dietPlanHtml += "<p>Drink 3-4 liters of water daily. Eat slowly and savor your food.";
  dietPlanHtml += `<p class="veg-nonveg" > Both Veg and Non-Veg Options are available </p>`
  dietPlanHtml += "<br><br>";
  dietPlanHtml += '<div class="main-list">';
  dietPlanHtml += `<ul class="diet-list">`;
  dietPlanHtml += `<h3>Breakfast (7:00 AM)</h3>`;
  dietPlan.breakfast.forEach(function (item) {
    dietPlanHtml += "<li>" + item + "</li>";
  });
  dietPlanHtml += "</ul>";
  // Ending of second tips

  dietPlanHtml += "<br>";

  //  tips
  dietPlanHtml += `<ul class="diet-list">`;
  dietPlanHtml += "<h3>Mid-Morning Snack (10:00 AM)</h3>";
  dietPlan.snack.forEach(function (item) {
    dietPlanHtml += "<li>" + item + "</li>";
  });
  dietPlanHtml += "</ul>";
  // Ending of  tips
  dietPlanHtml += "<br>";

  //  tips
  dietPlanHtml += `<ul class="diet-list">`;
  dietPlanHtml += "<h3>Lunch (1:00 PM)</h3>";
  dietPlan.lunch.forEach(function (item) {
    dietPlanHtml += "<li>" + item + "</li>";
  });
  dietPlanHtml += "</ul>";
  // Ending of  tips
  dietPlanHtml += "<br>";

  //  tips
  dietPlanHtml += `<ul class="diet-list">`;
  dietPlanHtml += "<h3>Afternoon Snack (4:00 PM)</h3>";
  dietPlan.afternoonSnack.forEach(function (item) {
    dietPlanHtml += "<li>" + item + "</li>";
  });
  dietPlanHtml += "</ul>";
  // Ending of  tips
  dietPlanHtml += "<br>";

  //  tips
  dietPlanHtml += `<ul class="diet-list">`;
  dietPlanHtml += "<h3>Dinner (8:00 PM)</h3>";
  dietPlan.dinner.forEach(function (item) {
    dietPlanHtml += "<li>" + item + "</li>";
  });
  dietPlanHtml += "</ul>";
  dietPlanHtml +="</div>";
  // Ending of  tips

  document.getElementById("diet-plan").innerHTML = dietPlanHtml;
  document.getElementById("diet-plan").style.display = "block";
  document.getElementById("top-most").style.display = "block";
}

function getDietPlan(gender, option, ageGroup) {
  // You can replace this with fetching JSON data from a server
  var dietPlans = {
    male: {
      gainWeight: {
        "15-25": {
          breakfast: [
            "Option1 : 2 Masala Dosa with vegetable sambar and coconut chutney (or) 2 Moong Dal Cheela with paneer stuffing (or) 2 Vegetable Parathas with full-fat curd",
            "Option2 : 1 glass full-fat milk with a handful of nuts and seeds",
            "Option3 : Fruit smoothie with banana, yogurt, and milk",
          ],
          snack: [
            "Option1 : Fruits like banana, mango, or grapes",
            "Option2 : A handful of mixed nuts and seeds (almonds, walnuts, cashews)",
            "Option3 : Sprouted moong dal/ Bengal gram",
          ],
          lunch: [
            "Option1 : 2-3 Chapatis (whole wheat) with Dal Makhani (or) Rajma Masala (or) Chole (or) Chicken Curry",
            "Option2 : A bowl of brown rice, Vegetable Raita or Salad,1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Sandwich on whole wheat bread with vegetables",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Fish curry or Chicken curry with steamed vegetables",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
        "26-35": {
          breakfast: [
            "Option1 : 2 Vegetable Uttapam with coconut chutney (or) 3 Masala Poha with chopped vegetables (or) Oats porridge with nuts, seeds, and a drizzle of honey and milk",
            "Option2 : 1 glass full-fat milk with a banana",
            "Optional: Protein smoothie with banana, yogurt, and milk powder",
          ],
          snack: [
            "Option1 : seasonal fruits like mango, grapes, or dates",
            "Option2 : A handful of mixed nuts and seeds (almonds, walnuts, cashews)",
            "Option3 : Sprouted moong dal/ Bengal gram with chopped vegetables",
          ],
          lunch: [
            "Option1 : 3-4 Rotis (whole wheat) with Chicken Curry (or) Fish Fry with Masala (or) Mutton Keema (minced lamb)A bowl of brown rice or vegetable pulao",
            "Option2 : Raita or salad with chopped onions, tomatoes, cucumber, and coriander leaves",
            "1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Bhurji (scrambled cottage cheese) with chopped vegetables in a whole wheat wrap",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a scoop of protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Prawn Curry or Egg Curry with steamed vegetables",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
        "36-45": {
          breakfast: [
            "Option1 : 2-3 Scrambled eggs with chopped vegetables and whole wheat toast (or) Besan Cheela (gram flour pancake) with paneer stuffing (or) Sprouted Moong Dal Cheela with chopped spinach and tomatoes",
            "Option2 : 1 glass full-fat milk with a handful of mixed nuts and berries",
            "Optional: Protein smoothie with banana, yogurt, and spinach",
          ],
          snack: [
            "Option1 : Fruits like apple, pear, or papaya",
            "Option2 : Yogurt with chopped nuts and seeds (chia seeds, pumpkin seeds)",
            "Option3 : A handful of roasted makhana (foxnuts)",
          ],
          lunch: [
            "Option1 : 2-3 Rotis (whole wheat) with Chicken Curry (or) Fish Fry with masala (or) Dal Makhani with a side of grilled chicken breast ",
            "Option2 : A bowl of brown rice or quinoa",
            "Optional : Vegetable Raita or salad with a light drizzle of olive oil and lemon juice ",
            "1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Bhurji (scrambled cottage cheese) with chopped vegetables in a whole wheat wrap",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a scoop of protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Lentil soup with a side of grilled fish or chicken (or) Prawn Masala with steamed vegetables (or) Vegetable Pulao with paneer tikka masala",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
        "46-60": {
          breakfast: [
            "Option1 : 2-3 Scrambled eggs with chopped vegetables and whole wheat toast (or) Besan Cheela (gram flour pancake) with paneer stuffing (or) Sprouted Moong Dal Cheela with chopped spinach and tomatoes",
            "Option2 : 1 glass full-fat milk with a handful of mixed nuts and berries",
            "Optional: Protein smoothie with banana, yogurt, and spinach",
          ],
          snack: [
            "Option1 : Fruits like apple, pear, or papaya",
            "Option2 : Yogurt with chopped nuts and seeds (chia seeds, pumpkin seeds)",
            "Option3 : A handful of roasted makhana (foxnuts)",
          ],
          lunch: [
            "Option1 : 2-3 Rotis (whole wheat) with Chicken Curry (or) Fish Fry with masala (or) Dal Makhani with a side of grilled chicken breast ",
            "Option2 : A bowl of brown rice or quinoa",
            "Optional : Vegetable Raita or salad with a light drizzle of olive oil and lemon juice ",
            "1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Bhurji (scrambled cottage cheese) with chopped vegetables in a whole wheat wrap",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a scoop of protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Lentil soup with a side of grilled fish or chicken (or) Prawn Masala with steamed vegetables (or) Vegetable Pulao with paneer tikka masala",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
      },
      looseWeight: {
        "15-25": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option1 : Sprouts (1 cup) with chopped vegetables (tomato, onion, cucumber) and a glass of low-fat milk.",
            "Option2 : 2 whole wheat pancakes made with oats and banana, topped with berries.",
            "Option3 : Masala Omelet (2 eggs) with a slice of whole wheat toast.",
          ],
          snack: [
            "Option1 : Fruit (apple, pear, guava) with a handful of nuts (almonds, walnuts). ",
            "Option2 : Low-fat yogurt with chopped fruits and chia seeds.",
            "Option3 : Vegetable salad with a light dressing.",
          ],
          lunch: [
            "Option1 : Brown rice (1 cup) with Dal Makhani (lentil curry) and a side salad.",
            "Option2 : Multigrain roti (2) with Chicken stir-fry with vegetables",
            "Option1 :Vegetable Khichdi (mixed lentil and rice dish) with raita (yogurt-based dip).",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) or makhanas with a cup of green tea.",
            "Option2 : Sprouts salad with a sprinkle of lemon and pepper.",
            "Option3 : Roasted chickpeas (chana) with a dash of cumin powder",
          ],
          dinner: [
            "Option1 : Moong Dal Cheela (savory lentil crepes) with stir-fried vegetables",
            "Option2 : Baked fish (150gms) with roasted vegetables and brown rice.",
            "Option 3: Tofu curry with spinach and whole wheat roti (2)",
            "Before Bed Snack (Optional): Glass of warm milk with turmeric or a small bowl of fruits.Fruits to Include: Apple, pear, guava, papaya, orange, berries.",
          ],
        },
        "26-35": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option 1: Sprouts (1 cup) with chopped vegetables (tomato, onion, cucumber) and a glass of skimmed milk.",
            "Option2 : Oats porridge (1/2 cup) with chopped fruits (berries, apple) and a handful of nuts (almonds, walnuts).",
            "Optional: Masala Omelet (3 egg whites) with a slice of multigrain toast.",
          ],
          snack: [
            "Option1 : Fruit (apple, pear, guava) with a handful of mixed nuts (almonds, walnuts).",
            "Option2 : Low-fat yogurt with chopped fruits and a sprinkle of chia seeds. ",
            "Option3 : Vegetable salad with a light dressing (lemon, olive oil).",
          ],
          lunch: [
            "Option1 : Brown rice (1 cup) with Dal Makhani (lentil curry) and a side salad.",
            "Option2 : Chicken breast (150gms) grilled with roasted vegetables and brown rice roti (2).",
            "Option3 : Vegetable Khichdi (mixed lentil and rice dish) with raita (yogurt-based dip).",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) or roasted chickpeas (chana) with a cup of green tea.",
            "Option2 : Sprouts salad with a sprinkle of lemon and pepper.",
          ],
          dinner: [
            "Option1 : Moong Dal Cheela (savory lentil crepes) with stir-fried vegetables.",
            "Option2 : Baked fish (180gms) with steamed vegetables and brown rice.",
            "Option 3: Tofu curry with spinach and whole wheat roti (2).",
          ],
          note: [
            "Vegetables to Include: Spinach, broccoli, cauliflower, carrots, cucumber, tomatoes, onions.",
            "Whole Grains: Brown rice, oats, millet (jowar), whole wheat roti.",
            "Healthy Fats: Nuts, seeds, avocado (small portion).",
          ],
        },
        "36-45": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option 1: Scrambled eggs (2 whole eggs, 2 egg whites) with chopped vegetables and a slice of whole wheat toast.",
            "Option 2: Greek yogurt (200gm) with mixed berries, a sprinkle of granola, and a drizzle of honey.",
            "Option 3: Vegetable poha (flattened rice) with peanuts and a glass of low-fat milk.",
          ],
          snack: [
            "Option1 : A handful of mixed nuts and seeds (almonds, walnuts, pumpkin seeds).",
            "Option2 : Pear with a dollop of almond butter.",
            "Option3 : Vegetable sticks (carrot, cucumber, bell pepper) with homemade hummus.",
          ],
          lunch: [
            "Option 1: Salmon (150gms) baked with lemon and herbs, served with quinoa and roasted vegetables.",
            "Option 2: Rajma Masala (kidney bean curry) with brown rice roti (2) and a side salad.",
            "Option 3: Chicken stir-fry with mixed vegetables and brown rice.",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) with a sprinkle of black pepper and cumin powder.",
            "Option2 : Sprouts salad with chopped vegetables and a light lemon dressing.",
            "Option3 : Small bowl of sliced fruits (apple, papaya) with a sprinkle of chia seeds.",
          ],
          dinner: [
            "Option 1: Moong Dal Khichdi (split green lentil and rice dish) with a vegetable stir-fry.",
            "Option 2: Tofu Tikka Masala (marinated tofu in a creamy tomato gravy) with a slice of whole wheat bread and a side salad.",
            "Option 3: Baked fish (180gms) with steamed vegetables and brown rice.",
            "Before Bed Snack (Optional):A cup of chamomile tea or a small bowl of berries.",
          ],
        },
        "46-60": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option 1: Masala Oats (1/2 cup) with chopped fruits (berries) and a handful of nuts (almonds, walnuts).",
            "Option 2: Low-fat paneer bhurji (scrambled cottage cheese) with chopped vegetables and a slice of multigrain toast.",
            "Option 3: Poached eggs (2) on a bed of spinach with a whole wheat roti.",
          ],
          snack: [
            "Option1 : A handful of mixed fruits (apple, pear) with a sprinkle of chia seeds.",
            "Option2 : Low-fat yogurt with chopped vegetables (cucumber, tomato) and a sprinkle of herbs.",
            "Option3 : Vegetable soup (clear broth) with a small slice of whole wheat bread.",
          ],
          lunch: [
            "Option 1: Brown rice (1 cup) with Dal Fry (tempered lentil dish) and a side salad with light dressing.",
            "Option 2: Grilled fish (150gms) with roasted vegetables and a small portion of brown rice.",
            "Option 3: Vegetable Khichdi (mixed lentil and rice dish) with a dollop of low-fat curd and a side salad.",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) or roasted pumpkin seeds with a cup of green tea. ",
            "Option2 : Sprouts salad with a sprinkle of lemon and pepper",
            "Option3 : Small bowl of sliced cucumber with a sprinkle of black pepper and lime juice.",
          ],
          dinner: [
            "Option 1: Baked chicken breast (150gms) with stir-fried vegetables and a small portion of brown rice.",
            "Option 2: Moong Dal Cheela (savory lentil crepes) with a vegetable stir-fry (low oil).",
            "Option 3: Tofu curry with spinach and whole wheat roti (1). ",
            "Before Bed Snack (Optional):A cup of warm milk with turmeric or a small bowl of papaya slices.",
          ],
        },
      },
    },
    female: {
      gainWeight: {
        "15-25": {
          breakfast: [
            "Option1 : 2 Masala Dosa with vegetable sambar and coconut chutney (or) 2 Moong Dal Cheela with paneer stuffing (or) 2 Vegetable Parathas with full-fat curd",
            "Option2 : 1 glass full-fat milk with a handful of nuts and seeds",
            "Option3 : Fruit smoothie with banana, yogurt, and milk",
          ],
          snack: [
            "Option1 : Fruits like banana, mango, or grapes",
            "Option2 : A handful of mixed nuts and seeds (almonds, walnuts, cashews)",
            "Option3 : Sprouted moong dal/ Bengal gram",
          ],
          lunch: [
            "Option1 : 2-3 Chapatis (whole wheat) with Dal Makhani (or) Rajma Masala (or) Chole (or) Chicken Curry",
            "Option2 : A bowl of brown rice, Vegetable Raita or Salad,1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Sandwich on whole wheat bread with vegetables",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Fish curry or Chicken curry with steamed vegetables",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
        "26-35": {
          breakfast: [
            "Option1 : 2 Vegetable Uttapam with coconut chutney (or) 3 Masala Poha with chopped vegetables (or) Oats porridge with nuts, seeds, and a drizzle of honey and milk",
            "Option2 : 1 glass full-fat milk with a banana",
            "Optional: Protein smoothie with banana, yogurt, and milk powder",
          ],
          snack: [
            "Option1 : seasonal fruits like mango, grapes, or dates",
            "Option2 : A handful of mixed nuts and seeds (almonds, walnuts, cashews)",
            "Option3 : Sprouted moong dal/ Bengal gram with chopped vegetables",
          ],
          lunch: [
            "Option1 : 3-4 Rotis (whole wheat) with Chicken Curry (or) Fish Fry with Masala (or) Mutton Keema (minced lamb)A bowl of brown rice or vegetable pulao",
            "Option2 : Raita or salad with chopped onions, tomatoes, cucumber, and coriander leaves",
            "1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Bhurji (scrambled cottage cheese) with chopped vegetables in a whole wheat wrap",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a scoop of protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Prawn Curry or Egg Curry with steamed vegetables",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
        "36-45": {
          breakfast: [
            "Option1 : 2-3 Scrambled eggs with chopped vegetables and whole wheat toast (or) Besan Cheela (gram flour pancake) with paneer stuffing (or) Sprouted Moong Dal Cheela with chopped spinach and tomatoes",
            "Option2 : 1 glass full-fat milk with a handful of mixed nuts and berries",
            "Optional: Protein smoothie with banana, yogurt, and spinach",
          ],
          snack: [
            "Option1 : Fruits like apple, pear, or papaya",
            "Option2 : Yogurt with chopped nuts and seeds (chia seeds, pumpkin seeds)",
            "Option3 : A handful of roasted makhana (foxnuts)",
          ],
          lunch: [
            "Option1 : 2-3 Rotis (whole wheat) with Chicken Curry (or) Fish Fry with masala (or) Dal Makhani with a side of grilled chicken breast ",
            "Option2 : A bowl of brown rice or quinoa",
            "Optional : Vegetable Raita or salad with a light drizzle of olive oil and lemon juice ",
            "1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Bhurji (scrambled cottage cheese) with chopped vegetables in a whole wheat wrap",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a scoop of protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Lentil soup with a side of grilled fish or chicken (or) Prawn Masala with steamed vegetables (or) Vegetable Pulao with paneer tikka masala",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
        "46-60": {
          breakfast: [
            "Option1 : 2-3 Scrambled eggs with chopped vegetables and whole wheat toast (or) Besan Cheela (gram flour pancake) with paneer stuffing (or) Sprouted Moong Dal Cheela with chopped spinach and tomatoes",
            "Option2 : 1 glass full-fat milk with a handful of mixed nuts and berries",
            "Optional: Protein smoothie with banana, yogurt, and spinach",
          ],
          snack: [
            "Option1 : Fruits like apple, pear, or papaya",
            "Option2 : Yogurt with chopped nuts and seeds (chia seeds, pumpkin seeds)",
            "Option3 : A handful of roasted makhana (foxnuts)",
          ],
          lunch: [
            "Option1 : 2-3 Rotis (whole wheat) with Chicken Curry (or) Fish Fry with masala (or) Dal Makhani with a side of grilled chicken breast ",
            "Option2 : A bowl of brown rice or quinoa",
            "Optional : Vegetable Raita or salad with a light drizzle of olive oil and lemon juice ",
            "1 glass buttermilk",
          ],
          afternoonSnack: [
            "Option1 : Paneer Bhurji (scrambled cottage cheese) with chopped vegetables in a whole wheat wrap",
            "Option2 : Roasted makhana (foxnuts) with a sprinkle of salt and pepper",
            "Option3 : Milk with a scoop of protein powder (consult a doctor before starting protein supplements)",
          ],
          dinner: [
            "Option1 : Lentil soup with a side of grilled fish or chicken (or) Prawn Masala with steamed vegetables (or) Vegetable Pulao with paneer tikka masala",
            "Option2 : 2-3 Rotis or brown rice, Dal Tadka or vegetable soup, 1 glass full-fat milk",
            "Before Bed Snack (Optional):",
          ],
        },
      },
      looseWeight: {
        "15-25": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option1 : Sprouts (1 cup) with chopped vegetables (tomato, onion, cucumber) and a glass of low-fat milk.",
            "Option2 : 2 whole wheat pancakes made with oats and banana, topped with berries.",
            "Option3 : Masala Omelet (2 eggs) with a slice of whole wheat toast.",
          ],
          snack: [
            "Option1 : Fruit (apple, pear, guava) with a handful of nuts (almonds, walnuts). ",
            "Option2 : Low-fat yogurt with chopped fruits and chia seeds.",
            "Option3 : Vegetable salad with a light dressing.",
          ],
          lunch: [
            "Option1 : Brown rice (1 cup) with Dal Makhani (lentil curry) and a side salad.",
            "Option2 : Multigrain roti (2) with Chicken stir-fry with vegetables",
            "Option1 :Vegetable Khichdi (mixed lentil and rice dish) with raita (yogurt-based dip).",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) or makhanas with a cup of green tea.",
            "Option2 : Sprouts salad with a sprinkle of lemon and pepper.",
            "Option3 : Roasted chickpeas (chana) with a dash of cumin powder",
          ],
          dinner: [
            "Option1 : Moong Dal Cheela (savory lentil crepes) with stir-fried vegetables",
            "Option2 : Baked fish (150gms) with roasted vegetables and brown rice.",
            "Option 3: Tofu curry with spinach and whole wheat roti (2)",
            "Before Bed Snack (Optional): Glass of warm milk with turmeric or a small bowl of fruits.Fruits to Include: Apple, pear, guava, papaya, orange, berries.",
          ],
        },
        "26-35": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option 1: Sprouts (1 cup) with chopped vegetables (tomato, onion, cucumber) and a glass of skimmed milk.",
            "Option2 : Oats porridge (1/2 cup) with chopped fruits (berries, apple) and a handful of nuts (almonds, walnuts).",
            "Optional: Masala Omelet (3 egg whites) with a slice of multigrain toast.",
          ],
          snack: [
            "Option1 : Fruit (apple, pear, guava) with a handful of mixed nuts (almonds, walnuts).",
            "Option2 : Low-fat yogurt with chopped fruits and a sprinkle of chia seeds. ",
            "Option3 : Vegetable salad with a light dressing (lemon, olive oil).",
          ],
          lunch: [
            "Option1 : Brown rice (1 cup) with Dal Makhani (lentil curry) and a side salad.",
            "Option2 : Chicken breast (150gms) grilled with roasted vegetables and brown rice roti (2).",
            "Option3 : Vegetable Khichdi (mixed lentil and rice dish) with raita (yogurt-based dip).",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) or roasted chickpeas (chana) with a cup of green tea.",
            "Option2 : Sprouts salad with a sprinkle of lemon and pepper.",
          ],
          dinner: [
            "Option1 : Moong Dal Cheela (savory lentil crepes) with stir-fried vegetables.",
            "Option2 : Baked fish (180gms) with steamed vegetables and brown rice.",
            "Option 3: Tofu curry with spinach and whole wheat roti (2).",
          ],
          note: [
            "Vegetables to Include: Spinach, broccoli, cauliflower, carrots, cucumber, tomatoes, onions.",
            "Whole Grains: Brown rice, oats, millet (jowar), whole wheat roti.",
            "Healthy Fats: Nuts, seeds, avocado (small portion).",
          ],
        },

        "36-45": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option 1: Scrambled eggs (2 whole eggs, 2 egg whites) with chopped vegetables and a slice of whole wheat toast.",
            "Option 2: Greek yogurt (200gm) with mixed berries, a sprinkle of granola, and a drizzle of honey.",
            "Option 3: Vegetable poha (flattened rice) with peanuts and a glass of low-fat milk.",
          ],
          snack: [
            "Option1 : A handful of mixed nuts and seeds (almonds, walnuts, pumpkin seeds).",
            "Option2 : Pear with a dollop of almond butter.",
            "Option3 : Vegetable sticks (carrot, cucumber, bell pepper) with homemade hummus.",
          ],
          lunch: [
            "Option 1: Salmon (150gms) baked with lemon and herbs, served with quinoa and roasted vegetables.",
            "Option 2: Rajma Masala (kidney bean curry) with brown rice roti (2) and a side salad.",
            "Option 3: Chicken stir-fry with mixed vegetables and brown rice.",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) with a sprinkle of black pepper and cumin powder.",
            "Option2 : Sprouts salad with chopped vegetables and a light lemon dressing.",
            "Option3 : Small bowl of sliced fruits (apple, papaya) with a sprinkle of chia seeds.",
          ],
          dinner: [
            "Option 1: Moong Dal Khichdi (split green lentil and rice dish) with a vegetable stir-fry.",
            "Option 2: Tofu Tikka Masala (marinated tofu in a creamy tomato gravy) with a slice of whole wheat bread and a side salad.",
            "Option 3: Baked fish (180gms) with steamed vegetables and brown rice.",
            "Before Bed Snack (Optional):A cup of chamomile tea or a small bowl of berries.",
          ],
        },
        "46-60": {
          "General Tips": [
            "Drink 3-4 liters of water daily.",
            "Eat slowly and savor your food.",
            "Limit processed foods, sugary drinks, and unhealthy fats.",
            "Include physical activity alongside your diet for better results.",
          ],
          breakfast: [
            "Option 1: Masala Oats (1/2 cup) with chopped fruits (berries) and a handful of nuts (almonds, walnuts).",
            "Option 2: Low-fat paneer bhurji (scrambled cottage cheese) with chopped vegetables and a slice of multigrain toast.",
            "Option 3: Poached eggs (2) on a bed of spinach with a whole wheat roti.",
          ],
          snack: [
            "Option1 : A handful of mixed fruits (apple, pear) with a sprinkle of chia seeds.",
            "Option2 : Low-fat yogurt with chopped vegetables (cucumber, tomato) and a sprinkle of herbs.",
            "Option3 : Vegetable soup (clear broth) with a small slice of whole wheat bread.",
          ],
          lunch: [
            "Option 1: Brown rice (1 cup) with Dal Fry (tempered lentil dish) and a side salad with light dressing.",
            "Option 2: Grilled fish (150gms) with roasted vegetables and a small portion of brown rice.",
            "Option 3: Vegetable Khichdi (mixed lentil and rice dish) with a dollop of low-fat curd and a side salad.",
          ],
          afternoonSnack: [
            "Option1 : Roasted makhana (fox nuts) or roasted pumpkin seeds with a cup of green tea. ",
            "Option2 : Sprouts salad with a sprinkle of lemon and pepper",
            "Option3 : Small bowl of sliced cucumber with a sprinkle of black pepper and lime juice.",
          ],
          dinner: [
            "Option 1: Baked chicken breast (150gms) with stir-fried vegetables and a small portion of brown rice.",
            "Option 2: Moong Dal Cheela (savory lentil crepes) with a vegetable stir-fry (low oil).",
            "Option 3: Tofu curry with spinach and whole wheat roti (1). ",
            "Before Bed Snack (Optional):A cup of warm milk with turmeric or a small bowl of papaya slices.",
          ],
        },
      },
    },
  };
  console.log(dietPlans[gender][option]);
  return dietPlans[gender][option][ageGroup];
}
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}