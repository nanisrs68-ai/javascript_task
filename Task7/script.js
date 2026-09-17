 
// Use this API:
// https://fakestoreapi.com/products
// Requirements:
// Fetch all products.
// Convert response using .json().
// Display:
// Product title
// Price
// Category
// Use map() to create a new array containing only:
// title
// price
// Use filter() to find products with price greater than $100.
// Use find() to find the first product in the "electronics" category.
// Use reduce() to calculate the total price.
// Use sort() to arrange products from highest price to lowest.
// Handle API errors using .catch().
// Display a completion message using .finally().
 
// fetch("https://fakestoreapi.com/products")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Failed to fetch products");
//         }
 
//         return response.json();
//     })
//     .then(products => {
 
//         // 1. Display all products
//         console.log("----- ALL PRODUCTS -----");
 
//         products.forEach(product => {
//             console.log("Title:", product.title);
//             console.log("Price: $", product.price);
//             console.log("Category:", product.category);
//             console.log("-------------------------");
//         });
 
 
//         // 2. map() - Create a new array with only title and price
//         const productDetails = products.map(product => ({
//             title: product.title,
//             price: product.price
//         }));
 
//         console.log("----- TITLE & PRICE -----");
//         console.log(productDetails);
 
 
//         // 3. filter() - Products with price greater than $100
//         const expensiveProducts = products.filter(product => {
//             return product.price > 100;
//         });
 
//         console.log("----- PRODUCTS ABOVE $100 -----");
//         console.log(expensiveProducts);
 
 
//         // 4. find() - First product in electronics category
//         const electronicsProduct = products.find(product => {
//             return product.category === "electronics";
//         });
 
//         console.log("----- FIRST ELECTRONICS PRODUCT -----");
//         console.log(electronicsProduct);
 
 
//         // 5. reduce() - Calculate total price
//         const totalPrice = products.reduce((total, product) => {
//             return total + product.price;
//         }, 0);
 
//         console.log("----- TOTAL PRICE -----");
//         console.log("$", totalPrice.toFixed(2));
 
 
//         // 6. sort() - Highest price to lowest price
//         const sortedProducts = [...products].sort((a, b) => {
//             return b.price - a.price;
//         });
 
//         console.log("----- HIGHEST TO LOWEST PRICE -----");
//         console.log(sortedProducts);
 
//     })
//     .catch(error => {
//         console.error("API Error:", error.message);
//     })
//     .finally(() => {
//         console.log("Product processing completed.");
//     });
 
 
 
 
 
 
 
 
 
 
 
// Task 2 — Product Category Dashboard
// Use:
// https://fakestoreapi.com/products
// Create a console-based dashboard.
// Expected output:
// ===== PRODUCT DASHBOARD =====
 
// Total Products: 20
 
// Electronics: 6
// Jewelery: 4
// Men's Clothing: 6
// Women's Clothing: 4
 
// Highest Price: $999.99
// Lowest Price: $5.99
// Average Price: $XXX
// Students must use:
// fetch()
// map()
// filter()
// reduce()
// sort()
// Functions
// Template literals
 
 
 
 
 
// fetch("https://fakestoreapi.com/products")
 
//     .then(response => response.json())
 
//     .then(products => {
 
//         // =========================
//         // FUNCTIONS
//         // =========================
 
//         // Get category count
//         function getCategoryCount(category) {
//             return products.filter(product => {
//                 return product.category === category;
//             }).length;
//         }
 
 
//         // Get highest price
//         function getHighestPrice() {
 
//             const sortedProducts = [...products].sort((a, b) => {
//                 return b.price - a.price;
//             });
 
//             return sortedProducts[0].price;
//         }
 
 
//         // Get lowest price
//         function getLowestPrice() {
 
//             const sortedProducts = [...products].sort((a, b) => {
//                 return a.price - b.price;
//             });
 
//             return sortedProducts[0].price;
//         }
 
 
//         // Calculate average price
//         function getAveragePrice() {
 
//             const total = products.reduce((sum, product) => {
//                 return sum + product.price;
//             }, 0);
 
//             return total / products.length;
//         }
 
 
//         // =========================
//         // MAP
//         // =========================
 
//         // Create a new array containing product prices
//         const prices = products.map(product => product.price);
 
//         console.log("Product Prices:", prices);
 
 
//         // =========================
//         // CATEGORY COUNTS
//         // =========================
 
//         const electronicsCount = getCategoryCount("electronics");
 
//         const jeweleryCount = getCategoryCount("jewelery");
 
//         const mensClothingCount = getCategoryCount("men's clothing");
 
//         const womensClothingCount = getCategoryCount("women's clothing");
 
 
//         // =========================
//         // FINAL VALUES
//         // =========================
 
//         const totalProducts = products.length;
 
//         const highestPrice = getHighestPrice();
 
//         const lowestPrice = getLowestPrice();
 
//         const averagePrice = getAveragePrice();
 
 
//         // =========================
//         // DASHBOARD
//         // =========================
 
//         console.log(`
// ===== PRODUCT DASHBOARD =====
 
// Total Products: ${totalProducts}
 
// Electronics: ${electronicsCount}
// Jewelery: ${jeweleryCount}
// Men's Clothing: ${mensClothingCount}
// Women's Clothing: ${womensClothingCount}
 
// Highest Price: $${highestPrice.toFixed(2)}
// Lowest Price: $${lowestPrice.toFixed(2)}
// Average Price: $${averagePrice.toFixed(2)}
// `);
//     })
 
//     .catch(error => {
//         console.log("Error:", error.message);
//     });
 
 
 
 
 
 
 
 
 
// Task 3 — User & Post API
// Use these APIs:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// Requirements:
// Fetch users.
// Display all user names.
// Display user name + email.
// Find the user with ID 5.
// Filter users from a particular city.
// Fetch posts.
// Display posts written by user ID 1.
// Count how many posts user ID 1 has created.
// Find the first post with more than 50 characters in the title.
 
 
 
 
 
// const usersAPI = "https://jsonplaceholder.typicode.com/users";
// const postsAPI = "https://jsonplaceholder.typicode.com/posts";
 
 
// Promise.all([
//     fetch(usersAPI),
//     fetch(postsAPI)
// ])
 
// .then(async ([usersResponse, postsResponse]) => {
 
//     // Check API responses
//     if (!usersResponse.ok || !postsResponse.ok) {
//         throw new Error("Failed to fetch API data");
//     }
 
//     // Convert responses to JSON
//     const users = await usersResponse.json();
//     const posts = await postsResponse.json();
 
 
//     // ==================================
//     // 1. Display all user names
//     // ==================================
 
//     console.log("===== ALL USER NAMES =====");
 
//     users.forEach(user => {
//         console.log(user.name);
//     });
 
 
//     // ==================================
//     // 2. Display user name + email
//     // ==================================
 
//     console.log("\n===== USER NAME + EMAIL =====");
 
//     users.forEach(user => {
//         console.log(`Name: ${user.name} | Email: ${user.email}`);
//     });
 
 
//     // ==================================
//     // 3. Find user with ID 5
//     // ==================================
 
//     const user5 = users.find(user => {
//         return user.id === 5;
//     });
 
//     console.log("\n===== USER ID 5 =====");
//     console.log(user5);
 
 
//     // ==================================
//     // 4. Filter users from a particular city
//     // ==================================
 
//     const city = "South Christy";
 
//     const cityUsers = users.filter(user => {
//         return user.address.city === city;
//     });
 
//     console.log(`\n===== USERS FROM ${city} =====`);
//     console.log(cityUsers);
 
 
//     // ==================================
//     // 5. Display posts
//     // ==================================
 
//     console.log("\n===== ALL POSTS =====");
 
//     posts.forEach(post => {
//         console.log(post);
//     });
 
 
//     // ==================================
//     // 6. Display posts written by user ID 1
//     // ==================================
 
//     const user1Posts = posts.filter(post => {
//         return post.userId === 1;
//     });
 
//     console.log("\n===== POSTS BY USER ID 1 =====");
 
//     user1Posts.forEach(post => {
//         console.log(`Title: ${post.title}`);
//     });
 
 
//     // ==================================
//     // 7. Count posts created by user ID 1
//     // ==================================
 
//     const postCount = user1Posts.length;
 
//     console.log("\n===== POST COUNT =====");
//     console.log(`User ID 1 created ${postCount} posts.`);
 
 
//     // ==================================
//     // 8. First post with title > 50 characters
//     // ==================================
 
//     const longTitlePost = posts.find(post => {
//         return post.title.length > 50;
//     });
 
//     console.log("\n===== FIRST POST WITH TITLE > 50 CHARACTERS =====");
//     console.log(longTitlePost);
 
// })
 
// .catch(error => {
//     console.log("API Error:", error.message);
// });
 
 
 
 
 
 
 
// Task 4 — API + Search
// Use:
// https://fakestoreapi.com/products
// Ask the user:
// Enter product category:
// Example:
// electronics
// Then display only products belonging to that category.
// Also ask:
// Enter maximum price:
// Example:
// 500
// Display products matching both conditions:
// Category = electronics
// Price <= 500
// Concepts: prompt(), fetch(), filter(), conditions, functions.
 
 
 
// const API_URL = "https://fakestoreapi.com/products";
 
 
// // ==================================
// // Function to filter products
// // ==================================
 
// function searchProducts(products, category, maxPrice) {
 
//     return products.filter(product => {
//         return product.category === category &&
//             product.price <= maxPrice;
//     });
// }
 
 
// ==================================
// Fetch products
// ==================================
 
// fetch(API_URL)
 
//     .then(response => {
 
//         if (!response.ok) {
//             throw new Error("Failed to fetch products");
//         }
 
//         return response.json();
//     })
 
//     .then(products => {
 
//         // Ask user for category
//         const category = prompt("Enter product category:");
 
//         // Ask user for maximum price
//         const maxPrice = Number(prompt("Enter maximum price:"));
 
 
//         // Validate input
//         if (!category || isNaN(maxPrice)) {
//             console.log("Invalid input.");
//             return;
//         }
 
 
//         // Search products
//         const result = searchProducts(
//             products,
//             category.toLowerCase(),
//             maxPrice
//         );
 
 
//         // Display results
//         console.log("===== SEARCH RESULTS =====");
 
//         if (result.length === 0) {
 
//             console.log("No products found.");
 
//         } else {
 
//             result.forEach(product => {
 
//                 console.log(`
//                              Title: ${product.title}
//                               Category: ${product.category}
//                               Price: $${product.price}
//                                -------------------------
//                 `);
 
//             });
//         }
//     })
 
//     .catch(error => {
//         console.log("API Error:", error.message);
//     });
 
 
 
 
 
 
 
 
// Task 5 — API Shopping Cart
// Use:
// https://fakestoreapi.com/products
// Fetch the products and create a shopping cart.
// The student should:
// Display available products.
// Select products using their IDs.
// Add selected products to an array.
// Calculate cart total using reduce().
// Apply discount:
// Above $100 → 10%
// Above $200 → 20%
// Display final amount.
// Example:
// ===== CART =====
 
// Product 1: Laptop
// Price: $999
 
// Product 2: Mouse
// Price: $50
 
// Total: $1049
// Discount: 20%
// Final Amount: $839.20
 
 
 
 
// const API_URL = "https://fakestoreapi.com/products";
 
 
// // ==========================================
// // Calculate Cart Total
// // ==========================================
 
// function calculateCartTotal(cart) {
 
//     return cart.reduce((total, product) => {
//         return total + product.price;
//     }, 0);
// }
 
 
// // ==========================================
// // Calculate Discount
// // ==========================================
 
// function calculateDiscount(total) {
 
//     if (total > 200) {
//         return 20;
//     }
 
//     if (total > 100) {
//         return 10;
//     }
 
//     return 0;
// }
 
 
// // ==========================================
// // Calculate Final Amount
// // ==========================================
 
// function calculateFinalAmount(total, discount) {
 
//     return total - (total * discount / 100);
// }
 
 
// // ==========================================
// // Fetch Products
// // ==========================================
 
// fetch(API_URL)
 
//     .then(response => {
 
//         if (!response.ok) {
//             throw new Error("Failed to fetch products");
//         }
 
//         return response.json();
//     })
 
//     .then(products => {
 
//         // ==========================================
//         // Display Available Products
//         // ==========================================
 
//         console.log("===== AVAILABLE PRODUCTS =====");
 
//         products.forEach(product => {
 
//             console.log(
//                 `ID: ${product.id} | ${product.title} | $${product.price}`
//             );
 
//         });
 
 
//         // ==========================================
//         // Create Shopping Cart
//         // ==========================================
 
//         const cart = [];
 
 
//         // ==========================================
//         // Select Products
//         // ==========================================
 
//         const input = prompt(
//             "Enter product IDs separated by commas:\nExample: 1,3,5"
//         );
 
 
//         if (!input) {
//             console.log("No products selected.");
//             return;
//         }
 
 
//         // Convert input into IDs
//         const selectedIds = input
//             .split(",")
//             .map(id => Number(id.trim()));
 
 
//         // ==========================================
//         // Add Products To Cart
//         // ==========================================
 
//         selectedIds.forEach(id => {
 
//             const product = products.find(product => {
//                 return product.id === id;
//             });
 
 
//             if (product) {
 
//                 cart.push(product);
 
//             } else {
 
//                 console.log(`Product ID ${id} not found.`);
 
//             }
 
//         });
 
 
//         // ==========================================
//         // Check Cart
//         // ==========================================
 
//         if (cart.length === 0) {
 
//             console.log("Cart is empty.");
//             return;
 
//         }
 
 
//         // ==========================================
//         // Display Cart
//         // ==========================================
 
//         console.log("\n===== CART =====");
 
//         cart.forEach((product, index) => {
 
//             console.log(`
// Product ${index + 1}: ${product.title}
// Price: $${product.price}
// -------------------------
//             `);
 
//         });
 
 
//         // ==========================================
//         // Calculate Total
//         // ==========================================
 
//         const total = calculateCartTotal(cart);
 
 
//         // ==========================================
//         // Calculate Discount
//         // ==========================================
 
//         const discount = calculateDiscount(total);
 
 
//         // ==========================================
//         // Calculate Final Amount
//         // ==========================================
 
//         const finalAmount = calculateFinalAmount(
//             total,
//             discount
//         );
 
 
//         // ==========================================
//         // Display Bill
//         // ==========================================
 
//         console.log(`
// ===== BILL =====
 
// Total: $${total.toFixed(2)}
 
// Discount: ${discount}%
 
// Final Amount: $${finalAmount.toFixed(2)}
// `);
//     })
 
 
//     // ==========================================
//     // Error Handling
//     // ==========================================
 
//     .catch(error => {
 
//         console.log("API Error:", error.message);
 
//     });
 
 
 
 
 
 
 
 
// ⭐ Task 6 — FakeStore Product Report
// This is the best intermediate assignment for your current syllabus.
// API:
// https://fakestoreapi.com/products
// Create a complete product report.
// Students must implement:
// 1. Fetch API
// fetch(apiLink)
// 2. Convert response
// response.json()
// 3. Display all products
// Use:
// forEach()
// 4. Create product names array
// Use:
// map()
// 5. Filter expensive products
// price > 100
// Use:
// filter()
// 6. Find electronics product
// Use:
// find()
// 7. Calculate total price
// Use:
// reduce()
// 8. Check products
// Use:
// some()
// every()
// 9. Sort
// Highest price → lowest price.
// 10. Error handling
// Use:
// .catch()
// .finally()
// Expected final output
// ========== PRODUCT REPORT ==========
 
// Total Products: 20
 
// Product Names:
// - Fjallraven Backpack
// - Mens Casual Premium Slim Fit T-Shirts
// - Mens Cotton Jacket
// ...
 
// Products Above $100:
// ...
 
// Electronics Product:
// ...
 
// Total Product Value:
// $XXXX
 
// Any Product Above $500:
// true
 
// All Products Above $1:
// true
 
// Highest → Lowest:
// ...
// This stays within the concepts actually present in your student's code, especially the API flow using fetch(), .json(), .then(), .catch() and .finally().
 
 
// Task 6 — FakeStore Product Report
 
const apiLink = "https://fakestoreapi.com/products";
 
 
fetch(apiLink)
 
    // 1. Convert response to JSON
    .then(response => {
 
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
 
        return response.json();
    })
 
 
    // 2. Work with products
    .then(products => {
 
        console.log("========== PRODUCT REPORT ==========");
 
 
        // ==========================================
        // 3. Display all products using forEach()
        // ==========================================
 
        console.log("\n===== ALL PRODUCTS =====");
 
        products.forEach(product => {
 
            console.log(`
Title: ${product.title}
Price: $${product.price}
Category: ${product.category}
-----------------------------
            `);
 
        });
 
 
        // ==========================================
        // 4. Create product names array using map()
        // ==========================================
 
        const productNames = products.map(product => {
            return product.title;
        });
 
 
        console.log("\n===== PRODUCT NAMES =====");
 
        productNames.forEach(name => {
            console.log(`- ${name}`);
        });
 
 
        // ==========================================
        // 5. Filter expensive products
        // price > 100
        // ==========================================
 
        const expensiveProducts = products.filter(product => {
            return product.price > 100;
        });
 
 
        console.log("\n===== PRODUCTS ABOVE $100 =====");
 
        expensiveProducts.forEach(product => {
 
            console.log(
                `${product.title} - $${product.price}`
            );
 
        });
 
 
        // ==========================================
        // 6. Find electronics product
        // ==========================================
 
        const electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });
 
 
        console.log("\n===== ELECTRONICS PRODUCT =====");
 
        console.log(electronicsProduct);
 
 
        // ==========================================
        // 7. Calculate total price using reduce()
        // ==========================================
 
        const totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);
 
 
        console.log("\n===== TOTAL PRODUCT VALUE =====");
 
        console.log(`$${totalPrice.toFixed(2)}`);
 
 
        // ==========================================
        // 8. Check if ANY product is above $500
        // some()
        // ==========================================
 
        const anyAbove500 = products.some(product => {
            return product.price > 500;
        });
 
 
        console.log("\n===== CHECK PRODUCTS =====");
 
        console.log(
            `Any Product Above $500: ${anyAbove500}`
        );
 
 
        // ==========================================
        // 9. Check if EVERY product is above $1
        // every()
        // ==========================================
 
        const allAbove1 = products.every(product => {
            return product.price > 1;
        });
 
 
        console.log(
            `All Products Above $1: ${allAbove1}`
        );
 
 
        // ==========================================
        // 10. Sort highest price → lowest price
        // ==========================================
 
        const sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });
 
 
        console.log("\n===== HIGHEST → LOWEST =====");
 
        sortedProducts.forEach(product => {
 
            console.log(
                `${product.title} - $${product.price}`
            );
 
        });
 
    })
 
 
    // ==========================================
    // 11. Error handling
    // ==========================================
 
    .catch(error => {
 
        console.log("API Error:", error.message);
 
    })
 
 
    // ==========================================
    // 12. Completion message
    // ==========================================
 
    .finally(() => {
 
        console.log("\n========== REPORT COMPLETED ==========");
 
    });
 