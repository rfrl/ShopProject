import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameImg = ((elem, img) => elem.element(by.name('imglist')).GetAttribute("src").then(text => text == img));
let sameName = ((elem, name) => elem.element(by.name('namelist')).getText().then(text => text == name));

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^estou no menu de produtos$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('ShopGui');
        await $("a[name='produtos']").click();
    })

    Given(/^estou no menu de finalizar$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('ShopGui');
        await $("a[name='finalizar']").click();
    })

    Given(/^estou no menu de pedidos$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('ShopGui');
        await $("a[name='pedidos']").click();
    })

    Given(/^eu vejo o produto "([^\"]*)" na lista de produtos a venda$/, async (name) => {
        var produtos : ElementArrayFinder = element.all(by.name('productlist'));
        await produtos;
        var samename = produtos.filter(elem => sameName(elem,name));
        await samename;
        await samename.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Given(/^eu nao vejo o produto "([^\"]*)" cadastrado$/, async (name) => {
        var produtos : ElementArrayFinder = element.all(by.name('productlist'));
        await produtos;
        var samename = produtos.filter(elem => sameName(elem,name));
        await samename;
        await samename.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });


    When(/^eu nao vejo nenhum produto cadastrado$/,  async () => {
        var allproduts : ElementArrayFinder = element.all(by.name('namelist'));
        await allproduts;
        await allproduts.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    })

    When(/^eu tento adicionar o produto "([^\"]*)" ao meu carrinho$/, async (name) => {
        var produtos : ElementArrayFinder = element.all(by.name('productlist'));
        await produtos;
        var samename = produtos.filter(elem => sameName(elem,name));
        await samename;
        await samename.get(0).element(by.name('carbutton')).click()
    });

    When(/^eu cadastro o nome "([^\"]*)" com telefone "([^\"]*)" email "([^\"]*)" e quantidade "([^\"]*)" na minha lista de dados$/, async (name, fone, email, qt) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='fonebox']").sendKeys(<string> fone);
        await $("input[name='emailbox']").sendKeys(<string> email);
        await $("input[name='qtbox']").sendKeys(<string> qt);
    });

    When(/^eu tento adicionar o produto "([^\"]*)" com preço "([^\"]*)" e quantidade "([^\"]*)"$/, async (name, preco, qt) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='pricebox']").sendKeys(<string> preco);
        await $("input[name='qtbox']").sendKeys(<string> qt);
        await $("button[name='addbutton']").click();
    });

    When(/^eu clico na opção finalizar compra$/, async () => {
        await $("button[name='endbutton']").click();
    });
    
    When(/^eu tento adicionar o produto "([^\"]*)" com preço "([^\"]*)" quantidade "([^\"]*)" e imagem "([^\"]*)"$/, async (name, preco, qt, img) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='pricebox']").sendKeys(<string> preco);
        await $("input[name='qtbox']").sendKeys(<string> qt);
        await $("input[name='imgbox']").sendKeys(<string> img);
        await $("button[name='addbutton']").click();
    });

    Then(/^eu clico no menu finalizar$/, async () => {
        await browser.get("http://localhost:4200/Finalizar");
        await expect(browser.getTitle()).to.eventually.equal('ShopGui');
    })

    Then(/^eu nao vejo nenhum produto no meu carrinho$/, async (name) => {
        var produtos : ElementArrayFinder = element.all(by.name('productlist'));
        await produtos;
        await produtos.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Then(/^eu vejo o produto "([^\"]*)" no meu carrinho$/, async (name) => {
        var produtos : ElementArrayFinder = element.all(by.name('productlist'));
        await produtos;
        var samename = produtos.filter(elem => sameName(elem,name));
        await samename;
        await samename.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    
    Then(/^eu vejo o produto "([^\"]*)" na lista de produtos$/, async (name) => {
        var produtos : ElementArrayFinder = element.all(by.name('productlist'));
        await produtos;
        var samename = produtos.filter(elem => sameName(elem,name));
        await samename;
        await samename.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Then(/^eu vejo o produto "([^\"]*)" com a imagem "([^\"]*)" na lista de produtos$/, async (name, img) => {
        var produtos : ElementArrayFinder = element.all(by.name('productlist'));
        await produtos;
        var samename = produtos.filter(elem => sameName(elem,name));
        await samename;
        await samename.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})