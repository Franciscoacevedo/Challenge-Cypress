/// <reference types="Cypress"/>

import SesionPagina from '../../support/pages/PantallaLogin';
import InputsPagina from '../../support/pages/PantallaInputs';
import HoversPage from '../../support/pages/PantallaOVER';
import DropdownPage from '../../support/pages/DropdownListPagina';

describe('Practica tecnica APAP - herokuapp.com', () => {


    it('Credenciales Pantalla login ', () => {
        cy.fixture('DATA').then((DATA) => {
            SesionPagina.visit();
        
            DATA.loginUser[0].Users.forEach((user) => {
                DATA.loginPass[0].Pass.forEach((pass) => {
                    SesionPagina.login(user, pass);
                })
            })
        })
    });

    it('Introducir numero para validar', () => {
        cy.fixture('DATA').then((DATA) => {
            InputsPagina.visit();
            DATA.InputId[0].IDs.forEach((id) => {
                InputsPagina.input(id);
                InputsPagina.verify(id);
            })
        });
    });

    it('Over validar URL ', () => {
        cy.fixture('DATA').then((DATA) => {
            HoversPage.visit();
            DATA.HoverId[0].IDs.forEach((id) => {
                HoversPage.hoverOverAvatar(id);
                HoversPage.verifyProfileLinkIsVisible(id);
            })
        })
    });

    it('Diferente dropdown list', () => {
        cy.fixture('DATA').then((DATA) => {
            DropdownPage.visit();
            DATA.DropdownIDs[0].IDs.forEach((id) => {
                DropdownPage.selectOption(id);
                DropdownPage.verifySelectedOption(id);
            })
           
        })
    });
});