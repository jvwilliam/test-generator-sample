import ora from "ora";
import chalk from "chalk";

(   async () => {

    async function openBrowserInstance() {
        const spinner = ora(chalk.yellow('Opening the browser instance...')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        spinner.succeed(chalk.green('Instance Successfuly Created!'));
    };

    async function loginWithUserCredentials() {
        const spinner = ora(chalk.yellow('Logging in as Admin')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        spinner.succeed(chalk.green('Login Successful!'));
    };

    async function createParentCategory() {
        const spinner = ora(chalk.yellow('Creating the Parent Category...')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        spinner.succeed(chalk.green('Parent Category Successfully Created!'));
    };

    async function createSubCategory() {
        const spinner = ora(chalk.yellow('Creating the Sub Category...')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        spinner.succeed(chalk.green('Sub Category Successfuly Created!'));
    };

    async function createTestProduct() {
        const spinner = ora(chalk.yellow('Creating the Test Product with ID TEST-001')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await assignParentCategory();
        await assignSubCategory();
        await assignRelatedProducts();
        spinner.succeed(chalk.green('Test Product Successfuly Created! Closing the browser instance.'));
    };

    async function assignParentCategory() {
        const spinner = ora(chalk.yellow('Assigning Parent Categeory to Test Product with ID TEST-001')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        spinner.succeed(chalk.green('Parent Category Succesfully Assigned!'));
    };

    async function assignSubCategory() {
        const spinner = ora(chalk.yellow('Assigning Sub Categeory to Test Product with ID TEST-001')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        spinner.succeed(chalk.green('Sub Category Succesfully Assigned!'));
    };

    async function assignRelatedProducts() {
        const spinner = ora(chalk.yellow('Assigning Related Products to Test Product with ID TEST-001')).start();
        await new Promise(resolve => setTimeout(resolve, 3000));
        spinner.succeed(chalk.green('Related Product Succesfully Assigned!!'));
    };

    async function generateTestDataSet() {
        await openBrowserInstance();
        await loginWithUserCredentials();
        await createParentCategory();
        await createSubCategory();
        await createTestProduct();
    };

    await generateTestDataSet();

    
})();