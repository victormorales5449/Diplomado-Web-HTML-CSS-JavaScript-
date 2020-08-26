// valiables globales 

export const Select = x => document.querySelector(x);
export const Selects = x => document.querySelectorAll(x);

// Clase para todo el sistema
export class MasterTeach {
    constructor() {
        this.VERSION = '1.0.0.10';
        this.AUTHOR = 'Victor L Morales M';
        this.SUPPORT = 'suport@metainford.com';
        this.color_green = '#27cebc';
        this.color_blue = '#00acec';
        this.color_yellow = '#73746E';
        this.color_red = '#f35958';
        this.color_grey = '#dce0e8';
        this.color_grey2 = '#97989c';
        this.color_black = '#1b1e24';
        this.color_purple = '#6d5eac';
        this.color_primary = '#6d5eac';
        this.color_success = '#4eb2f5';
        this.color_danger = '#f35958';
        this.color_warning = '#f7cf5e';
        this.color_info = '#3b4751';
    }

    initSocial() {
        const seticon = Select('#social');
        let Socials = {
            Twitter: {
                url: 'https://twitter.com/Ingmorales54',
                icon: 'icon-twitter',
                name: 'Twitter'
            },
            Linkedin: {
                url: 'https://www.linkedin.com/in/victor-l-morales-m/',
                icon: 'icon-linkedin',
                name: 'Linkedin'
            },
            Whatsapp: {
                url: 'https://wa.me/18294013827',
                icon: 'icon-whatsapp',
                name: 'Whatsapp'
            },
            Telegram: {
                url: 'https://t.me/victormorales54',
                icon: 'icon-telegram',
                name: 'Telegram'
            },
        }

        let socialicon = '';
        for (let social in Socials) {
            socialicon +=
                `<li><a href="${Socials[social].url}" title="${Socials[social].name}" target="_blank"><i class="socialicon ${Socials[social].icon}"></i></a></li>`;
        }

        seticon.innerHTML = socialicon;
    };
}