/*
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


const uuid4 = () => {
    var uuid = '', ii;
    for (ii = 0; ii < 32; ii += 1) {
        switch (ii) {
        case 8:
        case 20:
            uuid += '-';
            uuid += ((Math.random() * 16) | 0).toString(16);
            break;
        case 12:
            uuid += '-';
            uuid += '4';
            break;
        case 16:
            uuid += '-';
            uuid += ((Math.random() * 4) | 8).toString(16);
            break;
        default:
            uuid += ((Math.random() * 16) | 0).toString(16);
        }
    }
    return uuid;
};

/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {ba_academy.models.transactions.MintMarks} tx
 * @transaction
 */
function mintMarks(tx) {

    const student = tx.student;
    const subject = tx.subject;
    const amount = tx.amount;

    const subjectIndex = student.subjectIds.indexOf(subject.code);

    if (subjectIndex === -1) {
        throw new Error('[ custom error ] mintMarks error. Do not found Index. Wrong Subject code');
    }
    if (amount >= 40) {
        throw new Error('[ custom error ] mintMarks error. Amount so big');
    }
    return getParticipantRegistry('ba_academy.models.participants.Student')
        .then((registry) => {
            student.marks[subjectIndex] += amount;
            registry.update(student);
        })
        .then(() => {
            return getFactory().newEvent(
                'ba_academy.models.transactions',
                'MarksMinted'
            );
        })
        .then(event => {
            event.student = student;
            event.subject = subject;
            event.amount = student.marks[subjectIndex];
            emit(event);
        });
}




/**
 * Sample transaction
 * @param {ba_academy.models.transactions.TransferMarks} tx
 * @transaction
 */
function TransferMarks(tx) {

    const student = tx.student;
    const subject = tx.subject;
    const amount = tx.amount;

    const currentParticipant = getCurrentParticipant();

    const subjectIndexSender = currentParticipant.subjectIds.indexOf(subject.code);
    const subjectIndexRecipient = student.subjectIds.indexOf(subject.code);

    const senderTotalAmount = currentParticipant.marks[subjectIndexSender] - amount;
    const recipientTotalAmount = student.marks[subjectIndexRecipient] + amount;

    if (subjectIndexRecipient === -1) {
        throw new Error('[ custom error ] TransferMarks error. Do not found Index. Wrong Subject code');
    }
    if (subjectIndexSender === -1) {
        throw new Error('[ custom error ] TransferMarks error. Do not found Index. Wrong Subject code');
    }
    if (amount >= 10){
        throw new Error('[ custom error ] TransferMarks error. Amount so big');
    }
    if (senderTotalAmount <= recipientTotalAmount) {
        throw new Error('[ custom error ] Attemt to over marks error. Amount not enough');
    }

    return getParticipantRegistry('ba_academy.models.participants.Student')
        .then((registry) => {
            currentParticipant.marks[subjectIndexSender] = senderTotalAmount;
            student.marks[subjectIndexRecipient] = recipientTotalAmount;

            registry.update(student);
            registry.update(currentParticipant);
        })
        .then(() => {
            return getFactory().newEvent(
                'ba_academy.models.transactions',
                'MarksTransfered'
            );
        })
        .then(event => {

            event.subject = subject;
            event.amount = amount;

            event.studentSender = currentParticipant;
            event.studentRecipient = student;
            emit(event);
        });
}

/**
 * Sample transaction
 * @param {ba_academy.models.transactions.UpdateSubject} tx
 * @transaction
 */
function UpdateSubject(tx) {

    const subject = tx.subject;
    const name = tx.name;
    const code = tx.code;
    const detail = tx.detail;
    const teacher = tx.teacher;
    const studentIds = tx.studentIds;

}
