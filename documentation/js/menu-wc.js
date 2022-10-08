'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">simple-crud documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' : 'data-target="#xs-components-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' :
                                            'id="xs-components-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' : 'data-target="#xs-injectables-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' :
                                        'id="xs-injectables-links-module-AppModule-c26ed39918e1a8c66c7fee92a4e9db6d8442a1cb027fc8750edb7db365725a32e8175d74b1c9af802b1fa6a390a55dfb96292719f9791ec07e2a558e132e1fca"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClienteModule.html" data-type="entity-link" >ClienteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' : 'data-target="#xs-components-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' :
                                            'id="xs-components-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' }>
                                            <li class="link">
                                                <a href="components/ClienteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClienteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' : 'data-target="#xs-injectables-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' :
                                        'id="xs-injectables-links-module-ClienteModule-13414d78bf6cac2e57cc6f8fbb561949d179a62e2cd7f06e9d43238b1ba010edbbd787b19611933bfeeead464fb49bd7b5b26cb52ae86522ba0d08d76bb636c4"' }>
                                        <li class="link">
                                            <a href="injectables/ClienteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClienteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalAcoesModule.html" data-type="entity-link" >ModalAcoesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalAcoesModule-cfafc972b4e974aae247a854597345203fdad9a92e98ecf2261ac5aaf2044eba76ed700cf1222af54d1eb420d13a5e48bb051dd662aad145b767b7628c5fed4e"' : 'data-target="#xs-components-links-module-ModalAcoesModule-cfafc972b4e974aae247a854597345203fdad9a92e98ecf2261ac5aaf2044eba76ed700cf1222af54d1eb420d13a5e48bb051dd662aad145b767b7628c5fed4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalAcoesModule-cfafc972b4e974aae247a854597345203fdad9a92e98ecf2261ac5aaf2044eba76ed700cf1222af54d1eb420d13a5e48bb051dd662aad145b767b7628c5fed4e"' :
                                            'id="xs-components-links-module-ModalAcoesModule-cfafc972b4e974aae247a854597345203fdad9a92e98ecf2261ac5aaf2044eba76ed700cf1222af54d1eb420d13a5e48bb051dd662aad145b767b7628c5fed4e"' }>
                                            <li class="link">
                                                <a href="components/ModalAcoesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalAcoesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalContatoModule.html" data-type="entity-link" >ModalContatoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalContatoModule-ecbd88ca76436a8c0c5e82ffb7a6675d83d05148094f3ade7c96597f6faa88b8e8b52d68c29f3198546456d1320404b86e13f600091cea3e357ccc9577695fde"' : 'data-target="#xs-components-links-module-ModalContatoModule-ecbd88ca76436a8c0c5e82ffb7a6675d83d05148094f3ade7c96597f6faa88b8e8b52d68c29f3198546456d1320404b86e13f600091cea3e357ccc9577695fde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalContatoModule-ecbd88ca76436a8c0c5e82ffb7a6675d83d05148094f3ade7c96597f6faa88b8e8b52d68c29f3198546456d1320404b86e13f600091cea3e357ccc9577695fde"' :
                                            'id="xs-components-links-module-ModalContatoModule-ecbd88ca76436a8c0c5e82ffb7a6675d83d05148094f3ade7c96597f6faa88b8e8b52d68c29f3198546456d1320404b86e13f600091cea3e357ccc9577695fde"' }>
                                            <li class="link">
                                                <a href="components/ModalContatoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalContatoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cep.html" data-type="entity-link" >Cep</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cliente.html" data-type="entity-link" >Cliente</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contato.html" data-type="entity-link" >Contato</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logradouro.html" data-type="entity-link" >Logradouro</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClienteService.html" data-type="entity-link" >ClienteService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});