import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { camelize } from "@ember/string";

const creditCards = {
  americanExpress:
    "https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/master/mono/amex.svg?sanitize=true",
  dinersClub:
    "https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/master/mono/diners.svg?sanitize=true",
  discover:
    "https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/master/mono/discover.svg?sanitize=true",
  jCB:
    "https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/master/mono/jcb.svg?sanitize=true",
  masterCard:
    "https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/master/mono/mastercard.svg?sanitize=true",
  other:
    "https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/master/mono/generic.svg?sanitize=true",
  visa:
    "https://github.com/aaronfagan/svg-credit-card-payment-icons/raw/master/mono/visa.svg?sanitize=true",
};

export default class CreditCardComponent extends Component {
  @tracked
  cardNumber = "";

  @tracked
  cardType = "other";

  @tracked
  cardCvc = null;

  @tracked
  zipCode = null;

  get creditCardImage() {
    const type = creditCards[this.cardType];

    return type ? type : creditCards["other"];
  }

  get cardCvcLength() {
    return this.cardType === "americanExpress" ? 4 : 3;
  }

  get cardCvcMask() {
    return this.cardType === "americanExpress" ? "9999" : "999";
  }

  @action
  update(unmasked, masked, cardType) {
    this.cardNumber = unmasked;
    this.cardType = camelize(cardType);
  }

  @action
  updateZip(value) {
    this.zipCode = value;
  }

  @action
  updateCvc(value) {
    this.cardCvc = value;
  }
}
