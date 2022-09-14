const HarishExpense = [
    { expense: "Food", cost: "$500" },
    { expense: "Clothing", cost: "$600" },
    { expense: "Apartment", cost: "$2000" },
    { expense: "Transport", cost: "$100" },
    { expense: "Internet", cost: "$230" },
    { expense: "Insurance", cost: "$330" },
  ];
  const sum = HarishExpense.reduce((total,item)=> {      
      var value = parseInt(item.cost.match(/\d+/g))
      total += value
      return total
      
  },0)

  document.getElementById("total").innerHTML="the output is $"+sum;
