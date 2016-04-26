import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { jsdom } from 'jsdom';


// Configure chai

chai.use(chaiEnzyme());
chai.use(sinonChai);


// Configure jsdom

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
