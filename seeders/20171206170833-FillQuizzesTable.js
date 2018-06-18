'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('quizzes', [
            {
                question: 'Capital of Italy',
                answer: 'Rome',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Portugal',
                answer: 'Lisbon',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Spain',
                answer: 'Madrid',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of France',
                answer: 'Paris',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Belgium',
                answer: 'Brussels',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Madagascar',
                answer: 'Antananarivo',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Colombia',
                answer: 'Bogotá',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Denmark',
                answer: 'Copenhagen',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Japan',
                answer: 'Tokyo',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Ukraine',
                answer: 'Kiev',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Capital of Syria',
                answer: 'Damascus',
                active: true,
                accepted: true,
                topicId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'The gas usually filled in the electric bulb',
                answer: 'nitrogen',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'The hardest substance available on earth is',
                answer: 'Diamond',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'The inert gas which is substituted for nitrogen in the air used by deep sea divers for breathing, is',
                answer: 'Helium',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Non stick cooking utensils are coated with',
                answer: 'Teflon',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
                answer: 'Africa',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
                answer: '1967',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'First Afghan War took place in',
                answer: '1839',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'During World War II, when did Germany attack France?',
                answer: '1940',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Filaria is caused by',
                answer: 'Mosquito',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'First International Peace Congress was held in London in',
                answer: '1843',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'For seeing objects at the surface of water from a submarine under water, the instrument used is a',
                answer: 'periscope',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'In which year of First World War Germany declared war on Russia and France?',
                answer: '1914',
                active: true,
                accepted: true,
                topicId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Made from a variety of materials, such as carbon, which inhibits the flow of current...?',
                answer: 'resistor',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: "A given signal's second harmonic is twice the given signal's __________ frequency...?",
                answer: 'Fundamental',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'In which year was MIDI(Musical Instrument Digital Interface) introduced?',
                answer: '1983',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'When measuring the characteristics of a small-signal amplifier, say for a radio receiver, one might be concerned with its "Noise..."?',
                answer: 'figure',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: "'DB' computer abbreviation usually means ?" ,
                answer: 'Database',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Who created Pretty Good Privacy (PGP)?',
                answer: 'Phil Zimmermann',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'In the United States the television broadcast standard is...?',
                answer: 'NTSC',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Which consists of two plates separated by a dielectric and can store a charge?',
                answer: 'capacitor',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: "'.JPG' extension refers usually to what kind of file?" ,
                answer: 'image',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'What does AM mean?',
                answer: 'Amplitude Modulation',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'In what year was the "@" chosen for its use in e-mail addresses?',
                answer: '1972',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Compact discs, (according to the original CD specifications) hold how many minutes of music?',
                answer: '74',
                active: true,
                accepted: true,
                topicId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('quizzes', null, {});
    }
};
